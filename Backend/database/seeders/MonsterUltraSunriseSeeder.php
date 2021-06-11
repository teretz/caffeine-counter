<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Drinks;

class MonsterUltraSunriseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Drinks::create([
            'name' => 'Monster Ultra Sunrise',
            'description' => 'A refeshing orange beverage that has 75mg of caffeine per serving. Every can has two servings.',
            'caffeine_mgs_per_serving' => '75',
        ]);
    }
}
