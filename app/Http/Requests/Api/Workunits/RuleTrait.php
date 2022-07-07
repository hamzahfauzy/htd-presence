<?php
namespace App\Http\Requests\Api\Workunits;

use App\Models\Worktime;
use App\Models\Workunit;
use App\Models\WorkunitPlace;

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

    function getNameRules()
    {
        return [
            'required'
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
            'exists:'.WorkunitPlace::class.',id'
        ];
    }
    
    function getRadiusRules()
    {
        return [
            'required',
            'integer'
        ];
    }
}