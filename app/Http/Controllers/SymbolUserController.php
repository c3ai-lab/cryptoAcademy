<?php

namespace App\Http\Controllers;

use App\Models\Symbol;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class SymbolUserController extends Controller
{
  public function index()
  {
    return User::find(Auth::id())->favorites();
  }

  public function store(Request $request, Symbol $symbol)
  {
    #TODO add validation
    $request->user()->favorites()->attach($symbol);

    return [
      'status' => 'success',
    ];
  }

  public function delete(Request $request, Symbol $symbol)
  {
    #TODO add validation
    $request->user()->favorites()->detach($symbol);

    return [
      'status' => 'success',
    ];
  }
}
