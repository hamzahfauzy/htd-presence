<?php

namespace App\Http\Requests\Api\Employees;

use App\Http\APIRequest;

class EmployeeApiDeleteWorktimeRequest extends APIRequest
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
            'worktime_id'=>$this->getWorktimeRules(),
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
