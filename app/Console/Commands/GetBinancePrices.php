<?php

namespace App\Console\Commands;

use App\Service\GetBinancePricesService;
use Illuminate\Console\Command;

class GetBinancePrices extends Command
{
  /**
   * The name and signature of the console command.
   *
   * @var string
   */
  protected $signature = 'binance:getPrices';

  /**
   * The console command description.
   *
   * @var string
   */
  protected $description = 'Command description';

  /**
   * Create a new command instance.
   *
   * @return void
   */
  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Execute the console command.
   *
   * @return int
   */
  public function handle()
  {
    $service = new GetBinancePricesService();
    $service->handle();
    return 0;
  }
}
