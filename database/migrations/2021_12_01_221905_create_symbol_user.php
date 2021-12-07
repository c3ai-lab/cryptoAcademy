<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSymbolUser extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('symbol_user', function (Blueprint $table) {
      $table->id();
      $table->foreignId('symbol_id');
      $table->foreignId('user_id');
      $table->timestamps();

      $table->unique(['symbol_id', 'user_id']);
      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
      $table->foreign('symbol_id')->references('id')->on('symbols')->onDelete('cascade');
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('symbol_user');
  }
}
