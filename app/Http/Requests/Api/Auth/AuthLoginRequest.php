<?php

namespace App\Http\Requests\Api\Auth;

use App\Http\APIRequest;

class AuthLoginRequest extends APIRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            //
            'email'    => $this->getEmailRules(),
            'password' => $this->getPasswordRules()
        ];
    }

    function getEmailRules()
    {
        return ['required','exists:users'];
    }

    function getPasswordRules()
    {
        return ['required'];
    }
}
