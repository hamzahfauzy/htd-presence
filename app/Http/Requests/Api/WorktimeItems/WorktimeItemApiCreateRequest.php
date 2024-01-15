<?php

namespace App\Http\Requests\Api\WorktimeItems;

use App\Http\APIRequest;

class WorktimeItemApiCreateRequest extends APIRequest
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
            'worktime_id' => $this->getWorktimeIdRules(),
            'name' => $this->getStringRules(),
            'start_time' => $this->getStringRules(),
            'end_time' => $this->getStringRules(),
            'on_time_start' => $this->getStringRules(),
            'on_time_end' => $this->getStringRules(),
            'penalty' => 'required|integer',
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'worktime_id' => $this->route('id'),
        ]);
    }
}
