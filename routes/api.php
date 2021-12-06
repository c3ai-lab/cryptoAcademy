<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsFeedController;
use App\Http\Controllers\UserController;
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

Route::group(['middleware' => 'jwt.verify'], function () {
  Route::group(['prefix' => 'auth'], function () {
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
  });

  Route::group(['prefix' => 'user'], function () {
    Route::get('/', [UserController::class, 'getCurrentUser']);
    Route::post('/', [UserController::class, 'createUser']);
    Route::put('/', [UserController::class, 'updateCurrentUser']);
    Route::delete('', [UserController::class, 'deleteCurrentUser']);
    Route::put('/password', [UserController::class, 'updateCurrentUserPassword']);
  });

  Route::group(['prefix' => 'trading'], function () {
    Route::post('/buy', [UserController::class, 'createUser']);
    Route::post('/sell', [UserController::class, 'updateCurrentUser']);
  });

  Route::get('/news-feed', [NewsFeedController::class, 'getAll']);
});



