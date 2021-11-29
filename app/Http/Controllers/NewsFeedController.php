<?php

namespace App\Http\Controllers;

use App\Models\NewsFeed;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class NewsFeedController extends Controller
{
  public function getAll(Request $request)
  {
    $page = $request->has('page') ? $request->get('page') : 1;
    $limit = $request->has('limit') ? $request->get('limit') : 10;

    return response()->json(NewsFeed::query()->offset(($page - 1) * $limit)->limit($limit)->get());
  }
}
