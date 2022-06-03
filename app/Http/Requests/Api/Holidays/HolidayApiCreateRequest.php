<?php

namespace App\Http\Requests\Api\Holidays;

use App\Http\APIRequest;

class HolidayApiCreateRequest extends APIRequest
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
            'date' => $this->getDateRules()
        ];
    }
}
