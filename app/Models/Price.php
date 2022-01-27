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

    public static function forIndex()
    {
      return Symbol::all()->mapWithKeys(
        fn ($symbol) => [
          $symbol->api_symbol => self::inResolution(Resolution::forIndex(), $symbol)
        ]
      );
    }

    public static function forShow(Symbol $symbol)
    {
      return Resolution::forShow()->mapWithKeys(
        fn (Resolution $resolution) => [
          $resolution->dimension => self::inResolution($resolution, $symbol)
        ]
      );
    }

    public function symbol()
    {
      return $this->belongsTo(Symbol::class);
    }

    public static function inResolution(Resolution $resolution, Symbol $symbol)
    {
      $prices = self::where('interval', $resolution->interval)
        ->orderBy('timestamp')
        ->limit($resolution->limit)
        ->get();

      return [
        'data' => $prices->map(
          fn (Price $price) => [$price->timestamp, $price->value]
        )
      ];
    }
}
