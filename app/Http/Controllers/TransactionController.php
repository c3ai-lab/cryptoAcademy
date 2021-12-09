<?php

namespace App\Http\Controllers;

use App\Http\Resources\TransactionResource;
use App\Models\Symbol;
use App\Models\TransactionModel;
use Binance\API;
use Illuminate\Http\Request;
use Validator;

class TransactionController extends Controller
{

  public function index(Request $request)
  {
    return TransactionResource::collection(auth()->user()->transactions);
  }

  public function buy(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'quantity' => 'required|min:1',
      'symbol' => 'required|min:1|exists:symbols,api_symbol'
    ]);
    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }
    try {
      $this->createTransaction($request, TransactionModel::ACTION_BUY);
      return response()->json([], 201);
    } catch (\Exception $e) {
      return response($e->getMessage(), 500);
    }
  }

  public function sell(Request $request)
  {
    $user = auth()->user();
    // TODO Validate if given quantity/symbol combination is possible by checking the sum of the transactions
    // E.G. as attribute 'quantity' or 'balance' on Symbol Model
    $validator = Validator::make($request->all(), [
      'quantity' => 'required|min:1',
      'symbol' => 'required|min:1|exists:symbols,api_symbol'
    ]);
    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }

    $symbol = Symbol::where(["api_symbol" => $request->symbol])->first();
    $model = TransactionModel::where([["user_id", $user->id], ["symbol_id", $symbol->id]]);
    if ($model->count() != 0) {
      /** @todo
       * balance = €
       * quantity*$price (in Euro)
       */
      //      $sell = 0;
      //      $buy = 0;
      //      $symbol->get()->each(function ($val) use ($sell, $buy) {
      //        if ($val->action == TransactionModel::ACTION_BUY)
      //          $sell += $val->quantity;
      //        elseif ($val->action == TransactionModel::ACTION_BUY)
      //          $buy += $val->quantity;
      //      });
      //      var_dump($sell, $buy);
      //      die();
    } else
      return response()->json("You can't sell stuff you don't own", 400);

    try {
      $this->createTransaction($request, TransactionModel::ACTION_SELL);
      return response()->json([], 201);
    } catch (\Exception $e) {
      return response($e->getMessage(), 500);
    }
  }

  private function getBinanceApi(): API
  {
    $api = new API(config('api.binance_api_key'), config('api.binance_secret_key'));
    $api->caOverride = true;
    return $api;
  }

  /**
   * @throws \Exception
   */
  private function createTransaction(Request $request, string $action): void
  {
    $user = auth()->user();
    /** @todo
     * balance = €
     * quantity*$price (in Euro)
     */
    try {
      $symbol = Symbol::where(["api_symbol" => $request->symbol])->first();
      $transactionModel = new TransactionModel;
      $transactionModel->user_id = $user->id;
      $transactionModel->symbol_id = $symbol->id;
      $transactionModel->quantity = $request->quantity;
      $transactionModel->price = $this->getBinanceApi()->price($request->symbol);
      $transactionModel->action = $action;
      // TODO calculate EUR price
      // TODO subtract from / add to user balance
      $transactionModel->exchange_price = 0.;
      $transactionModel->save();
    } catch (\Exception $e) {
      throw $e;
    }
  }
}
