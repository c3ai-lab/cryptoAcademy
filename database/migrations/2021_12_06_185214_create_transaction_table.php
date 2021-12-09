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
      $table->foreignId('symbol_id');
      $table->foreignId('user_id');
      $table->unsignedDouble('quantity');
      $table->unsignedDouble('price');
      $table->unsignedDouble('exchange_price');
      $table->enum('action', ['sell', 'buy']);
      $table->timestamps();
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
