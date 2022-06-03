<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Employees\EmployeeApiRepository;
use App\Http\Requests\Api\Employees\EmployeeApiDetailRequest;
use App\Http\Requests\Api\Employees\EmployeeApiAddWorktimeRequest;
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
}
