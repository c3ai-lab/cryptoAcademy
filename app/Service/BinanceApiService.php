<?php

namespace App\Service;


use Binance\API;

class BinanceApiService
{
  /**
   * @var API
   */
  private $api;

  /**
   *
   */
  public function __construct()
  {
    $api = new API(config('api.binance_api_key'), config('api.binance_secret_key'));
    $api->caOverride = true;
    $this->api = $api;
  }

  /**
   * @throws \Exception
   */
  public function getPriceOfSymbol(string $apiSymbol): float
  {
    return (float)$this->api->price($apiSymbol);
  }

  /**
   * @throws \Exception
   */
  public function getPriceOfEuroToUsd(): float
  {
    return (float)$this->api->price("EURUSDT");
  }

  /**
   * @throws \Exception
   */
  public function getKlines($apiSymbol, $interval, $limit, $endtime): array
  {
    return $this->api->candlesticks($apiSymbol, $interval, $limit, null, $endtime);
  }
}
