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
 *   schema="User",
 *   @OA\Property(
 *     property="name",
 *     type="string",
 *     example="Nama"
 *   ),
 *   @OA\Property(
 *     property="email",
 *     type="string",
 *     example="email@mail.com"
 *   ),
 *   @OA\Property(
 *     property="password",
 *     type="string",
 *     example="password"
 *   ),
 *   @OA\Property(
 *     property="role",
 *     type="string",
 *     example="employee"
 *   ),
 *   @OA\Property(
 *     property="workunit_id",
 *     type="number",
 *     example="1"
 *   )
 * )
 */

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
        'api_token'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
        'api_token'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    function employee()
    {
        return $this->hasOne(Employee::class,'user_id');
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
