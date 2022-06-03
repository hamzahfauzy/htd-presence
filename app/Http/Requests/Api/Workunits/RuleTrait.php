<?php
namespace App\Http\Requests\Api\Workunits;

use App\Models\Worktime;
use App\Models\Workunit;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'required',
            'exists:'.Workunit::class
        ];
    }

    function getWorktimeRules()
    {
        return [
            'required',
            'exists:'.Worktime::class.',id'
        ];
    }
}