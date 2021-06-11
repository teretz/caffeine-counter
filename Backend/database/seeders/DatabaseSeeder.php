<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(AmericanoSeeder::class);
        $this->call(BlackCoffeeSeeder::class);
        $this->call(FiveHourEnergySeeder::class);
        $this->call(MonsterUltraSunriseSeeder::class);
        $this->call(SugarfreeNOSSeeder::class);
    }
}
