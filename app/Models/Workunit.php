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
 *      @OA\Property(
 *     property="lat",
 *     type="string",
 *     example="6.2088"
 *   ),
 * @OA\Property(
 *     property="lng",
 *     type="string",
 *     example="106.8456"
 *   ),
 * @OA\Property(
 *     property="radius",
 *     type="integer",
 *     example="100"
 *   ),
 * )
 */
class Workunit extends Model
{
    use HasFactory;

    function employees()
    {
        return $this->hasMany(Employee::class);
    }
    
    function worktimes()
    {
        return $this->belongsToMany(Worktime::class,'worktime_workunit');
    }

    function place()
    {
        return $this->hasOne(WorkunitPlace::class);
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
