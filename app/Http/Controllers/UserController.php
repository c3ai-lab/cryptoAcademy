<?php

namespace App\Http\Controllers;


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
    return new (auth()->user());
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
      ['password' => bcrypt($request->password), "balance" => "1000000"]
    ));

    $verification_code = Str::random(30); //Generate verification code
    DB::table('user_verifications')->insert(['user_id' => $user->id, 'token' => $verification_code]);

    event(new Registered($user));

    return response()->json([
      'message' => 'Thanks for signing up! Please check your email to complete your registration.',
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
      'message' => 'User change successfully.',
      'user' => new UserResource(User::find(auth()->user()->id))
    ], 201);
  }

  public function deleteCurrentUser()
  {
    User::find(auth()->user()->id)->delete();
    auth()->logout();
    return response()->json(['message' => 'User deleted successfully.']);
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

    return response()->json(['message' => 'Password change successfully.']);
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
      return response()->json(['message' => 'Password reset successfully.']);
    }
    return response()->json(['message' => 'Account doesn\'t exist.'], 400);
  }

  public function verifyUser($verification_code)
  {
    $check = DB::table('user_verifications')->where('token', $verification_code)->first();

    if (!is_null($check)) {
      $user = User::find($check->user_id);

      if ($user->is_verified == 1) {
        return response()->json([
          'message' => 'Account already verified.'
        ]);
      }

      $user->update(['is_verified' => 1, 'email_verified_at' => Carbon::now()]);
      DB::table('user_verifications')->where('token', $verification_code)->delete();

      return response()->json([
        'message' => 'You have successfully verified your email address. '
      ]);
    }

    return response()->json(['message' => "Verification code is invalid."], 400);
  }
}
