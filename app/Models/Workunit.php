<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Workunit extends Model
{
    use HasFactory;

    function employees()
    {
        return $this->hasMany(Employee::class);
    }
    
    function worktimes()
    {
        return $this->belongsToMany(Worktime::class);
    }

    function place()
    {
        return $this->hasOne(WorkunitPlace::class);
    }
}
