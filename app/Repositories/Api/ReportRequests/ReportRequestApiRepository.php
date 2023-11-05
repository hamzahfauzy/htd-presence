<?php

namespace App\Repositories\Api\ReportRequests;

use App\Models\ReportRequest;

class ReportRequestApiRepository
{

    private $creator;

    function __construct(Creator $creator)
    {
        $this->creator = $creator;
    }

    function get()
    {
        return ReportRequest::with('workunit')->orderby('id','desc')->paginate(20);
    }

    public function findOne($id)
    {
        return ReportRequest::whereId($id)->first();
    }

    public function create($input)
    {
        $create = $this->creator
            ->prepare($input)
            ->execute();

        return $this->findOne($create->id);
    }
}
