<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Workunits\WorkunitApiRepository;
use App\Http\Requests\Api\Workunits\WorkunitApiDetailRequest;

class WorkunitApiController extends Controller
{
    /**
     * Retrieve workunit list
     *
     * @param WorkunitApiRepository $WorkunitApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/workunits",
     *   summary="Retrieve workunit list",
     *   tags={"Workunits"},
     *   security={{"Bearer":{}}},
     *   @OA\Parameter(
     *     name="per_page",
     *     in="query",
     *     @OA\Schema(
     *       type="integer",
     *       example="10"
     *     )
     *   ),
     *   @OA\Parameter(
     *     name="page",
     *     in="query",
     *     @OA\Schema(
     *       type="integer",
     *       example="1"
     *     )
     *   ),
     *   @OA\Parameter(
     *     name="sort_by",
     *     in="query",
     *     @OA\Schema(
     *       type="string",
     *       enum={"id", "created_at"}
     *     )
     *   ),
     *   @OA\Parameter(
     *     name="order_by",
     *     in="query",
     *     @OA\Schema(
     *       type="string",
     *       enum={"asc", "desc"}
     *     )
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="workunit list",
     *   )
     * )
     */
    function lists(Request $request, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->lists($request);
        
        return $this->sendResponse($data, __('messages.workunit.lists'));
    }

    /**
     * Retrieve workunits detail
     * 
     * @param int $id
     * @param WorkunitApiDetailRequest $request
     * @param WorkunitApiRepository $WorkunitApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/workunits/{id}",
     *   summary="Retrieve workunit list",
     *   tags={"Workunits"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="workunit detail",
     *   )
     * )
     */
    function detail(WorkunitApiDetailRequest $WorkunitApiDetailRequest, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->findOne($WorkunitApiDetailRequest->id);
        return $this->sendResponse($data, __('messages.workunit.detail'));
    }
}
