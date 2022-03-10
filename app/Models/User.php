<?php

namespace App\Models;

use App\Notifications\VerificationMail;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use PHPOpenSourceSaver\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject, MustVerifyEmail
{
  use HasFactory, Notifiable;

  const INIT_BALANCE = 10000;
  /**
   * The attributes that are mass assignable.
   *
   * @var string[]
   */
  protected $fillable = [
    'name',
    'email',
    'password',
    'balance',
    'is_verified',
    'email_verified_at',
    'x_axis',
    'y_axis',
    'verify_token',
//    'password_confirmation',
  ];

  /**
   * The attributes that should be hidden for serialization.
   *
   * @var array
   */
  protected $hidden = [
    'password',
    'remember_token',
  ];

  /**
   * The attributes that should be cast.
   *
   * @var array
   */
  protected $casts = [
    'email_verified_at' => 'datetime',
  ];

  // protected $appends = [
  //   'sold_symbols',
  // ];

  public function getJWTIdentifier()
  {
    return $this->getKey();
  }

  public function getJWTCustomClaims()
  {
    return [];
  }

  public function sendEmailVerificationNotification()
  {
    $this->notify(new VerificationMail($this));
  }

  public function favorites()
  {
    return $this->belongsToMany(Symbol::class, 'symbol_user');
  }

  public function transactions()
  {
    return $this->hasMany(TransactionModel::class, "user_id", "id");
  }

  public function getCumulativeReturns()
  {
    return array_values(
      $this->cumulateReturns(
        $this->getReturns()->values()
      )->toArray()
    );
  }

  public function getCumulativeReturnsPerSymbol(Symbol $symbol)
  {
    return $this->cumulateReturns(
        $this->getReturnsPerSymbol($symbol)
      )->toArray();
  }

  public function getReturnsPerSymbol(Symbol $symbol)
  {
    $transactions = $this->transactions()
      ->where('symbol_id', $symbol->id)
      ->orderBy('created_at', 'ASC')
      ->get();

    if ($transactions->count() === 0) {
      return [];
    }

    $buys = $transactions->filter(
      fn($t) => $t->action === TransactionModel::ACTION_BUY
    )->map(
      fn($b) => collect($b)->put('sold', 0)
    );

    $sells = $transactions->filter(
      fn($t) => $t->action === TransactionModel::ACTION_SELL
      )->map(
        fn($s) => collect($s)->put('filled', 0)
      );

    $series = collect([]);

    foreach ($sells as $s) {
      foreach ($buys as $b) {
        # buy sold -> continue
        if ($b['quantity'] === $b['sold']) { continue; }
        # sell filled -> break
        elseif (abs($s['quantity']) === $s['filled']) { break; }
        # else fill as much as possible
        else {
          $open = abs($s['quantity']) - $s['filled'];
          $fillable = $b['quantity'] - $b['sold'];
          # fill completly
          if ($open < $fillable) {
            $b['sold'] += $open;
            $s['filled'] += $open;
            $series->push(
              $this->getReturnsSeriesEntry($open, $b, $s)
            );
          }
          # fill partially
          else {
            $b['sold'] += $fillable;
            $s['filled'] += $fillable;
            $series->push(
              $this->getReturnsSeriesEntry($fillable, $b, $s)
            );
          }
        }
      }
    }

    // dd($series);
    return $series;
  }

  public function getReturns()
  {
    return $this->sold_symbols
      ->map(
        fn($symbol) => $this->getReturnsPerSymbol($symbol)
      )
      ->flatten(1)
      ->sortBy('made_at')
      ->map(
        fn($x) => $x // wird benötigt, um die Indizes zu korrigieren
      );
  }

  public function getSoldSymbolsAttribute()
  {
    return Symbol::find(
      $this->transactions()
        ->where('action', TransactionModel::ACTION_SELL)
        ->get()
        ->pluck('symbol_id')
        ->unique()
    );
  }

  protected function getReturnsSeriesEntry($amount, $buy, $sell)
  {
    $buy_price = $amount * ($buy['price'] / $buy['exchange_price']);
    $sell_price = $amount * ($sell['price'] / $sell['exchange_price']);
    $pl_abs = $sell_price - $buy_price;
    $pl_rel = ($sell_price/$buy_price - 1) * 100;
    return $this->getReturnsSeriesEntryFormat($pl_abs, $pl_rel, $sell['created_at']);
  }

  protected function getFirstReturnEntry() {
    return $this->getReturnsSeriesEntryFormat(0, 0, $this->created_at);
  }

  protected function getReturnsSeriesEntryFormat($pl_abs, $pl_rel, $time)
  {
    if(gettype($time ) === 'string') {
      $time = (new Carbon($time));
    }

    return collect([
      'profit_loss_euro' => $pl_abs,
      'profit_loss_percent' => $pl_rel,
      'made_at' => $time->getPreciseTimestamp(3),
    ]);
  }

  public function cumulateReturns($returns)
  {
    $returns->prepend($this->getFirstReturnEntry());
    return $returns->map(
      function($entry, $idx) use ($returns) {
        if ($idx > 0) {
          $prev = $returns[$idx - 1];
          return collect([
            'profit_loss_euro' => $entry['profit_loss_euro'] + $prev['profit_loss_euro'],
            'profit_loss_percent' => $entry['profit_loss_percent'] + $prev['profit_loss_percent'],
            'made_at' => $entry['made_at'],
          ]);
        }
        return $entry;
      }
    );
  }

  public function addStartMoney($returns)
  {
    return $returns->map(
      fn($entry) => collect([
        'profit_loss_euro' => $entry['profit_loss_euro'] + self::INIT_BALANCE,
        'profit_loss_percent' => $entry['profit_loss_percent'],
        'made_at' => $entry['made_at'],
      ])
    );
  }
}
