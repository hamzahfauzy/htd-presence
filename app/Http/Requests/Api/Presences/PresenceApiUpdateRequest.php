<?php

namespace App\Http\Requests\Api\Presences;

use App\Http\APIRequest;

class PresenceApiUpdateRequest extends APIRequest
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
            'tolerance_time' => $this->getToleranceTimeRules()
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
