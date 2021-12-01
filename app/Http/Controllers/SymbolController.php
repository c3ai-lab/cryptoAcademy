<?php

namespace App\Http\Controllers;

use App\Models\Symbol;
use Illuminate\Http\Request;

class SymbolController extends Controller
{
  public function index(Request $request)
  {
    return Symbol::all();
  }
}
