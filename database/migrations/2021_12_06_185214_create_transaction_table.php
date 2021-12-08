<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('transaction', function (Blueprint $table) {
      $table->id();
      $table->unsignedBigInteger('user_id')->unsigned();
      $table->float('quantity');
      $table->unsignedBigInteger('symbol_id')->unsigned();
      $table->float('price');
      $table->enum('action', ['sell', 'buy']);
      $table->timestamps();
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
    Schema::dropIfExists('transaction');
  }
}
