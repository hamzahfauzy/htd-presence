<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Employees\EmployeeApiRepository;
use App\Http\Requests\Api\Employees\EmployeeApiDetailRequest;
use App\Http\Requests\Api\Employees\EmployeeApiAddPlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiFreePlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiAddWorktimeRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDeletePlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDeleteWorktimeRequest;

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
}
