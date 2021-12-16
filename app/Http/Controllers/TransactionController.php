<?php

namespace App\Http\Controllers;

use App\Enum\MessageCodes;
use App\Http\Resources\TransactionResource;
use App\Models\Symbol;
use App\Models\TransactionModel;
use App\Service\BianceApiService;
use App\Service\EcbExchangeRatesApiService;
use Illuminate\Http\Request;
use Validator;

class TransactionController extends Controller
{
  /**
   * @var float
   */
  private $exchangeRate;
  /**
   * @var float
   */
  private $symbolPrice;

  public function index(Request $request)
  {
    return TransactionResource::collection(auth()->user()->transactions);
  }

  public function buy(Request $request)
  {
    $user = auth()->user();
    $validator = Validator::make($request->all(), [
      'quantity' => 'required|min:1',
      'symbol' => 'required|min:1|exists:symbols,api_symbol'
    ]);
    if ($validator->fails()) {
      return response()->json($validator->errors(), 400);
    }
    try {
      $bianceService = new BianceApiService();

      $this->symbolPrice = $bianceService->getPriceOfSymbol($request->symbol);
      $this->exchangeRate = $bianceService->getPriceOfEuroToUsd();

      if ($this->isUserBalanceSufficient()) {
        $this->createTransaction($request, TransactionModel::ACTION_BUY);
        $balance = $user->balance - $this->symbolPrice / $this->exchangeRate * $request->quantity;
        $user->balance = $balance;
        $user->save();

        return response()->json([], 201);
      } else {
        return response()->json(["msgcode" => MessageCodes::INSUFFICIENT_USER_BALANCE], 400);
      }
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

    if ($this->getCurrentSymbolAmount($request->symbol) < $request->quantity) {
      return response()->json(["msgcode" => MessageCodes::INSUFFICIENT_SYMBOL_AMOUNT], 400);
    }

    $bianceService = new BianceApiService();
    $this->symbolPrice = $bianceService->getPriceOfSymbol($request->symbol);
    $this->exchangeRate = $bianceService->getPriceOfEuroToUsd();

    $user->balance = $user->balance + $this->symbolPrice / $this->exchangeRate * $request->quantity;
    $user->save();

    try {
      $this->createTransaction($request, TransactionModel::ACTION_SELL);
      return response()->json([], 201);
    } catch (\Exception $e) {
      return response($e->getMessage(), 500);
    }
  }

  /**
   * @throws \Exception
   */
  private function createTransaction(Request $request, string $action): void
  {
    try {
      $user = auth()->user();
      $symbol = Symbol::where(["api_symbol" => $request->symbol])->first();
      $transactionModel = new TransactionModel;
      $transactionModel->user_id = $user->id;
      $transactionModel->symbol_id = $symbol->id;
      $transactionModel->quantity = $request->quantity;
      $transactionModel->price = $this->symbolPrice;
      $transactionModel->action = $action;
      $transactionModel->exchange_price = $this->exchangeRate;
      $transactionModel->save();
    } catch (\Exception $e) {
      throw $e;
    }
  }

  private function isUserBalanceSufficient(): bool
  {
    return ($this->symbolPrice / $this->exchangeRate) <= auth()->user()->balance;
  }

  private function getCurrentSymbolAmount(string $symbol)
  {
    $symbol = Symbol::where(["api_symbol" => $symbol])->first();
    return (int)auth()->user()->transactions()
      ->where('symbol_id', $symbol->id)
      ->get()
      ->pluck('quantity')
      ->reduce(
        fn($carry, $next) => $carry + $next,
        0
      );
  }

}
