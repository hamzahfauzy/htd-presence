<?php

namespace App\Http\Requests\Api\Users;

use App\Http\APIRequest;

class UserApiDeleteRequest extends APIRequest
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
            'id' => $this->getDeleteIdRules()
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
