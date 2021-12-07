<?php

namespace App\Http\Controllers;

use App\Http\Resources\SymbolUserResource;
use App\Models\Symbol;
use Illuminate\Http\Request;
use Validator;

class SymbolUserController extends Controller
{
  public function index(Request $request)
  {
    $collection = Symbol::all();
    $filtered = $request->has('favorite') ? $collection->where('is_favorite', $request->get('favorite')) : $collection;
    return SymbolUserResource::collection($filtered->all());
  }

  public function store(Request $request, Symbol $symbol)
  {
    $this->validator($symbol);
    auth()->user()->favorites()->attach($symbol);
    return response(['status' => 'success']);
  }

  public function delete(Request $request, Symbol $symbol)
  {
    $this->validator($symbol);
    auth()->user()->favorites()->detach($symbol);
    return response(['status' => 'success']);
  }

  private function validator(Symbol $symbol)
  {
    $validator = Validator::make(
      ['symbol' => $symbol->id],
      ['symbol' => 'required|exists:symbols,id']
    );
    if ($validator->fails()) {
      return response()->json($validator->errors(), 422);
    }
    $validator = Validator::make(
      ['symbol' => $symbol->id],
      ['symbol' => 'required|exists:symbol_user,symbol_id']
    );
    if ($validator->fails()) {
      return response()->json($validator->errors(), 422);
    }
  }
}
