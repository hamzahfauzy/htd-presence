<?php

namespace App\Http\Requests\Api\Holidays;

use App\Http\APIRequest;

class HolidayApiDeleteRequest extends APIRequest
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
            'id' => $this->getIdRules()
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
