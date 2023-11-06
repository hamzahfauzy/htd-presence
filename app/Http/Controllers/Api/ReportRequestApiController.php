<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\ReportRequests\ReportRequestApiRepository;
use App\Http\Requests\Api\ReportRequests\ReportRequestApiCreateRequest;

class ReportRequestApiController extends Controller
{
    function index(Request $request, ReportRequestApiRepository $repository)
    {
        $data = $repository->get($request->all());
        return $this->sendResponse($data, __('messages.report_request.index'));
    }

    function create(ReportRequestApiCreateRequest $request, ReportRequestApiRepository $repository)
    {
        $request->merge(["user_id"=>auth()->id()]);
        $data = $repository->create($request);
        return $this->sendResponse($data, __('messages.report_request.create'));
    }
}
