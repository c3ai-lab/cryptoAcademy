<?php

namespace Database\Seeders;

use App\Models\Resolution;
use Illuminate\Database\Seeder;
use Illuminate\Validation\Rules\Dimensions;

class ResolutionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
      collect([
        [
          "dimension" => "1H",
          "interval" => "1m",
          "limit" => 60,
        ],
        [
          "dimension" => "1D",
          "interval" => "30m",
          "limit" => 48,
        ],
        [
          "dimension" => "1W",
          "interval" => "4h",
          "limit" => 42,
        ],
        [
          "dimension" => "1M",
          "interval" => "12h",
          "limit" => 62,
        ],
        [
          "dimension" => "1Y",
          "interval" => "1w",
          "limit" => 52,
        ],
        [
          "dimension" => "All",
          "interval" => "1w",
          "limit" => 100,
        ],
        [
          "dimension" => Resolution::LOW_RES_NAME,
          "interval" => "1h",
          "limit" => 24,
        ],
      ])->each(
        fn($data) => Resolution::create($data)
      );
    }
}
