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
}
