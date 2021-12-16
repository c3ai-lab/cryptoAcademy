<?php

namespace App\Http\Controllers;


use App\Enum\MessageCodes;
use App\Http\Resources\UserResource;
use App\Models\User;
use App\Notifications\PasswordResetMail;
use App\Rules\MatchOldPassword;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Validator;

class UserController extends Controller
{
  const Init_BALANCE = 1000000;

  public function __construct()
  {
    $this->middleware('jwt.verify', ['except' => ['createUser', 'verifyUser', 'resetCurrentUserPassword']]);
  }

  /**
   * Get the authenticated User.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function getCurrentUser()
  {
    return new UserResource((auth()->user()));
  }

  /**
   * Register a User.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function createUser(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required|string|between:2,100|unique:users',
      'email' => 'required|string|email|max:100|unique:users',
      'password' => 'required|string|confirmed|min:6',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $user = User::create(array_merge(
      $validator->validated(),
      ['password' => bcrypt($request->password), "balance" => self::Init_BALANCE]
    ));

    $verification_code = Str::random(30); //Generate verification code
    DB::table('user_verifications')->insert(['user_id' => $user->id, 'token' => $verification_code]);

    event(new Registered($user));

    return response()->json([
      'msgcode' => MessageCodes::REGISTER_SUCCESS,
      'user' => new UserResource($user)
    ], 201);
  }

  public function updateCurrentUser(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required|string|between:2,100|unique:users',
      'email' => 'required|string|email|max:100|unique:users'
    ]);

    if ($validator->fails()) {

      return response()->json($validator->errors(), 400);
    }

    User::find(auth()->user()->id)->update(['name' => $request->name, 'email' => $request->email]);

    return response()->json([
      'msgcode' => MessageCodes::USERDATA_CHANGE_SUCCESS,
      'user' => new UserResource(User::find(auth()->user()->id))
    ], 201);
  }

  public function deleteCurrentUser()
  {
    $user = auth()->user();
    $user->userVerification()->delete();
    $user->transactions()->delete();
    $user->favorites()->detach();
    User::find(auth()->user()->id)->delete();
    auth()->logout();
    return response()->json(['msgcode' => MessageCodes::USER_DELETE]);
  }

  public function resetCurrentUser()
  {
    $user = auth()->user();
    $user->userVerification()->delete();
    $user->transactions()->delete();
    $user->favorites()->detach();
    $user->balance = self::Init_BALANCE;
    $user->save();

    return response()->json(['msgcode' => MessageCodes::USER_RESET]);
  }

  public function updateCurrentUserPassword(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'password' => ['required', new MatchOldPassword],
      'new_password' => 'required|string|confirmed|min:6',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 422);
    }
    User::find(auth()->user()->id)->update(['password' => bcrypt($request->new_password)]);

    return response()->json(['msgcode' => MessageCodes::PASSWORD_CHANGE_SUCCESS]);
  }

  public function resetCurrentUserPassword(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => 'required|email',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 422);
    }
    $password = Str::random();

    $user = User::where(["email" => $request->email])->first();
    if (!is_null($user)) {
      $user->notify(new PasswordResetMail($user, $password));
      $user->update(['password' => bcrypt($password)]);
      return response()->json(['msgcode' => MessageCodes::PASSWORD_RESET_SUCCESS]);
    }
    return response()->json(['msgcode' => MessageCodes::ACCOUNT_DOESNT_EXIST], 400);
  }

  public function verifyUser($verification_code)
  {
    $check = DB::table('user_verifications')->where('token', $verification_code)->first();

    if (!is_null($check)) {
      $user = User::find($check->user_id);

      if ($user->is_verified == 1) {
        return response()->json([
          'msgcode' => MessageCodes::ACCOUNT_ALREADY_VERIFIED
        ]);
      }

      $user->update(['is_verified' => 1, 'email_verified_at' => Carbon::now()]);
      DB::table('user_verifications')->where('token', $verification_code)->delete();

      return response()->json([
        'msgcode' => MessageCodes::VERIFY_EMAIL_SUCCESS
      ]);
    }

    return response()->json(['msgcode' => MessageCodes::VERIFY_EMAIL_FAIL], 400);
  }
}
