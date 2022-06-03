<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


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
}
