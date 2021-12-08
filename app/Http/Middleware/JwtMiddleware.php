<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;

class JwtMiddleware
{
  public function handle($request, Closure $next)
  {
    try {
      $user = JWTAuth::parseToken()->authenticate();
      if ($user->is_verified == 0) {
        return response()->json(['message' => 'Please make sure you entered the right information and you have verified your email address'], 401);
      }
    } catch (\Exception $e) {
      if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
        return response()->json(['message' => 'Token is Invalid'], 401);
      } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
        return response()->json(['message' => 'Token is Expired'], 401);
      } else {
        return response()->json(['message' => 'Authorization Token not found'], 401);
      }
    }
    return $next($request);
  }
}
