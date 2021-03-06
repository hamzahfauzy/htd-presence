<?php
namespace App\Http\Requests\Api\Employees;

use App\Models\Holiday;
use App\Models\Employee;
use App\Models\Worktime;
use App\Models\Workunit;
use App\Models\PaidLeave;
use App\Models\WorktimeItem;
use App\Models\EmployeePlace;
use App\Models\EmployeePresence;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'required',
            'exists:'.Employee::class
        ];
    }
    
    function getWorkunitIdRules()
    {
        return [
            'required',
            'exists:'.Workunit::class.',id'
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

    function getPresenceRules()
    {
        return [
            'required',
            'exists:'.EmployeePresence::class.',id'
        ];
    }

    function getStatusRules()
    {
        return [
            'required',
            'string',
            'in:ditolak,disetujui',
        ];
    }

    function getPresenceDateRules()
    {
        return [
            'required',
            'date',
            'unique:'.Holiday::class
        ];
    }

    function getWorktimeItemIdRules()
    {
        return [
            'required',
            'exists:'.WorktimeItem::class.',id'
        ];
    }
    
    function getTimeRules()
    {
        $times = [];
        for($i=0;$i<60;$i++)
        {
            $_i = $i < 10 ? '0'.$i : $i;
            $times[] = '12:'.$_i;
        }
        return [
            'required',
            'not_in:'.implode(',',$times)
        ];
    }

    function getNipRules()
    {
        return ['required'];
    }
    
    function getNameRules()
    {
        return ['required'];
    }
    
    function getGroupRules()
    {
        return ['required'];
    }
    
    function getPositionRules()
    {
        return ['required'];
    }
    
    function getHeadPositionRules()
    {
        return ['required'];
    }
    
    function getHeadNameRules()
    {
        return ['required'];
    }
    
    function getPhoneRules()
    {
        return ['required'];
    }
    
}