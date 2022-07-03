<?php

namespace App\Http\Requests\Api\PaidLeaves;

use App\Http\APIRequest;

class PaidLeaveApiDeleteRequest extends APIRequest
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
