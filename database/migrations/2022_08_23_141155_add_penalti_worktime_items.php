<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPenaltiWorktimeItems extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('worktime_items', function (Blueprint $table) {
            //
            $table->integer('penalty')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('worktime_items', function (Blueprint $table) {
            //
            $table->dropColumn(['penalty']);
        });
    }
}
