<?php
namespace App\Http\Requests\Api\Worktimes;

use App\Models\Worktime;
use App\Models\Workunit;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'required',
            'exists:'.Worktime::class
        ];
    }

    function getDeleteIdRules()
    {
        return [
            'required',
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

    function getWorkunitRules()
    {
        return [
            'required',
            'array',
        ];
    }

    function getWorkunitsRules()
    {
        return [
            'required',
            'exists:'.Workunit::class.',id',
        ];
    }
}