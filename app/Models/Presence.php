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
}
