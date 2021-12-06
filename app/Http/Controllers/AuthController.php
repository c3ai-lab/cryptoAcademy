<?php

namespace App\Http\Controllers;

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

    if (!$token = auth()->attempt($validator->validated())) {
      return response()->json(['error' => 'Unauthorized'], 401);
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

    return response()->json(['message' => 'Successfully logged out']);
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
      'user' => auth()->user()
    ]);
  }

  public function verifyUser($verification_code)
  {
    $check = DB::table('user_verifications')->where('token',$verification_code)->first();

    if(!is_null($check)){
      $user = User::find($check->user_id);

      if($user->is_verified == 1){
        return response()->json([
          'success'=> true,
          'message'=> 'Account already verified..'
        ]);
      }

      $user->update(['is_verified' => 1]);
      DB::table('user_verifications')->where('token',$verification_code)->delete();

      return response()->json([
        'success'=> true,
        'message'=> 'You have successfully verified your email address.'
      ]);
    }

    return response()->json(['success'=> false, 'error'=> "Verification code is invalid."]);

  }
}

