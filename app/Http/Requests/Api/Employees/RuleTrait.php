<?php
namespace App\Http\Requests\Api\Employees;

use App\Models\Employee;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'exists:'.Employee::class
        ];
    }
}