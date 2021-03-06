<?php

namespace App\Http\Controllers;


use App\Enum\MessageCodes;
use App\Http\Resources\SymbolUserResource;
use App\Http\Resources\UserResource;
use App\Models\Symbol;
use App\Models\User;
use App\Notifications\PasswordResetMail;
use App\Rules\MatchOldPassword;
use App\Service\BinanceApiService;
use Carbon\Carbon;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
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
    return new UserResource((auth()->user()));
  }

  public function getCurrentUserWallet(Request $request)
  {
    $collection = Symbol::all();
    $filtered = $request->has('favorite') ? $collection->where('is_favorite', $request->get('favorite')) : $collection;

    $apiService = new BinanceApiService();
    $rate = $apiService->getPriceOfEuroToUsd();
    $coll = $filtered->map(function ($item) use ($rate, $apiService) {
      $balance = $item->user_quantity > 0 ? $item->user_quantity * $apiService->getPriceOfSymbol($item->api_symbol) / $rate : 0;
      $item->user_balance = $balance;
      return $item;
    });

    return SymbolUserResource::collection($coll);
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
    $verification_code = Str::random(30);
    $user = User::create(array_merge(
      $validator->validated(),
      ['password' => bcrypt($request->password), "balance" => User::INIT_BALANCE, "verify_token" => $verification_code]
    ));

    event(new Registered($user));

    return response()->json([
      'msgcode' => MessageCodes::REGISTER_SUCCESS,
      'user' => new UserResource($user)
    ], 201);
  }

  public function updateCurrentUser(Request $request)
  {
    $validator = Validator::make($request->all(), [
//      'name' => 'required|string|between:2,100|unique:users',
//      'email' => 'required|string|email|max:100|unique:users',
      'x_axis' => 'required|int',
      'y_axis' => 'required|int',
    ]);

    if ($validator->fails()) {

      return response()->json($validator->errors(), 400);
    }

    User::find(auth()->user()->id)->update(['x_axis' => $request->x_axis, 'y_axis' => $request->y_axis]);
//    User::find(auth()->user()->id)->update(['name' => $request->name, 'email' => $request->email, 'x_axis' => $request->x_axis, 'y_axis' => $request->y_axis]);

    return response()->json([
      'msgcode' => MessageCodes::USERDATA_CHANGE_SUCCESS,
      'user' => new UserResource(User::find(auth()->user()->id))
    ], 201);
  }

  public function deleteCurrentUser()
  {
    $user = auth()->user();
    $user->transactions()->delete();
    $user->favorites()->detach();
    User::find(auth()->user()->id)->delete();
    auth()->logout();
    return response()->json(['msgcode' => MessageCodes::USER_DELETE]);
  }

  public function resetCurrentUser()
  {
    $user = auth()->user();
    $user->transactions()->delete();
    $user->favorites()->detach();
    $user->balance = User::INIT_BALANCE;
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
      return response()->json(['msgcode' => MessageCodes::PASSWORD_CHANGE_FAIL], 422);
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
    $loginurl = "/login";
    $check = DB::table('users')->where('verify_token', $verification_code)->first();

    if (!is_null($check)) {
      $user = User::find($check->id);

      if ($user->is_verified == 1) {
        return Redirect::to($loginurl);
      }

      $user->update(['is_verified' => 1, 'email_verified_at' => Carbon::now(), 'verify_token' => ""]);

      return Redirect::to($loginurl);
    }

    return response()->json(['msgcode' => MessageCodes::VERIFY_EMAIL_FAIL], 400);
  }

  // sry das ist sehr krude...
  // hatte probleme mit den Events des Packages tymon/JWTAuth, welches auch nicht mehr maintained wird
  // Eine m??gliche L??sung waere der Fork https://github.com/PHP-Open-Source-Saver/jwt-auth
  // da sind Events wohl vernuenftig implementiert
  public function modalShown() {
    $user = auth()->user();
    $user->is_first_visit = false;
    $user->save();

    return response()->json([
      'msgcode' => MessageCodes::MODAL_CLICKED_SUCCESS
    ]);
  }
}
