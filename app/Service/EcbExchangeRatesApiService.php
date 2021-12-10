<?php

namespace App\Service;

use Richardds\ECBAPI\ECBConverter;
use Richardds\ECBAPI\ECBException;

class EcbExchangeRatesApiService
{
  /**
   * @var ECBConverter
   */
  private $api;

  public function __construct()
  {
    $this->api = new ECBConverter("/var/www/html/.ecb_cache");
  }

  /**
   * @param int $amount
   * @throws ECBException
   */
  public function getCurrentUsdToEuroExchangeRate(int $amount = 1)
  {
    return $this->api->toEuro($amount, 'USD', 3);
  }
}
