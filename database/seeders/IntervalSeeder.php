<?php

namespace Database\Seeders;

use App\Models\Interval;
use Illuminate\Database\Seeder;

class IntervalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      collect([
        "1m",
        "30m",
        "4h",
        "12h",
        "1w",
        "1h",
      ])->each(
        fn($interval) => Interval::create(['code' => $interval])
      );
    }
}
