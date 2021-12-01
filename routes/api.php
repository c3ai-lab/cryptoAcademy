<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsFeedController;
use App\Http\Controllers\SymbolController;
use App\Http\Controllers\SymbolUserController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'auth'], function ($router) {
  Route::post('/login', [AuthController::class, 'login']);
  Route::post('/register', [AuthController::class, 'register']);

  Route::group(['middleware' => 'jwt'], function ($router) {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::get('/news-feed', [NewsFeedController::class, 'getAll']);
    Route::get('/symbols', [SymbolController::class, 'index']);
    Route::get('/favorites', [SymbolUserController::class, 'index']);
    Route::post('/favorites/{symbol}/add', [SymbolUserController::class, 'store']);
    Route::post('/favorites/{symbol}/remove', [SymbolUserController::class, 'delete']);
  });
});
