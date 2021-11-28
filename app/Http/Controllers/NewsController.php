<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NewsController extends Controller
{
  public function getAll(Request $request)
  {
    $client = new \Adrifkat\Cryptopanic\Client(config('api.cryptopanic_token'));
    $postsResponse = $client->getPostsRequest()
      ->setCurrencies(['BTC', 'ETH'])
      ->setRegions(["en", "de"])
      ->send();
    return response()->json([$postsResponse]);
  }
}
