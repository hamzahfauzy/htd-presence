<?php

namespace App\Http\Requests\Api\Worktimes;

use App\Http\APIRequest;

class WorktimeApiAssignRequest extends APIRequest
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
            'workunit' => $this->getWorkunitRules(),
            'workunit.*' => $this->getWorkunitsRules(),
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'id' => $this->route('id'),
        ]);
    }
}
