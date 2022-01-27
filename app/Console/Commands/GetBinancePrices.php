<?php

namespace App\Console\Commands;

use App\Models\Price;
use App\Models\Resolution;
use App\Models\Symbol;
use App\Service\BinanceApiService;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class GetBinancePrices
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $api;
  protected $resolutions;
  protected $symbols;

  protected $signature = 'binance:prices';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Retrieve prices as needed for frontend from Bianance API';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->api = new BinanceApiService();
    $this->resolutions = Resolution::all();
    $this->symbols = Symbol::all();
  }

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    $endtime = Carbon::now();

    foreach ($this->getAllApiParameterConfigurations() as $params) {
      $this->results[] = $this->makeRequest($endtime, ...$params);
      // $this->info($this->makeRequest($endtime, ...$params));
    }
    $this->results = collect($this->results)->flatten(1);

    // dd($this->results);
    $this->updateDB();
  }

  protected function updateDB()
  {
    DB::transaction(function () {
      DB::table('prices')->delete();

      $this->results->each(
        fn($price) => Price::create($price)
      );
  });
  }

  protected function makeRequest($endtime, $symbolId, $apiSymbol, $interval, $limit)
  {
    $_usdt = $this->api->getKlines($apiSymbol, $interval, $limit, $endtime);
    $euro_usdt = $this->api->getKlines("EURUSDT", $interval, $limit, $endtime);

    $this->api->getKlines($apiSymbol, $interval, $limit, $endtime);
    return $this->convertCandlesToPriceModelData(
      $symbolId,
      $interval,
      $_usdt,
      $euro_usdt
    );
  }

  protected function convertCandlesToPriceModelData($symbolId, $interval, $candles, $candlesEURUSDT)
  {
    $results = [];
    foreach ($candles as $timestamp => $data) {
      if(array_key_exists($timestamp, $candlesEURUSDT)) {
        $results[] = [
          'symbol_id' => $symbolId,
          'interval' => $interval,
          'value' => $data['close'] / $candlesEURUSDT[$timestamp]['close'],
          'timestamp' => $timestamp,
        ];
      }
    }

    return $results;
  }

  protected function getAllApiParameterConfigurations()
  {
    return $this->symbols->flatMap(
      fn ($symbol) => $this->getSymbolApiParameterConfigurations($symbol)
    );
  }

  protected function getSymbolApiParameterConfigurations($symbol)
  {
    return $this->resolutions->map(
      fn ($resolution) => $this->getOneApiParameterConfiguration($symbol, $resolution)
    );
  }

  protected function getOneApiParameterConfiguration($symbol, $resolution)
  {
    return collect([
      $symbol->id,
      $symbol->api_symbol,
      $resolution->interval,
      $resolution->limit,
    ]);
  }
}
