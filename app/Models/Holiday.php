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
 *     example="Lebaran"
 *   ),
 *   @OA\Property(
 *     property="date",
 *     type="date",
 *     example="2022-01-01"
 *   )
 * )
 */

class Holiday extends Model
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
