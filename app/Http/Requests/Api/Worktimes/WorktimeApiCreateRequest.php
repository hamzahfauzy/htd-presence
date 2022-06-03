<?php

namespace App\Http\Requests\Api\Worktimes;

use App\Http\APIRequest;

class WorktimeApiCreateRequest extends APIRequest
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
            'name' => $this->getNameRules()
        ];
    }
}
