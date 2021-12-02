<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Auth;

class Symbol extends Model
{
  use HasFactory;

  protected $appends = [
    'is_favorite'
  ];

  public function getIsFavoriteAttribute()
  {
    if (Auth::user()) {
      return Auth::user()->favorites->contains($this);
    }
    return false;
  }
}
