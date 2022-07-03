<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\PaidLeaves\PaidLeaveApiRepository;
use App\Http\Requests\Api\PaidLeaves\PaidLeaveApiCreateRequest;
use App\Http\Requests\Api\PaidLeaves\PaidLeaveApiDeleteRequest;
use App\Http\Requests\Api\PaidLeaves\PaidLeaveApiUpdateRequest;


class PaidLeaveApiController extends Controller
{
    /**
     * Retrieve paid eave list
     *
     * @param PaidLeaveApiRepository $PaidLeaveApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/paid_leaves",
     *   summary="Retrieve paid leave list",
     *   tags={"PaidLeaves"},
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
     *       enum={"id", "name"}
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
     *     description="paid leave list",
     *   )
     * )
     */
    function lists(Request $request, PaidLeaveApiRepository $PaidLeaveApiRepository)
    {
        $data = $PaidLeaveApiRepository->lists($request);
        
        return $this->sendResponse($data, __('messages.paid_leaves.lists'));
    }

    /**
     * Retrieve PaidLeaves detail
     * 
     * @param int $id
     * @param PaidLeaveApiDetailRequest $request
     * @param PaidLeaveApiRepository $PaidLeaveApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/paid_leaves/{id}",
     *   summary="Retrieve paid leave list",
     *   tags={"PaidLeaves"},
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
     *     description="paid leave detail",
     *   )
     * )
     */
    function detail(Request $request, PaidLeaveApiRepository $PaidLeaveApiRepository)
    {
        $data = $PaidLeaveApiRepository->findOne($request->id);
        return $this->sendResponse($data, __('messages.paid_leave.detail'));
    }

    /**
     * Create PaidLeaves
     *
     * @param PaidLeaveApiCreateRequest $request
     * @param PaidLeaveApiRepository $PaidLeaveApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/paid_leaves",
     *   summary="Create paid leave",
     *   tags={"PaidLeaves"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/PaidLeave")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="PaidLeave created",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function create(PaidLeaveApiCreateRequest $PaidLeaveApiCreateRequest, PaidLeaveApiRepository $PaidLeaveApiRepository)
    {
        $data = $PaidLeaveApiRepository->create($PaidLeaveApiCreateRequest);
        return $this->sendResponse($data, __('messages.paid_leaves.create'));
    }

    /**
     * Update PaidLeaves
     *
     * @param int $id
     * @param PaidLeaveApiUpdateRequest $request
     * @param PaidLeaveApiRepository $PaidLeaveApiRepository
     *
     * @return Response
     *
     * @OA\Put(
     *   path="/paid_leaves/{id}",
     *   summary="Update paid leave",
     *   tags={"PaidLeaves"},
     *   security={{"Bearer":{}}},
     * 
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     * 
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/PaidLeave")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="PaidLeave updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function update($id, PaidLeaveApiUpdateRequest $PaidLeaveApiUpdateRequest, PaidLeaveApiRepository $PaidLeaveApiRepository)
    {
        $data = $PaidLeaveApiRepository->update($PaidLeaveApiUpdateRequest);
        return $this->sendResponse($data, __('messages.paid_leaves.update'));
    }

    /**
     * Delete PaidLeaves
     *
     * @param int $id
     * @param PaidLeaveApiDeleteRequest $request
     * @param PaidLeaveApiRepository $PaidLeaveApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/paid_leaves/{id}",
     *   summary="Delete paid leave",
     *   tags={"PaidLeaves"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="PaidLeave deleted",
     *   )
     * )
     */
    function destroy($id, PaidLeaveApiDeleteRequest $PaidLeaveApiDeleteRequest, PaidLeaveApiRepository $PaidLeaveApiRepository)
    {
        $data = $PaidLeaveApiRepository->delete($PaidLeaveApiDeleteRequest->id);
        return $this->sendResponse([], __('messages.paid_leaves.delete'));
    }
}
