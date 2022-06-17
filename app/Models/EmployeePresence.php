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
 *   @OA\Property(
 *     property="lat",
 *     type="string",
 *     example="9.00"
 *   ),
 *   @OA\Property(
 *     property="lng",
 *     type="string",
 *     example="2.00"
 *   ),
 * 
 * @OA\Property(
 *     property="attachment",
 *     type="file",
 *     format="file"
 *   ),
 * @OA\Property(
 *     property="pic",
 *     type="file",
 *     format="file"
 *   ),
 * @OA\Property(
 *     property="in_location",
 *     type="string",
 *     enum={"Y","N"}
 *   ),
 * )
 */
class EmployeePresence extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $table = "employee_presence";

    function workunit()
    {
        return $this->belongsTo(Workunit::class);
    }
    
    function employee()
    {
        return $this->belongsTo(Employee::class);
    }
    
    function presence()
    {
        return $this->belongsTo(Presence::class);
    }
}
