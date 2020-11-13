<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCardHandlerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cardHandler', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('plans_id')->unsigned()->nullable();
            $table->foreign('plans_id')->references('id')->on('plans_item')->onDelete('cascade');
            $table->integer('costSum');
            $table->string('period');
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
        Schema::dropIfExists('cardHandler');
    }
}
