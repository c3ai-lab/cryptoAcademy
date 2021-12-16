<?php

namespace App\Http\Controllers;

use App\Enum\MessageCodes;
use App\Http\Resources\UserResource;
use Illuminate\Http\Request;
use Validator;


class AuthController extends Controller
{
  public function __construct()
  {
    $this->middleware('jwt.verify', ['except' => ['login']]);
  }

  /**
   * Get a JWT via given credentials.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function login(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'email' => 'required|email',
      'password' => 'required|string|min:6',
    ]);

    if ($validator->fails()) {
      return response()->json($validator->errors(), 422);
    }

    $credentials = $request->only('email', 'password');
    $credentials['is_verified'] = 1;


    if (!$token = auth()->attempt(array_merge($validator->validated(), $credentials))) {
      return response()->json(['msgcode' => MessageCodes::USER_NOT_FOUND], 401);
    }

    return $this->createNewToken($token);
  }


  /**
   * Log the user out (Invalidate the token).
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function logout()
  {
    auth()->logout();

    return response()->json(['msgcode' => MessageCodes::LOGOUT_SUCCESS]);
  }

  /**
   * Refresh a token.
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function refresh()
  {
    return $this->createNewToken(auth()->refresh());
  }


  /**
   * Get the token array structure.
   *
   * @param string $token
   *
   * @return \Illuminate\Http\JsonResponse
   */
  protected function createNewToken($token)
  {
    return response()->json([
      'access_token' => $token,
      'token_type' => 'bearer',
      'expires_in' => auth()->factory()->getTTL() * 60,
      'user' => new UserResource(auth()->user())
    ]);
  }
}

