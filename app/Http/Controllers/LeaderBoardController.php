<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LeaderBoardController extends Controller
{

  public function index(Request $request, string $time)
  {
    $limit = $request->has('limit') ? $request->get('limit') : 10;
    return response()->json([["name" => $time, "growth" => 12345, "balance_eur" => 23456, "time" => $time]]);
  }
}
