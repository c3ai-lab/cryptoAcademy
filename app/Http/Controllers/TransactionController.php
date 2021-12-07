<?php

namespace App\Http\Controllers;

use App\Models\TransactionModel;
use Binance\API;
use Illuminate\Http\Request;
use Validator;

class TransactionController extends Controller
{
  public function __construct()
  {
    $this->middleware('jwt.verify');
  }

  public function buy(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'quantity' => 'required|string|min:1',
      'symbol' => 'required|string|min:1'
    ]);
    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }
    try {
      $this->createTransaction($request, TransactionModel::ACTION_BUY);
      return response()->json([], 201);
    } catch (\Exception $e) {
      return response($e->getMessage(), 400);
    }
  }

  public function sell(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'quantity' => 'required|string|min:1',
      'symbol' => 'required|string|min:1'
    ]);
    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }
    try {
      $this->createTransaction($request, TransactionModel::ACTION_SELL);
      return response()->json([], 201);
    } catch (\Exception $e) {
      return response($e->getMessage(), 400);
    }
  }

  private function getBinanceApi(): API
  {
    $api = new \Binance\API(config('api.binance_api_key'), config('api.binance_secret_key'), true);
    $api->caOverride = true;
    return $api;
  }

  /**
   * @throws \Exception
   */
  private function createTransaction(Request $request, string $action): void
  {
    $user = auth()->user();
    /**
     * balance = €
     * quantity*$price (in Euro)
     */
    try {
      $symbol = Symbol::where(["api_symbol" => $request->symbol])->first();
      if (is_null($symbol))
        throw new \Exception("Symbol '" . $request->symbol . "' NOT Found");
      $transactionModel = new TransactionModel;
      $transactionModel->user_id = $user->id;
      $transactionModel->symbol_id = $symbol->id;
      $transactionModel->quantity = $request->quantity;
      $transactionModel->price = $this->getBinanceApi()->price($request->symbol);
      $transactionModel->action = $action;
      $transactionModel->save();
    } catch (\Exception $e) {
      throw $e;
    }
  }
}
