<?php
namespace App\Http\Requests\Api\Holidays;

use App\Models\Holiday;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'required',
            'exists:'.Holiday::class
        ];
    }

    function getNameRules()
    {
        return [
            'required'
        ];
    }
    
    function getDateRules()
    {
        return [
            'required',
            'date'
        ];
    }
}