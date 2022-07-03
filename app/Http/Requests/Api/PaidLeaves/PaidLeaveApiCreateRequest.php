<?php

namespace App\Http\Requests\Api\PaidLeaves;

use App\Http\APIRequest;

class PaidLeaveApiCreateRequest extends APIRequest
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
            'name' => $this->getNameRules()
        ];
    }
}
