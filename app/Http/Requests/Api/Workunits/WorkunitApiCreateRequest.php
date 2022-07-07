<?php

namespace App\Http\Requests\Api\Workunits;

use App\Http\APIRequest;

class WorkunitApiCreateRequest extends APIRequest
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
            'lat' => $this->getLatRules(),
            'lng' => $this->getLngRules(),
            'radius' => $this->getRadiusRules(),
        ];
    }

}
