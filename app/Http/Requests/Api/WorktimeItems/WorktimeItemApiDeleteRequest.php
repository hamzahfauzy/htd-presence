<?php

namespace App\Http\Requests\Api\WorktimeItems;

use App\Http\APIRequest;

class WorktimeItemApiDeleteRequest extends APIRequest
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
            'item_id' => $this->getItemIdRules(),
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
