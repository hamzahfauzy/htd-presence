<?php

namespace App\Http\Requests\Api\Employees;

use App\Http\APIRequest;

class EmployeeApiUploadAttachmentRequest extends APIRequest
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
            'id' => 'required',
            'attachment' => 'required|file|max:1024'
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
