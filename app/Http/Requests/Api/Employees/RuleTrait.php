<?php
namespace App\Http\Requests\Api\Employees;

use App\Models\Employee;
use App\Models\Worktime;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'required',
            'exists:'.Employee::class
        ];
    }

    function getWorktimeRules()
    {
        return [
            'required',
            'exists:'.Worktime::class.',id'
        ];
    }

    function getDateRules()
    {
        return [
            'required',
            'date',
        ];
    }
}