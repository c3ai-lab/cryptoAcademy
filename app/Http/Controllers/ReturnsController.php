<?php

namespace App\Http\Controllers;

use App\Models\Symbol;
use Illuminate\Http\Request;

class ReturnsController extends Controller
{
  public function index(Request $request)
  {
    return ['data' => auth()->user()->getCumulativeReturns()];
  }

  public function show(Request $request, Symbol $symbol)
  {
    return ['data' => auth()->user()->getCumulativeReturnsPerSymbol($symbol)];
  }
}
