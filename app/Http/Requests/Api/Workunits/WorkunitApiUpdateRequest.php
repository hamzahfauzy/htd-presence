<?php

namespace App\Http\Requests\Api\Workunits;

use App\Http\APIRequest;

class WorkunitApiUpdateRequest extends APIRequest
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
            'lat' => $this->getLatRules(),
            'lng' => $this->getLngRules(),
            'radius' => $this->getRadiusRules(),
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
