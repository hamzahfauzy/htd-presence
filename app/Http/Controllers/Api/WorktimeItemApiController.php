<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\WorktimeItems\WorktimeItemApiRepository;
use App\Http\Requests\Api\WorktimeItems\WorktimeItemApiCreateRequest;
use App\Http\Requests\Api\WorktimeItems\WorktimeItemApiDeleteRequest;
use App\Http\Requests\Api\WorktimeItems\WorktimeItemApiDetailRequest;
use App\Http\Requests\Api\WorktimeItems\WorktimeItemApiUpdateRequest;


class WorktimeItemApiController extends Controller
{
    /**
     * Retrieve worktime items list
     *
     * @param WorktimeItemApiRepository $WorktimeItemApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/worktimes/{id}/items",
     *   summary="Retrieve worktime item list",
     *   tags={"Worktimes"},
     *   security={{"Bearer":{}}},
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
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
     *       enum={"id"}
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
     *     description="worktime list",
     *   )
     * )
     */
    function lists($id, Request $request, WorktimeItemApiRepository $WorktimeItemApiRepository)
    {
        $data = $WorktimeItemApiRepository->lists($id, $request);
        
        return $this->sendResponse($data, __('messages.worktime.detail'));
    }

    /**
     * Create worktimes
     *
     * @param WorktimeItemApiCreateRequest $request
     * @param WorktimeItemApiRepository $WorktimeItemApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/worktimes/{id}/items",
     *   summary="Create worktime items",
     *   tags={"Worktimes"},
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
     *     @OA\JsonContent(ref="#/components/schemas/WorktimeItem")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Worktime item created",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function create($id, WorktimeItemApiCreateRequest $WorktimeItemApiCreateRequest, WorktimeItemApiRepository $WorktimeItemApiRepository)
    {
        $data = $WorktimeItemApiRepository->create($WorktimeItemApiCreateRequest);
        return $this->sendResponse($data, __('messages.worktime_item.create'));
    }

    /**
     * Update worktime items
     *
     * @param int $id
     * @param WorktimeItemApiUpdateRequest $request
     * @param WorktimeItemApiRepository $WorktimeItemApiRepository
     *
     * @return Response
     *
     * @OA\Put(
     *   path="/worktimes/{id}/items/{item_id}",
     *   summary="Update worktime items",
     *   tags={"Worktimes"},
     *   security={{"Bearer":{}}},
     * 
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     *   @OA\Parameter(
     *     name="item_id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     * 
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/WorktimeItem")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Worktime item updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function update($id, $item_id, WorktimeItemApiUpdateRequest $WorktimeItemApiUpdateRequest, WorktimeItemApiRepository $WorktimeItemApiRepository)
    {
        $data = $WorktimeItemApiRepository->update($WorktimeItemApiUpdateRequest);
        return $this->sendResponse($data, __('messages.worktime_item.update'));
    }

    /**
     * Delete worktimes
     *
     * @param int $id
     * @param WorktimeItemApiDeleteRequest $request
     * @param WorktimeItemApiRepository $WorktimeItemApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/worktimes/{id}/items/{item_id}",
     *   summary="Delete worktime items",
     *   tags={"Worktimes"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     *   @OA\Parameter(
     *     name="item_id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="Worktime item deleted",
     *   )
     * )
     */
    function destroy($id, $item_id, WorktimeItemApiDeleteRequest $WorktimeItemApiDeleteRequest, WorktimeItemApiRepository $WorktimeItemApiRepository)
    {
        $data = $WorktimeItemApiRepository->delete($WorktimeItemApiDeleteRequest->item_id);
        return $this->sendResponse([], __('messages.worktime_item.delete'));
    }
}
