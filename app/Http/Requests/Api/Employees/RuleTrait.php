<?php
namespace App\Http\Requests\Api\Employees;

use App\Models\Employee;
use App\Models\Worktime;
use App\Models\EmployeePlace;

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

    function getLatRules()
    {
        return [
            'required'
        ];
    }

    function getLngRules()
    {
        return [
            'required'
        ];
    }

    function getPlaceRules()
    {
        return [
            'required',
            'exists:'.EmployeePlace::class.',id'
        ];
    }
}