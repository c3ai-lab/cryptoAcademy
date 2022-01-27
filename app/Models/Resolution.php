<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resolution extends Model
{
    use HasFactory;

    const LOW_RES_NAME = 'low_res';

    public static function forShow()
    {
      return self::where('dimension', '!=', self::LOW_RES_NAME)->get();
    }

    public static function forIndex()
    {
      return self::where('dimension', self::LOW_RES_NAME)->first();
    }

    public static function forBinance()
    {
      return self::orderByDesc('limit')->get()->unique('interval');
    }

}
