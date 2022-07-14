<?php

namespace App\Models;

use DateTimeInterface;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

/**
 * @OA\Schema(
 *   schema="UserPassword",
 *   @OA\Property(
 *     property="password",
 *     type="string",
 *     example="12345678"
 *   ),
 * )
 */

class UserPassword extends Authenticatable
{
}
