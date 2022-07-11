<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;


/**
 * @OA\Schema(
 * 
 * @OA\Property(
 *     property="attachment",
 *     type="file",
 *     format="file"
 *   ),
 * )
 */
class EmployeePresenceUpload extends Model
{
}
