<?php
namespace App\Http\Requests\Api\Workunits;

use App\Models\Workunit;

trait RuleTrait
{
    function getIdRules()
    {
        return [
            'exists:'.Workunit::class
        ];
    }
}