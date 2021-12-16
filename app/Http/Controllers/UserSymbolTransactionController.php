<?php

namespace App\Http\Controllers;

use App\Models\Symbol;
use Illuminate\Http\Request;

class UserSymbolTransactionController extends Controller
{
  public function show(Request $request, Symbol $symbol)
  {
    if (auth()->user()->transactions->count() === 0) {
      return [];
    }

    $transactions = auth()->user()->transactions()
      ->where('symbol_id', $symbol->id)
      ->get();

    foreach ($transactions as $t) {
      ray($t);
    }
  }
}
