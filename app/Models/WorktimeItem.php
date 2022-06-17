<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * @OA\Schema(
 *   @OA\Property(
 *     property="time",
 *     type="string",
 *     example="00:00"
 *   ),
 *   @OA\Property(
 *     property="day",
 *     type="integer",
 *     example="1"
 *   ),
 *   @OA\Property(
 *     property="presence_id",
 *     type="integer",
 *     example="1"
 *   ),
 * )
 */


class WorktimeItem extends Model
{
    use HasFactory;

    protected $appends = [
        'hari'
    ];

    function getHariAttribute()
    {
        $hari = ['','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu','Minggu'];
        return $hari[$this->day];
    }

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
