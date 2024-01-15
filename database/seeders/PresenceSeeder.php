<?php

namespace Database\Seeders;

use App\Models\Presence;
use Illuminate\Database\Seeder;

class PresenceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        Presence::create([
            'name' => 'Masuk',
            'tolerance_time' => 60
        ]);
        
        Presence::create([
            'name' => 'Pulang',
            'tolerance_time' => 120
        ]);
    }
}
