<?php

namespace Database\Seeders;

use App\Models\Symbol;
use Illuminate\Database\Seeder;

class SymbolSeeder extends Seeder
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
        'name' => 'Bitcoin',
        'api_symbol' => 'BTCUSDT',
      ],
      [
        'name' => 'Ethereum',
        'api_symbol' => 'ETHUSDT',
      ],
      [
        'name' => 'Binance Coin',
        'api_symbol' => 'BNBUSDT',
      ],
      [
        'name' => 'SOLUSDT',
        'api_symbol' => 'Solano',
      ],
      [
        'name' => 'Cardano',
        'api_symbol' => 'ADAUSDT',
      ],
      [
        'name' => 'Ripple',
        'api_symbol' => 'XRPUSDT',
      ],
      [
        'name' => 'Pokaldot',
        'api_symbol' => 'DOTUSDT',
      ],
      [
        'name' => 'Dogecoin',
        'api_symbol' => 'DOGEUSDT',
      ],
      [
        'name' => 'Shiba Inu',
        'api_symbol' => 'SHIBUSDT',
      ],
    ])->each(fn ($symbolData) => Symbol::create($symbolData));
  }
}
