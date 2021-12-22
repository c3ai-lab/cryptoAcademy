<?php

namespace App\Http\Controllers;

use App\Models\Symbol;
use App\Models\TransactionModel;
use Illuminate\Http\Request;

class UserSymbolTransactionController extends Controller
{
  public function show(Request $request, Symbol $symbol)
  {
    $transactions = auth()->user()->transactions()
      ->where('symbol_id', $symbol->id)
      ->orderBy('created_at', 'ASC')
      ->get();

    if ($transactions->count() === 0) {
      return [];
    }

    $buys = $transactions->filter(
      fn($t) => $t->action === TransactionModel::ACTION_BUY
    )->map(
      fn($b) => collect($b)->put('sold', 0)
    );

    $sells = $transactions->filter(
      fn($t) => $t->action === TransactionModel::ACTION_SELL
      )->map(
        fn($s) => collect($s)->put('filled', 0)
      );

    $series = collect([]);

    foreach ($sells as $s) {
      foreach ($buys as $b) {
        # buy sold -> continue
        if ($b['quantity'] === $b['sold']){ continue; }
        # sell filled -> break
        elseif (abs($s['quantity']) === $s['filled']) { break; }
        # else fill as much as possible
        else {
          $open = abs($s['quantity']) - $s['filled'];
          $fillable = $b['quantity'] - $b['sold'];
          # fill completly
          if ($open < $fillable) {
            $b['sold'] += $open;
            $s['filled'] += $open;
            $series->push(
              $this->getEntry($open, $b, $s)
            );
          }
          # fill partially
          else {
            $b['sold'] += $fillable;
            $s['filled'] += $fillable;
            $series->push(
              $this->getEntry($fillable, $b, $s)
            );
          }
        }
      }
    }

    return ['data' => $series];
  }

  protected function getEntry($amount, $buy, $sell)
  {
    $buy_price = $amount * ($buy['price'] / $buy['exchange_price']);
    $sell_price = $amount * ($sell['price'] / $sell['exchange_price']);
    $pl_abs = $sell_price - $buy_price;
    $pl_rel = ($sell_price/$buy_price - 1) * 100;
    return collect([
      'profit_loss_euro' => $pl_abs,
      'profit_loss_percent' => $pl_rel,
      'made_at' => $sell['created_at'],
    ]);
  }
}
