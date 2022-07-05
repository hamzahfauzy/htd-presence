<?php

namespace Database\Seeders;

use App\Models\Worktime;
use App\Models\WorktimeItem;
use Illuminate\Database\Seeder;

class WorktimeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Worktime::create([
            'name' => 'Default'
        ]);

        WorktimeItem::insert([
            [
                'worktime_id' => 1,
                'name' => 'Pagi',
                'start_time' => '07:00',
                'end_time' => '11:59',
                'on_time_start' => '07:00',
                'on_time_end' => '08:00',
            ],
            [
                'worktime_id' => 1,
                'name' => 'Siang',
                'start_time' => '13:00',
                'end_time' => '19:00',
                'on_time_start' => '17:00',
                'on_time_end' => '19:00',
            ],
        ]);
    }
}
