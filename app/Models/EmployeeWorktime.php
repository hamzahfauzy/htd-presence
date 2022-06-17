<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


/**
 * @OA\Schema(
 *   @OA\Property(
 *     property="worktime_id",
 *     type="integer",
 *     example="1"
 *   ),
 *      @OA\Property(
 *     property="date_start",
 *     type="date",
 *     example="2022-01-01"
 *   ),
 * @OA\Property(
 *     property="date_end",
 *     type="date",
 *     example="2022-02-01"
 *   ),
 * )
 */
class EmployeeWorktime extends Model
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
