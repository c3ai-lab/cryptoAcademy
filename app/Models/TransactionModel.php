<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class TransactionModel extends Model
{
  use HasFactory;

  const ACTION_BUY = "buy";
  const ACTION_SELL = "sell";
  protected $table = 'transaction';


  protected $appends = [
    'symbol',
    'api_symbol'
  ];

  private function getSymbol(): HasOne
  {
    return $this->hasOne(Symbol::class, "id", "symbol_id");
  }

  public function getSymbolAttribute()
  {
    return $this->getSymbol()->value("name");
  }

  public function getApiSymbolAttribute()
  {
    return $this->getSymbol()->value("api_symbol");
  }

  public function getQuantityAttribute()
  {
    if ($this->action === self::ACTION_SELL) {
      return $this->quantity * (-1);
    }
    return $this->quantity;
  }
}
