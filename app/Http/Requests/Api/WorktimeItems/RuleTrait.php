<?php
namespace App\Http\Requests\Api\WorktimeItems;

use App\Models\Presence;
use App\Models\Worktime;
use App\Models\WorktimeItem;

trait RuleTrait
{
    
    function getItemIdRules()
    {
        return [
            'required',
            'gt:10',
            'exists:'.WorktimeItem::class.',id'
        ];
    }

    function getWorktimeIdRules()
    {
        return [
            'required',
            'exists:'.Worktime::class.',id'
        ];
    }
    
    function getPresenceIdRules()
    {
        return [
            'required',
            'exists:'.Presence::class.',id'
        ];
    }
    
    function getTimeRules()
    {
        return [
            'required',
            'date_format:H:i'
        ];
    }
    
    function getDayRules()
    {
        return [
            'required',
            'integer',
            'between:1,6'
        ];
    }
}