<?php

namespace App\Http\Requests\Api\WorktimeItems;

use App\Http\APIRequest;

class WorktimeItemApiUpdateRequest extends APIRequest
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
            'item_id' => $this->getItemIdRules(),
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
            'item_id' => $this->route('item_id'),
        ]);
    }
}
