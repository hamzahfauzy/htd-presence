<?php

namespace App\Http\Requests\Api\Employees;

use App\Http\APIRequest;

class EmployeeApiPresenceRequest extends APIRequest
{

    use RuleTrait;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = [
            'id' => $this->getIdRules(),
            'type' => $this->getTypeRules(),
            'attachment' => $this->getAttachmentRules(),
        ];

        if($this->type == 'hadir')
        {
            $rules['date'] = $this->getPresenceDateRules();
        }

        return $rules;
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);

        if($this->type == 'hadir')
        {
            $this->merge([
                'date' => date('Y-m-d')
            ]);
        }
    }
}
