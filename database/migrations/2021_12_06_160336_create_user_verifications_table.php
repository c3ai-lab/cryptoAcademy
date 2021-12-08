<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserVerificationsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('user_verifications', function (Blueprint $table) {
      $table->increments('id');
      $table->unsignedBigInteger('user_id')->unsigned();
      $table->string('token');

      $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
    });

    Schema::table('users', function (Blueprint $table) {
      $table->boolean('is_verified')->default(0);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists("user_verifications");

    Schema::table('users', function (Blueprint $table) {
      $table->dropColumn('is_verified');
    });
  }
}
