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
            'presence_id' => $this->getPresenceIdRules(),
            'time' => $this->getTimeRules(),
            'day' => $this->getDayRules(),
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'worktime_id' => $this->route('id'),
        ]);
    }
}
