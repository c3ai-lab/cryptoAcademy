<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCandlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('candles', function (Blueprint $table) {
            $table->id();
            $table->integer('mts')->unsigned();
            $table->double('open')->unsigned();
            $table->double('high')->unsigned();
            $table->double('low')->unsigned();
            $table->double('close')->unsigned();
            $table->double('volume')->unsigned();
            $table->timestamps();

            $table->foreignId('symbol_id')->constrained();
            $table->foreignId('time_frame_id')->constrained();

            $table->index(['mts', 'symbol_id', 'time_frame_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('candles');
    }
}
