<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Employees\EmployeeApiRepository;
use App\Http\Requests\Api\Employees\EmployeeApiDetailRequest;
use App\Http\Requests\Api\Employees\EmployeeApiAddPlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiPresenceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiFreePlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiAddWorktimeRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDeletePlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiListPresenceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDeleteWorktimeRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDetailPresenceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiUpdatePresenceRequest;

class EmployeeApiController extends Controller
{
    /**
     * Retrieve employee list
     *
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees",
     *   summary="Retrieve employee list",
     *   tags={"Employees"},
     *   security={{"Bearer":{}}},
     * 
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
     *       enum={"nip", "name"}
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
     *
     *   @OA\Response(
     *     response=200,
     *     description="employee list"
     *   )
     * )
     */
    function lists(Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->lists($request);
        
        return $this->sendResponse($data, __('messages.employee.lists'));
    }

    /**
     * Retrieve employees detail
     * 
     * @param int $id
     * @param EmployeeApiDetailRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees/{id}",
     *   summary="Retrieve employee list",
     *   tags={"Employees"},
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
     *     description="employee detail",
     *   )
     * )
     */
    function detail(EmployeeApiDetailRequest $EmployeeApiDetailRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->findOne($EmployeeApiDetailRequest->id);
        return $this->sendResponse($data, __('messages.employee.detail'));
    }

    
    /**
     * Employee add worktime
     * 
     * @param int $id
     * @param EmployeeApiAddWorktimeRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/employees/{id}/worktime",
     *   summary="Add Worktime",
     *   tags={"Employees"},
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
     *     @OA\JsonContent(ref="#/components/schemas/EmployeeWorktime")
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="add worktime",
     *   )
     * )
     */
    function addWorktime($id,EmployeeApiAddWorktimeRequest $EmployeeApiAddWorktimeRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->addWorktime($EmployeeApiAddWorktimeRequest);
        return $this->sendResponse($data, __('messages.employee.add.worktime'));
    }

    /**
     * Employee delete worktime
     * 
     * @param int $id
     * @param EmployeeApiDeleteWorktimeRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/employees/{id}/worktime",
     *   summary="delete Worktime",
     *   tags={"Employees"},
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
    function deleteWorktime($id,EmployeeApiDeleteWorktimeRequest $EmployeeApiDeleteWorktimeRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->deleteWorktime($EmployeeApiDeleteWorktimeRequest);
        return $this->sendResponse($data, __('messages.employee.delete.worktime'));
    }

    /**
     * Employee add place
     * 
     * @param int $id
     * @param EmployeeApiAddPlaceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/employees/{id}/place",
     *   summary="Add Place",
     *   tags={"Employees"},
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
     *     @OA\JsonContent(ref="#/components/schemas/EmployeePlace")
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="add Place",
     *   )
     * )
     */
    function addPlace($id,EmployeeApiAddPlaceRequest $EmployeeApiAddPlaceRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->addPlace($EmployeeApiAddPlaceRequest);
        return $this->sendResponse($data, __('messages.employee.add.place'));
    }

    /**
     * Employee delete place
     * 
     * @param int $id
     * @param EmployeeApiDeletePlaceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/employees/{id}/place",
     *   summary="delete Place",
     *   tags={"Employees"},
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
     *     @OA\JsonContent(ref="#/components/schemas/PlaceId")
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="delete place",
     *   )
     * )
     */
    function deletePlace($id,EmployeeApiDeletePlaceRequest $EmployeeApiDeletePlaceRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->deletePlace($EmployeeApiDeletePlaceRequest);
        return $this->sendResponse($data, __('messages.employee.delete.place'));
    }

    /**
     * Employee Free place
     * 
     * @param int $id
     * @param EmployeeApiFreePlaceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Patch(
     *   path="/employees/{id}/place",
     *   summary="free Place",
     *   tags={"Employees"},
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
     *     description="delete place",
     *   )
     * )
     */
    function freePlace($id,EmployeeApiFreePlaceRequest $EmployeeApiFreePlaceRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->freePlace($EmployeeApiFreePlaceRequest);
        return $this->sendResponse($data, __('messages.employee.free.place'));
    }

    /**
     * Employee presence
     * 
     * @param int $id
     * @param EmployeeApiPresenceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/employees/{id}/presences",
     *   summary="employee presence",
     *   tags={"Employees"},
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
    *     @OA\MediaType(
    *       mediaType="multipart/form-data",
    *       @OA\Schema(ref="#/components/schemas/EmployeePresence")
    *     )
    *  ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="employee precence",
     *   )
     * )
     */
    function presences($id,EmployeeApiPresenceRequest $EmployeeApiPresenceRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->presences($EmployeeApiPresenceRequest);
        return $this->sendResponse($data, __('messages.employee.presences'));
    }

    /**
     * Employee list presences
     * 
     * @param int $id
     * @param EmployeeApiListPresenceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees/{id}/presences",
     *   summary="employee list presence",
     *   tags={"Employees"},
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
     * @OA\Parameter(
     *     name="date_from",
     *     in="query",
     *     @OA\Schema(
     *       type="date",
     *     )
     *   ),
     * 
     * @OA\Parameter(
     *     name="date_to",
     *     in="query",
     *     @OA\Schema(
     *       type="date",
     *     )
     *   ),
     * 
     * @OA\Parameter(
     *     name="type",
     *     in="query",
     *     @OA\Schema(
     *       type="string",
     *     )
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="employee precence",
     *   )
     * )
     */
    function listPresence($id,EmployeeApiListPresenceRequest $EmployeeApiListPresenceRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->listPresence($EmployeeApiListPresenceRequest);
        return $this->sendResponse($data, __('messages.employee.list.presence'));
    }

    /**
     * Detail Employee presence
     * 
     * @param int $id
     * @param EmployeeApiDetailPresenceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees/{id}/presences/{employee_presence_id}",
     *   summary="detail employee presence",
     *   tags={"Employees"},
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
     *   @OA\Parameter(
     *     name="employee_presence_id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="detail employee precence",
     *   )
     * )
     */
    function detailPresence($id,EmployeeApiDetailPresenceRequest $EmployeeApiDetailPresenceRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->detailPresence($EmployeeApiDetailPresenceRequest);
        return $this->sendResponse($data, __('messages.employee.detail.presence'));
    }

    /**
     * Employee Update Status Presence
     * 
     * @param int $id
     * @param EmployeeApiUpdatePresenceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Patch(
     *   path="/employees/{id}/presences/{employee_presence_id}",
     *   summary="update status presence",
     *   tags={"Employees"},
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
     * @OA\Parameter(
     *     name="employee_presence_id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *     )
     *   ),
     * 
     *  @OA\RequestBody(
     *      @OA\MediaType(
     *          mediaType="application/json",
     *          @OA\Schema(
     *              @OA\Property(
     *                  property="status",
     *                  type="string",
     *                  example="ditolak"
     *              )
     *          )
     *      )
     *  ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="update status presence",
     *   )
     * )
     */
    function updatePresence($id,EmployeeApiUpdatePresenceRequest $EmployeeApiUpdatePresenceRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->updatePresence($EmployeeApiUpdatePresenceRequest);
        return $this->sendResponse($data, __('messages.employee.update.presence'));
    }
}
