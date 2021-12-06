<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransactionModel extends Model
{
  use HasFactory;

  const ACTION_BUY = "buy";
  const ACTION_SELL = "sell";
  protected $table = 'transaction';

}
