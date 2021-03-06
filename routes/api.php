<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\NewsFeedController;
use App\Http\Controllers\SymbolUserController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\LeaderBoardController;
use App\Http\Controllers\PriceController;
use App\Http\Controllers\ReturnsController;
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

Route::group(['prefix' => 'auth'], function () {
  Route::post('/login', [AuthController::class, 'login']);
  Route::post('/logout', [AuthController::class, 'logout']);
  Route::post('/refresh', [AuthController::class, 'refresh']);
});

Route::group(['prefix' => 'user'], function () {
  Route::get('/', [UserController::class, 'getCurrentUser']);
  Route::get('/wallet', [UserController::class, 'getCurrentUserWallet']);
  Route::post('/', [UserController::class, 'createUser']);
  Route::put('/', [UserController::class, 'updateCurrentUser']);
  Route::delete('/', [UserController::class, 'deleteCurrentUser']);
  Route::put('/password', [UserController::class, 'updateCurrentUserPassword']);
  Route::post('/password/reset', [UserController::class, 'resetCurrentUserPassword']);
  Route::post('/resetAll', [UserController::class, 'resetCurrentUser']);
  Route::post('/modal-shown', [UserController::class, 'modalShown']);

  Route::group(['prefix' => 'favorites'], function () {
    Route::get('/', [SymbolUserController::class, 'index']);
    Route::post('/{symbol}', [SymbolUserController::class, 'store']);
    Route::delete('/{symbol}', [SymbolUserController::class, 'delete']);
  });

  Route::group(['prefix' => 'transaction'], function () {
    Route::get('/', [TransactionController::class, 'index']);
    Route::post('/buy', [TransactionController::class, 'buy']);
    Route::post('/sell', [TransactionController::class, 'sell']);
  });

  Route::group(['prefix' => 'returns'], function () {
    Route::get('/', [ReturnsController::class, 'index']);
    Route::get('/{symbol}', [ReturnsController::class, 'show']);
  });
});

Route::group(['prefix' => 'leaderboard'], function () {
  Route::get('/{time}', [LeaderBoardController::class, 'index']);
});

Route::get('/news-feed', [NewsFeedController::class, 'getAll']);

Route::group(['prefix' => 'prices'], function () {
  Route::get('/', [PriceController::class, 'index']);
  Route::get('/{symbol}', [PriceController::class, 'show']);
});
