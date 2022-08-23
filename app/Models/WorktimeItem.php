<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @OA\Schema(
 *  @OA\Property(
 *     property="name",
 *     type="string",
 *     example="example"
 *   ),
 *   @OA\Property(
 *     property="start_time",
 *     type="string",
 *     example="00:00"
 *   ),
 * @OA\Property(
 *     property="end_time",
 *     type="string",
 *     example="00:00"
 *   ),
 * @OA\Property(
 *     property="on_time_start",
 *     type="string",
 *     example="00:00"
 *   ),
 * @OA\Property(
 *     property="on_time_end",
 *     type="string",
 *     example="00:00"
 *   ),
 * @OA\Property(
 *     property="penalty",
 *     type="integer",
 *     example="510"
 *   ),
 *   
 * )
 */


class WorktimeItem extends Model
{
    use HasFactory;

    function presence()
    {
        return $this->belongsTo(Presence::class);
    }

    function worktime()
    {
        return $this->hasOne(Worktime::class,'id','worktime_id');
    }

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
