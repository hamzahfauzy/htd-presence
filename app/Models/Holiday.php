<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
