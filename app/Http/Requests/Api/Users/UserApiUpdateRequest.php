<?php

namespace App\Http\Requests\Api\Users;

use App\Http\APIRequest;

class UserApiUpdateRequest extends APIRequest
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
            'name' => $this->getNameRules(),
            'email' => $this->getEmailUpdateRules(),
            'role' => $this->getRoleRules(),
            'shift_management' => $this->getShiftManagementRules(),
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }

    function getEmailUpdateRules()
    {
        $rule = $this->getEmailRules();
        $rule[1] .= ','.$this->id;

        return $rule;
    }
}
