<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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

    function presence()
    {
        return $this->belongsTo(Presence::class);
    }

    function worktime()
    {
        return $this->hasOne(Worktime::class,'id','worktime_id');
    }
}
