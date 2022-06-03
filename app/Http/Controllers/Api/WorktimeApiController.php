<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Worktimes\WorktimeApiRepository;
use App\Http\Requests\Api\Worktimes\WorktimeApiAssignRequest;
use App\Http\Requests\Api\Worktimes\WorktimeApiCreateRequest;
use App\Http\Requests\Api\Worktimes\WorktimeApiDeleteRequest;
use App\Http\Requests\Api\Worktimes\WorktimeApiDetailRequest;
use App\Http\Requests\Api\Worktimes\WorktimeApiUpdateRequest;


class WorktimeApiController extends Controller
{
    /**
     * Retrieve worktimes list
     *
     * @param WorktimeApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/worktimes",
     *   summary="Retrieve worktime list",
     *   tags={"Worktimes"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Response(
     *     response=200,
     *     description="worktime list",
     *   )
     * )
     */
    function lists(WorktimeApiRepository $WorktimeApiRepository)
    {
        $data = $WorktimeApiRepository->lists();
        
        return $this->sendResponse($data, __('messages.worktime.lists'));
    }

    /**
     * Retrieve worktimes detail
     * 
     * @param int $id
     * @param WorktimeApiDetailRequest $request
     * @param WorktimeApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/worktimes/{id}",
     *   summary="Retrieve worktime list",
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
     *   @OA\Response(
     *     response=200,
     *     description="Worktime detail",
     *   )
     * )
     */
    function detail(WorktimeApiDetailRequest $WorktimeApiDetailRequest, WorktimeApiRepository $WorktimeApiRepository)
    {
        $data = $WorktimeApiRepository->findOne($WorktimeApiDetailRequest->id);
        return $this->sendResponse($data, __('messages.worktime.detail'));
    }

    /**
     * Create worktimes
     *
     * @param WorktimeApiCreateRequest $request
     * @param WorktimeApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/worktimes",
     *   summary="Create worktimes",
     *   tags={"Worktimes"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/Worktime")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Worktime created",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function create(WorktimeApiCreateRequest $WorktimeApiCreateRequest, WorktimeApiRepository $WorktimeApiRepository)
    {
        $data = $WorktimeApiRepository->create($WorktimeApiCreateRequest);
        return $this->sendResponse($data, __('messages.worktime.create'));
    }

    /**
     * Update worktimes
     *
     * @param int $id
     * @param WorktimeApiUpdateRequest $request
     * @param WorktimeApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Put(
     *   path="/worktimes/{id}",
     *   summary="Update worktimes",
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
     *     @OA\JsonContent(ref="#/components/schemas/Worktime")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Worktime updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function update($id, WorktimeApiUpdateRequest $WorktimeApiUpdateRequest, WorktimeApiRepository $WorktimeApiRepository)
    {
        $data = $WorktimeApiRepository->update($WorktimeApiUpdateRequest);
        return $this->sendResponse($data, __('messages.worktime.update'));
    }

    /**
     * Delete worktimes
     *
     * @param int $id
     * @param WorktimeApiDeleteRequest $request
     * @param WorktimeApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/worktimes/{id}",
     *   summary="Delete worktimes",
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
     *   @OA\Response(
     *     response=200,
     *     description="Worktime deleted",
     *   )
     * )
     */
    function destroy($id, WorktimeApiDeleteRequest $WorktimeApiDeleteRequest, WorktimeApiRepository $WorktimeApiRepository)
    {
        $data = $WorktimeApiRepository->delete($WorktimeApiDeleteRequest->id);
        return $this->sendResponse([], __('messages.worktime.delete'));
    }

    /**
     * Assgin workunits
     *
     * @param int $id
     * @param WorktimeApiUpdateRequest $request
     * @param WorktimeApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/worktimes/{id}/workunit",
     *   summary="Assign workunits on worktime",
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
     *     @OA\JsonContent(ref="#/components/schemas/WorktimeWorkunits")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Workunit assigned",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function assign($id, WorktimeApiAssignRequest $WorktimeApiAssignRequest, WorktimeApiRepository $WorktimeApiRepository)
    {
        $data = $WorktimeApiRepository->assign($WorktimeApiAssignRequest);
        return $this->sendResponse($data, __('messages.worktime.assign'));
    }
}
