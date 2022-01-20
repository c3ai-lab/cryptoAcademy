<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Price extends Model
{
    use HasFactory;

    protected $fillable = [
      'symbol_id',
      'symbol_id',
      'interval',
      'value',
      'timestamp',
    ];
}
