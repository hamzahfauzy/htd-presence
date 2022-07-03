<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddColumnsToEmployeePresence extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('employee_presence', function (Blueprint $table) {
            $table->dateTime('started_at')->nullable();
            $table->dateTime('finished_at')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('employee_presence', function (Blueprint $table) {
            $table->dropColumn(['started_at','finished_at']);
        });
    }
}
