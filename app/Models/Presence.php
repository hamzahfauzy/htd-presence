<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @OA\Schema(
 *   @OA\Property(
 *     property="name",
 *     type="string",
 *     example="Example Name"
 *   ),
 *   @OA\Property(
 *     property="tolerance_time",
 *     type="integer",
 *     example=60
 *   )
 * )
 */

class Presence extends Model
{
    use HasFactory;

    /**
     * Prepare a date for array / JSON serialization.
     *
     * @param  \DateTimeInterface  $date
     * @return string
     */
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }
}
