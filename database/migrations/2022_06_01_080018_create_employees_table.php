<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmployeesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('employees', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->nullable();
            $table->bigInteger('workunit_id');
            $table->string('nip');
            $table->string('name');
            $table->string('group')->nullable();
            $table->string('position')->nullable();
            $table->string('head_position')->nullable();
            $table->string('head_name')->nullable();
            $table->string('phone')->nullable();
            $table->integer('is_free_place')->nullable()->default(0);
            $table->integer('status')->default(1);
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
        Schema::dropIfExists('employees');
    }
}
