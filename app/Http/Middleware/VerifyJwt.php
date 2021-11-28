<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;

class VerifyJwt
{
  public function handle(Request $request, Closure $next)
  {
    try {
      if (!JWTAuth::parseToken()) {
        abort(401);
      }
    } catch (\Exception $e) {
      if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
        abort(401);
      } else if ($e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
        abort(401);
      } else if ($e instanceof \Tymon\JWTAuth\Exceptions\JWTException) {
        abort(401);
      } else {
        abort(401);
      }
    }
    return $next($request);
  }
}
