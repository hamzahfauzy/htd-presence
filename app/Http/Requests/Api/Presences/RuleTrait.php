<?php
namespace App\Http\Requests\Api\Presences;

use App\Models\Presence;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'required',
            'exists:'.Presence::class
        ];
    }

    function getDeleteIdRules()
    {
        return [
            'required',
            'exists:'.Presence::class,
            'not_in:1,2'
        ];
    }

    function getNameRules()
    {
        return [
            'required'
        ];
    }
    
    function getToleranceTimeRules()
    {
        return [
            'required',
            'integer'
        ];
    }
}