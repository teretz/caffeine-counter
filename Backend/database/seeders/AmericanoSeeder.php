<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Drinks;

class AmericanoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Drinks::create([
            'name' => 'Americano',
            'description' => 'Sometimes you need to water it down a bit... and in comes the americano with an average of 77mg. of caffeine per serving.',
            'caffeine_mgs_per_serving' => '77',
        ]);
    }
}
