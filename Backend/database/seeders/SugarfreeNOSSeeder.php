<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Drinks;

class SugarfreeNOSSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Drinks::create([
            'name' => 'Sugarfree NOS',
            'description' => 'Another orange delight without the sugar. It has 130 mg. per serving and each can has two servings.',
            'caffeine_mgs_per_serving' => '130',
        ]);
    }
}
