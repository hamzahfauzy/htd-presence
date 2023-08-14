<?php

namespace App\Http\Requests\Api\ReportRequests;

use App\Http\APIRequest;

class ReportRequestApiCreateRequest extends APIRequest
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
            'user_id' => $this->getUserIdRules(),
            'workunit_id' => $this->getWorkunitIdRules(),
            'start_at' => $this->getRequiredRules(),
            'end_at' => $this->getRequiredRules(),
            'report_type' => $this->getRequiredRules(),
        ];
    }
}
