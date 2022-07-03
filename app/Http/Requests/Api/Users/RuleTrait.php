<?php
namespace App\Http\Requests\Api\Users;

use App\Models\User;
use App\Models\Employee;
use App\Models\Workunit;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'required',
            'exists:'.User::class
        ];
    }
    
    function getEmployeeIdRules()
    {
        return [
            'required',
            'exists:'.Employee::class.',id'
        ];
    }

    function getWorkunitIdRules()
    {
        return [
            'required',
            'exists:'.Workunit::class.',id'
        ];
    }

    function getDeleteIdRules()
    {
        return [
            'exists:'.User::class,
            'not_in:1'
        ];
    }

    function getNameRules()
    {
        return [
            'required'
        ];
    }

    function getEmailRules()
    {
        return [
            'required',
            'unique:'.User::class.',email'
        ];
    }
    
    function getPasswordRules()
    {
        return [
            'required'
        ];
    }
    
    function getRoleRules()
    {
        return [
            'required',
            'in:pegawai,kasubagumum,adminkepegawaian,adminopd'
        ];
    }
}