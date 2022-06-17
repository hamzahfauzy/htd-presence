<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
