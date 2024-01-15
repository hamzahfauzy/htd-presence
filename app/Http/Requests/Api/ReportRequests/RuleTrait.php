<?php

namespace App\Http\Requests\Api\ReportRequests;

use App\Models\ReportRequest;
use App\Models\User;
use App\Models\Workunit;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'required',
            'exists:' . ReportRequest::class
        ];
    }

    function getUserIdRules()
    {
        return [
            'required',
            'exists:' . User::class . ',id'
        ];
    }

    function getWorkunitIdRules()
    {
        return [
            'required',
            'exists:' . Workunit::class . ',id'
        ];
    }

    function getRequiredRules()
    {
        return ['required'];
    }
}
