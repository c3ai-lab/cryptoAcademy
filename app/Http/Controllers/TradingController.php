<?php

namespace App\Http\Controllers;


use Validator;

class TradingController extends Controller
{
  public function __construct()
  {
    $this->middleware('jwt.verify');
  }

}
