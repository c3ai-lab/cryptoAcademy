<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ImageResource extends JsonResource
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
      'imagename' => $this->imagename,
      "scan_complete" => true,
    ];
    return [
      'id' => $this->id,
      'imagename' => $this->imagename,
      "scan_complete" => true,
      'vulnerabilities' => []
    ];
  }
}
