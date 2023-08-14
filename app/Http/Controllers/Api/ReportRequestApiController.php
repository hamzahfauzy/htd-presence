<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\ReportRequests\ReportRequestApiRepository;
use App\Http\Requests\Api\ReportRequests\ReportRequestApiCreateRequest;

class ReportRequestApiController extends Controller
{
    function create(ReportRequestApiCreateRequest $request, ReportRequestApiRepository $repository)
    {
        $data = $repository->create($request);
        return $this->sendResponse($data, __('messages.report_request.create'));
    }
}
