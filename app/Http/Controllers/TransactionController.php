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
      'currency' => 'required|string|min:1'
    ]);
    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }
    /**
     * balance = €
     * quantity*$price (in Euro)
     */
    $this->createTransaction($request, TransactionModel::ACTION_BUY);
    return response()->json("", 201);
  }

  public function sell(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'quantity' => 'required|string|min:1',
      'currency' => 'required|string|min:1'
    ]);
    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }
    $this->createTransaction($request, TransactionModel::ACTION_SELL);
    return response()->json("", 201);
  }

  private function getBinanceApi(): API
  {
    $api = new \Binance\API(config('api.binance_api_key'), config('api.binance_secret_key'), true);
    $api->caOverride = true;
    return $api;
  }

  private function createTransaction(Request $request, string $action): void
  {
    $transactionModel = new TransactionModel;
    $transactionModel->user_id = auth()->user()->id;
    $transactionModel->currency_id = 0;
    $transactionModel->quantity = $request->quantity;
    $transactionModel->currency = $request->currency;
    $transactionModel->price = $this->getBinanceApi()->price($request->currency);
    $transactionModel->action = $action;
    $transactionModel->save();
  }
}
