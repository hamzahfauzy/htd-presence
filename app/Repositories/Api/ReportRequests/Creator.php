<?php

namespace App\Repositories\Api\ReportRequests;

use App\Models\ReportRequest;

class Creator
{

    private $input;

    public function prepare($input)
    {
        $this->input = $input;
        return $this;
    }

    public function execute()
    {
        $input    = $this->input;
        $report = new ReportRequest;
        $report->user_id = $input['user_id'];
        $report->workunit_id = $input['workunit_id'];
        $report->start_at = $input['start_at'];
        $report->end_at = $input['end_at'];
        $report->report_type = $input['report_type'];
        $report->status = 'WAITING';
        $report->save();

        return $report;
    }
}
