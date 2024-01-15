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
 *   )
 * )
 */

class Worktime extends Model
{
    use HasFactory;

    function items()
    {
        return $this->hasMany(WorktimeItem::class);
    }

    function workunits()
    {
        return $this->belongsToMany(Workunit::class);
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
