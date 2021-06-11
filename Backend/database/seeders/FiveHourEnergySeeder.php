<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Drinks;

class FiveHourEnergySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Drinks::create([
            'name' => '5 Hour Energy',
            'description' => 'An amazing shot of get up and go! Each 2 fl. oz. container has 200mg of caffeine to get you going.',
            'caffeine_mgs_per_serving' => '200',
        ]);
    }
}
