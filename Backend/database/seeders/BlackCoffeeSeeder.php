<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Drinks;

class BlackCoffeeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Drinks::create([
            'name' => 'Black Coffee',
            'description' => 'The classic. The average 8oz. serving of black coffee has 95mg of caffeine.',
            'caffeine_mgs_per_serving' => '95',
        ]);
    }
}
