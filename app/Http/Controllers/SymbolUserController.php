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
    $validated = $request->validate([
      'symbol_id' => [
        'required',
        'unique:symbol_user,symbol_id,' . $symbol->id . ',user_id,' . Auth::id(),
      ],
    ]);

    User::find(Auth::id())->favorites()->attach($symbol);

    return [
      'status' => 'success',
    ];
  }

  public function delete(Request $request, Symbol $symbol)
  {
    $validated = $request->validate([
      'symbol_id' => [
        'required',
        'exists:symbol_user,symbol_id,' . $symbol->id . ',user_id,' . Auth::id(),
      ],
    ]);

    User::find(Auth::id())->favorites()->detach($symbol);

    return [
      'status' => 'success',
    ];
  }
}
