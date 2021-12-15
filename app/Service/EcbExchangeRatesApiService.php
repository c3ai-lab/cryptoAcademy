<?php

namespace App\Service;

use AmrShawky\Currency;

class EcbExchangeRatesApiService
{
  /**
   * @return mixed|null
   * @throws \Exception
   */
  public function getCurrentUsdToEuroExchangeRate()
  {
    return Currency::convert()
      ->from('USD')
      ->to('EUR')
      ->get();
  }
}
