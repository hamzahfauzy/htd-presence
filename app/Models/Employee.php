<?php

namespace App\Models;

use App\Models\EmployeePlace;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Employee extends Model
{
    use HasFactory;

    protected $guarded = [];

    function user()
    {
        return $this->belongsTo(User::class);
    }

    function workunit()
    {
        return $this->belongsTo(Workunit::class);
    }

    function worktimes()
    {
        return $this->belongsToMany(Worktime::class)->withPivot('date_start','date_end');
    }

    function place()
    {
        return $this->hasOne(EmployeePlace::class);
    }

    function places()
    {
        return $this->hasMany(EmployeePlace::class);
    }

    function presences()
    {
        return $this->hasMany(EmployeePresence::class);
    }
}
