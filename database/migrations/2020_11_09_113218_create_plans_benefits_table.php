<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlansBenefitsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plans_benifits', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('plans_id')->unsigned();
            $table->foreign('plans_id')->references('id')->on('plans_item')->onDelete('cascade');
            $table->integer('benefits_id')->unsigned();
            $table->foreign('benefits_id')->references('id')->on('benefits')->onDelete('cascade');;
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
        Schema::dropIfExists('plans_benifits');
    }
}
