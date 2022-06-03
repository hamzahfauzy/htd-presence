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
                'presence_id' => 1,
                'time' => '07:00',
                'day' => '1'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 1,
                'time' => '07:00',
                'day' => '2'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 1,
                'time' => '07:00',
                'day' => '3'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 1,
                'time' => '07:00',
                'day' => '4'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 1,
                'time' => '07:00',
                'day' => '5'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 2,
                'time' => '16:30',
                'day' => '1'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 2,
                'time' => '16:30',
                'day' => '2'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 2,
                'time' => '16:30',
                'day' => '3'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 2,
                'time' => '16:30',
                'day' => '4'
            ],
            [
                'worktime_id' => 1,
                'presence_id' => 2,
                'time' => '12:00',
                'day' => '5'
            ]
        ]);
    }
}
