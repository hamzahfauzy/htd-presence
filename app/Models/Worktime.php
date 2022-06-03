<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
