<?php
namespace App\Http\Requests\Api\PaidLeaves;

use App\Models\PaidLeave;

trait RuleTrait
{
    function getDeleteIdRules()
    {
        return [
            'required',
            'exists:'.PaidLeave::class
        ];
    }

    function getNameRules()
    {
        return [
            'required'
        ];
    }
}