<?php
namespace App\Http\Requests\Api\Employees;

use App\Models\Holiday;
use App\Models\Employee;
use App\Models\Worktime;
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

    function getTypeRules()
    {
        return [
            'required',
            'string',
            'in:hadir,sakit,izin',
        ];
    }

    function getAttachmentRules()
    {
        return [
            'required',
            'file'
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
}