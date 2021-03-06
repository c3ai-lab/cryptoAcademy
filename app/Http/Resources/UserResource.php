<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
  public function __construct($resource)
  {
    self::withoutWrapping();
    parent::__construct($resource);
  }

  /**
   * Transform the resource into an array.
   *
   * @param \Illuminate\Http\Request $request
   * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
   */

  public function toArray($request)
  {
    self::withoutWrapping();
    return [
      'id' => $this->id,
      'name' => $this->name,
      'email' => $this->email,
      'is_verified' => $this->is_verified,
      'balance' => $this->balance,
      'created_at' => $this->created_at,
      'updated_at' => $this->updated_at,
      'axis' => ['x' => $this->x_axis, 'y' => $this->y_axis],
      'favorites' => count($this->favorites) ? $this->favorites() : [],
      'is_first_visit' => $this->is_first_visit,
      'sold_symbols' => $this->sold_symbols,
    ];
  }
}
