<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ReportRequest extends Model
{
    use HasFactory;

    protected $guarded = false;

    public function workunit()
    {
        return $this->belongsTo('App\Models\Workunit');
    }

    public function getStartAtAttribute()
    {
        return date('Y-m-d', strtotime($this->attributes['start_at']));
    }
    
    public function getEndAtAttribute()
    {
        return date('Y-m-d', strtotime($this->attributes['end_at']));
    }
}
