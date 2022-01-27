<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class RemoveVerifyTable extends Migration
{
  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::dropIfExists("user_verifications");
  }

  /**
   * Run the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::create('user_verifications', function (Blueprint $table) {
      $table->increments('id');
      $table->unsignedBigInteger('user_id')->unsigned();
      $table->string('token');

      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    });
  }

}
