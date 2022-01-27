<?php

namespace App\Http\Controllers;

use App\Models\Price;
use App\Models\Resolution;
use App\Models\Symbol;
use Illuminate\Http\Request;

class PriceController extends Controller
{
    public function __construct()
    {
      $this->middleware('jwt.verify');
    }

    public function index(Request $request)
    {
      return Price::forIndex();
    }

    public function show(Request $request, Symbol $symbol)
    {
      return Price::forShow($symbol);
    }
}
