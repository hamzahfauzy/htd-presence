<?php

namespace App\Http\Requests\Api\Presences;

use App\Http\APIRequest;

class PresenceApiCreateRequest extends APIRequest
{
    use RuleTrait;
    
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => $this->getNameRules(),
            'tolerance_time' => $this->getToleranceTimeRules()
        ];
    }
}
