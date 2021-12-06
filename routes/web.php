<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('user/verify/{verification_code}', [AuthController::class, 'verifyUser']);
//Route::get('password/reset/{token}', [ResetPasswordController, 'showResetForm'])->name('password.request');
//Route::post('password/reset', [ResetPasswordController, 'postReset'])->name('password.reset');

Route::get('/{any}', function () {
  return view('layouts.vue');
})->where('any', '.*');
