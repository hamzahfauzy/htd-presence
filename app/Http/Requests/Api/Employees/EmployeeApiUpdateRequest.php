<?php

namespace App\Http\Requests\Api\Employees;

use App\Http\APIRequest;

class EmployeeApiUpdateRequest extends APIRequest
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
            'workunit_id'=>$this->getWorkunitIdRules(),
            'nip'=>$this->getNipRules(),
            'name'=>$this->getNameRules(),
            'group'=>$this->getGroupRules(),
            'position'=>$this->getPositionRules(),
            'phone'=>$this->getPhoneRules(),
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
