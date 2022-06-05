<?php

namespace App\Http\Requests\Api\Employees;

use App\Http\APIRequest;

class EmployeeApiAddPlaceRequest extends APIRequest
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
            'id' => $this->getIdRules(),
            'lat'=>$this->getLatRules(),
            'lng'=>$this->getLngRules(),
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
