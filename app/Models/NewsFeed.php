<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NewsFeed extends Model
{
  use HasFactory;

  protected $table = 'newsfeed';

  public function getNewsitemAttribute($value)
  {
    return json_decode($value);
  }
}
