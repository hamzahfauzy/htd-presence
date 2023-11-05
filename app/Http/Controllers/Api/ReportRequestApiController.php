<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\ReportRequests\ReportRequestApiRepository;
use App\Http\Requests\Api\ReportRequests\ReportRequestApiCreateRequest;

class ReportRequestApiController extends Controller
{
    function index(ReportRequestApiRepository $repository)
    {
        $data = $repository->get();
        return $this->sendResponse($data, __('messages.report_request.index'));
    }

    function create(ReportRequestApiCreateRequest $request, ReportRequestApiRepository $repository)
    {
        $request->merge(["user_id"=>auth()->id()]);
        $data = $repository->create($request);
        return $this->sendResponse($data, __('messages.report_request.create'));
    }
}
