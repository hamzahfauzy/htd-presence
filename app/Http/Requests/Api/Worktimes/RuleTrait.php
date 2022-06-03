<?php
namespace App\Http\Requests\Api\Worktimes;

use App\Models\Worktime;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'exists:'.Worktime::class
        ];
    }

    function getDeleteIdRules()
    {
        return [
            'exists:'.Worktime::class,
            'not_in:1'
        ];
    }

    function getNameRules()
    {
        return [
            'required'
        ];
    }
}