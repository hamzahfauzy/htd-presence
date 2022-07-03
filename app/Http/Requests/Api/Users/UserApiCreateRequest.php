<?php

namespace App\Http\Requests\Api\Users;

use App\Http\APIRequest;

class UserApiCreateRequest extends APIRequest
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
            'email' => $this->getEmailRules(),
            'password' => $this->getPasswordRules(),
            'role' => $this->getRoleRules(),
            'workunit_id' => $this->getWorkunitIdRules(),
        ];
    }
}
