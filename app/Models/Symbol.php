<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Symbol extends Model
{
  use HasFactory;

  protected $appends = [
    'is_favorite'
  ];

  public function getIsFavoriteAttribute()
  {
    if (auth()->user()) {
      return auth()->user()->favorites->contains($this);
    }
    return false;
  }
}
