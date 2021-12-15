<?php

namespace App\Service;


use Binance\API;

class BianceApiService
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
  public function getPriceOfSymbol(string $symbol): float
  {
    return $this->api->price($symbol);
  }
}
