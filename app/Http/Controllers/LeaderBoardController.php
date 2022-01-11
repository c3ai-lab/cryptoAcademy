<?php

namespace App\Http\Controllers;

use App\Service\BianceApiService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class LeaderBoardController extends Controller
{

  /**
   * @var object
   */
  private $symbolRate;

  public function index(Request $request, string $time)
  {
    $this->getSymbolRate();

//    if ($time != "all") {
//      $queryInterval = "SELECT sum(quantity) as sum_quantity, user_id, symbol_id,`action` FROM `transaction` WHERE created_at <= 'DATE_SUB( NOW(), INTERVAL 1 " . strtoupper($time) . ")' GROUP BY user_id, symbol_id, `action`;";
//    }
//
//    $limit = $request->has('limit') ? $request->get('limit') : 20;

    $queryNow = "SELECT
    SUM(`transaction`.quantity) AS sum_quantity,
    `transaction`.user_id,
    `transaction`.symbol_id,
    `transaction`.`action`,
    users.name,
    users.balance
FROM
    `transaction`
INNER JOIN users ON users.id = `transaction`.user_id
GROUP BY `transaction`
    .user_id,
    `transaction`.symbol_id,
    `transaction`.`action`;";
    $results = DB::select(DB::raw($queryNow));
    $arr = [];
    foreach ($results as $item) {
      $arr[$item->user_id]["user"] = ["name" => $item->name, "balance" => $item->balance];
      $arr[$item->user_id]["transaction"][$item->symbol_id][$item->action] = $item->sum_quantity;
    }


    $tableArr = [];
    foreach ($arr as $user_id => $data) {
      $portfolio = 0;
      foreach ($data["transaction"] as $symbol_id => $symbol) {
        $queryNow = "SELECT api_symbol  FROM symbols WHERE id = :id";
        $result = DB::select(DB::raw($queryNow), ["id" => $symbol_id])[0];
        $sell = array_key_exists("sell", $symbol) ? $symbol['sell'] : 0;
        $buy = array_key_exists("buy", $symbol) ? $symbol['buy'] : 0;
        $portfolio += (float)$buy - (float)$sell * $this->symbolRate[$result->api_symbol] / $this->symbolRate["EURUSDT"];
      }
      $portfolio = (float)$portfolio + (float)$arr[$user_id]["user"]["balance"];

      // TODO: portfolio - portfoliowert von vor uebergebenemZeitraum
      $tableArr[] = ["name" => $arr[$user_id]["user"]["name"], "growth" => $portfolio - UserController::Init_BALANCE, "balance_eur" => $portfolio];
    }
    return response()->json(array_slice($tableArr, 0, 3));
  }

  private function getSymbolRate()
  {
    $apiService = new BianceApiService();
    $this->symbolRate["EURUSDT"] = $apiService->getPriceOfEuroToUsd();
    $results = DB::select(DB::raw("SELECT api_symbol FROM `transaction` INNER JOIN symbols ON symbols.id = `transaction`.symbol_id GROUP BY `transaction`.symbol_id;"));

    foreach ($results as $item) {
      $this->symbolRate[$item->api_symbol] = $apiService->getPriceOfSymbol($item->api_symbol);
    }
  }
}
