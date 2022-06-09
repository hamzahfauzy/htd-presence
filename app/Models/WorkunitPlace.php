<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


/**
 * @OA\Schema(
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
class WorkunitPlace extends Model
{
    use HasFactory;

    protected $table="workunit_place";
    protected $guarded = [];
}
