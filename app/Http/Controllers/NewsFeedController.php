<?php

namespace App\Http\Controllers;

use App\Models\NewsFeed;
use Illuminate\Http\Request;

class NewsFeedController extends Controller
{

  public function getAll(Request $request)
  {
    $offset = $request->has('offset') ? $request->get('offset') : 1;
    $limit = $request->has('limit') ? $request->get('limit') : 10;

    return response()->json(NewsFeed::query()->offset($offset)->limit($limit)->get());
  }
}
