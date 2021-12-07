<?php

namespace App\Http\Controllers;

use App\Http\Resources\SymbolUserResource;
use App\Models\Symbol;
use App\Models\SymbolUser;
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
    $user = auth()->user();
    $validatorSymbols = Validator::make(
      ['symbol' => $symbol->id],
      ['symbol' => 'required|exists:symbols,id']
    );
    if ($validatorSymbols->fails())
      return response()->json($validatorSymbols->errors(), 422);

    $model = SymbolUser::where([["user_id", $user->id], ["symbol_id", $symbol->id]]);
    if ($model->count() > 0) {
      return response()->json(["message" => "This symbol already exists in the favoritecollection."], 422);
    }

    $user->favorites()->attach($symbol);
    return response(['status' => 'success']);
  }

  public function delete(Request $request, Symbol $symbol)
  {
    $user = auth()->user();
    $validatorSymbols = Validator::make(
      ['symbol' => $symbol->id],
      ['symbol' => 'required|exists:symbols,id']
    );
    if ($validatorSymbols->fails())
      return response()->json($validatorSymbols->errors(), 422);


    $model = SymbolUser::where([["user_id", $user->id], ["symbol_id", $symbol->id]]);
    if ($model->count() == 0) {
      return response()->json(["message" => "This symbol doesn't exists in the favoritecollection."], 422);
    }

    auth()->user()->favorites()->detach($symbol);
    return response(['status' => 'success']);
  }
}
