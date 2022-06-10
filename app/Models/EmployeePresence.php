<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * @OA\Schema(
 *   @OA\Property(
 *     property="type",
 *     type="string",
 *     example="hadir"
 *   ),
 * @OA\Property(
 *     property="presence_id",
 *     type="integer",
 *     example="1"
 *   ),
 * @OA\Property(
 *     property="attachment",
 *     type="file",
 *     format="file"
 *   ),
 * )
 */
class EmployeePresence extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table = "employee_presence";
}
