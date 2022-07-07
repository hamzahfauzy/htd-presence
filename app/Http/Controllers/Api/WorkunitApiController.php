<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Workunits\WorkunitApiRepository;
use App\Http\Requests\Api\Workunits\WorkunitApiAssignRequest;
use App\Http\Requests\Api\Workunits\WorkunitApiCreateRequest;
use App\Http\Requests\Api\Workunits\WorkunitApiDeleteRequest;
use App\Http\Requests\Api\Workunits\WorkunitApiDetailRequest;
use App\Http\Requests\Api\Workunits\WorkunitApiUpdateRequest;
use App\Http\Requests\Api\Workunits\WorkunitApiAddPlaceRequest;
use App\Http\Requests\Api\Workunits\WorkunitApiPresenceRequest;
use App\Http\Requests\Api\Workunits\WorkunitApiDeleteWorktimeRequest;

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
     *       enum={"id", "name", "created_at"}
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
     *   @OA\Parameter(
     *     name="name",
     *     in="query",
     *     @OA\Schema(
     *       type="string"
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

    /**
     * create workunits
     *
     * @param int $id
     * @param WorkunitApiCreateRequest $request
     * @param WorkunitApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/workunits",
     *   summary="Create workunits",
     *   tags={"Workunits"},
     *   security={{"Bearer":{}}},
     * 
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/Workunit")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Workunit created",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function create(WorkunitApiCreateRequest $WorkunitApiCreateRequest, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->create($WorkunitApiCreateRequest);
        return $this->sendResponse($data, __('messages.workunit.create'));
    }
    
    /**
     * update workunits
     *
     * @param int $id
     * @param WorkunitApiUpdateRequest $request
     * @param WorkunitApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Put(
     *   path="/workunits/{id}",
     *   summary="Update workunits",
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
     * 
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/Workunit")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Workunit updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function update($id, WorkunitApiUpdateRequest $WorkunitApiUpdateRequest, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->update($WorkunitApiUpdateRequest);
        return $this->sendResponse($data, __('messages.workunit.update'));
    }

    /**
     * delete workunits
     *
     * @param int $id
     * @param WorkunitApiAssignRequest $request
     * @param WorkunitApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/workunits/{id}",
     *   summary="Delete workunits",
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
     *
     *   @OA\Response(
     *     response=200,
     *     description="Workunit deleted",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function destroy($id, WorkunitApiDeleteRequest $WorkunitApiDeleteRequest, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->delete($WorkunitApiDeleteRequest->id);
        return $this->sendResponse($data, __('messages.workunit.delete'));
    }

    /**
     * Assign worktimes on workunits
     *
     * @param int $id
     * @param WorkunitApiAssignRequest $request
     * @param WorkunitApiRepository $WorktimeApiRepository
     *
     * @return Response
     *
     * @OA\Patch(
     *   path="/workunits/{id}/worktime",
     *   summary="Assign worktimes on workunits",
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
     * 
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/WorktimeId")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Workunit updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function assign($id, WorkunitApiAssignRequest $WorkunitApiAssignRequest, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->assign($WorkunitApiAssignRequest);
        return $this->sendResponse($data, __('messages.workunit.assign'));
    }

    /**
     * Workunit delete worktime
     * 
     * @param int $id
     * @param WorkunitApiDeleteWorktimeRequest $request
     * @param WorkunitApiRepository $WorkunitApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/workunits/{id}/worktime",
     *   summary="delete Worktime",
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
     * 
     * @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/WorktimeId")
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="delete worktime",
     *   )
     * )
     */
    function deleteWorktime($id,WorkunitApiDeleteWorktimeRequest $WorkunitApiDeleteWorktimeRequest, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->deleteWorktime($WorkunitApiDeleteWorktimeRequest);
        return $this->sendResponse($data, __('messages.workunit.delete.worktime'));
    }

    /**
     * Workunit add place
     * 
     * @param int $id
     * @param WorkunitApiAddPlaceRequest $request
     * @param WorkunitApiRepository $WorkunitApiRepository
     *
     * @return Response
     *
     * @OA\Patch(
     *   path="/workunits/{id}/place",
     *   summary="Add Place",
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
     * 
     *  @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/WorkunitPlace")
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="add Place",
     *   )
     * )
     */
    function addPlace($id,WorkunitApiAddPlaceRequest $WorkunitApiAddPlaceRequest, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->addPlace($WorkunitApiAddPlaceRequest);
        return $this->sendResponse($data, __('messages.workunit.add.place'));
    }

    /**
     * Retrieve workunits presence list
     * 
     * @param int $id
     * @param WorkunitApiPresenceRequest $request
     * @param WorkunitApiRepository $WorkunitApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/workunits/{id}/presences",
     *   summary="Retrieve workunit presence list",
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
    function presenceList(WorkunitApiPresenceRequest $WorkunitApiPresenceRequest, WorkunitApiRepository $WorkunitApiRepository)
    {
        $data = $WorkunitApiRepository->presenceList($WorkunitApiPresenceRequest);
        return $this->sendResponse($data, __('messages.workunit.presence-list'));
    }

}
