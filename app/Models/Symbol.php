<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Symbol extends Model
{
  use HasFactory;

  protected $appends = [
    'is_favorite',
    'user_balance',
  ];

  public function getIsFavoriteAttribute()
  {
    if (auth()->user()) {
      return auth()->user()->favorites->contains($this);
    }
    return false;
  }

  public function getUserBalanceAttribute()
  {
    if (auth()->user()->transactions->count() === 0) {
      return 0;
    }

    return auth()->user()->transactions()
      ->where('symbol_id', $this->id)
      ->get()
      ->pluck('quantity')
      ->reduce(
        fn ($carry, $next) => $carry + $next,
        0
      );
  }
}
