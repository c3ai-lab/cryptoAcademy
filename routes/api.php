<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsFeedController;
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

Route::group(['prefix' => 'auth'], function () {
  Route::post('/login', [AuthController::class, 'login']);
  Route::post('/register', [AuthController::class, 'register']);

  Route::group(['middleware' => ['jwt.verify']], function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);
    Route::get('/change-password', [AuthController::class, 'changePassword']);
    Route::get('/user-profile', [AuthController::class, 'userProfile']);
    Route::get('/news-feed', [NewsFeedController::class, 'getAll']);
  });
});
