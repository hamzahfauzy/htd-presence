<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    function workunit()
    {
        return $this->belongsTo(Workunit::class);
    }

    function worktimes()
    {
        return $this->belongsToMany(Worktime::class)->withPivot('date_start','date_end');
    }
}
