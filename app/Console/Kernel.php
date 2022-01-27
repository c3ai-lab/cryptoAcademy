<?php

namespace App\Console;

use Adrifkat\Cryptopanic\Http\Response\PostsResponse;
use App\Models\NewsFeed;
use App\Service\GetBinancePricesService;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
  /**
   * The Artisan commands provided by your application.
   *
   * @var array
   */
  protected $commands = [
    //
  ];

  /**
   * Define the application's command schedule.
   *
   * @param \Illuminate\Console\Scheduling\Schedule $schedule
   * @return void
   */
  protected function schedule(Schedule $schedule)
  {
    $schedule->call(function () {
      for ($p = 1; $p <= 10; $p++) {
        $client = new \Adrifkat\Cryptopanic\Client(config('api.cryptopanic_token'));
        $postsResponse = $client->getPostsRequest()
          ->setKind("news")
          ->setCurrencies(['BTC', 'ETH'])
          ->setRegions(["en", "de"])
          ->setPublic(true);
        $postsResponse->addParam("page", $p);
        $postsResponse = $postsResponse->send();
        /**@var $postsResponse PostsResponse */
        foreach ($postsResponse->results as $newsModel) {
          $news = NewsFeed::find($newsModel->id);
          if (!is_null($news))
            return;
          $news = new NewsFeed;
          $news->id = $newsModel->id;
          $news->newsitem = json_encode($newsModel);
          $news->save();
        }
        sleep(6);
      }
    })->everyMinute();

    $schedule->call(function() {
      $command = new GetBinancePricesService();
      $command->handle();

    })->everyFiveMinutes();
  }

  /**
   * Register the commands for the application.
   *
   * @return void
   */
  protected function commands()
  {
    $this->load(__DIR__ . '/Commands');

    require base_path('routes/console.php');
  }
}
