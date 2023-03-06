<?php

namespace App\Http\Controllers\Api;

use DateTime;
use DatePeriod;
use DateInterval;
use App\Models\Workunit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Employees\EmployeeApiRepository;
use App\Http\Requests\Api\Employees\EmployeeApiCreateRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDeleteRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDetailRequest;
use App\Http\Requests\Api\Employees\EmployeeApiUpdateRequest;
use App\Http\Requests\Api\Employees\EmployeeApiAddPlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiPresenceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiFreePlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiAddWorktimeRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDeletePlaceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiListPresenceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiListPaidLeaveRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDeleteWorktimeRequest;
use App\Http\Requests\Api\Employees\EmployeeApiDetailPresenceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiUpdatePresenceRequest;
use App\Http\Requests\Api\Employees\EmployeeApiUploadAttachmentRequest;

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
     *   @OA\Parameter(
     *     name="workunit_id",
     *     in="query",
     *     @OA\Schema(
     *       type="integer",
     *       example="1"
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
     * create employees
     *
     * @param int $id
     * @param EmployeeApiCreateRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/employees",
     *   summary="Create employees",
     *   tags={"Employees"},
     *   security={{"Bearer":{}}},
     * 
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/Employee")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Employee created",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function create(EmployeeApiCreateRequest $EmployeeApiCreateRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->create($EmployeeApiCreateRequest);
        return $this->sendResponse($data, __('messages.employee.create'));
    }
    
    /**
     * update employees
     *
     * @param int $id
     * @param EmployeeApiUpdateRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Put(
     *   path="/employees/{id}",
     *   summary="Update employees",
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
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/Employee")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Employee updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function update($id, EmployeeApiUpdateRequest $EmployeeApiUpdateRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->update($EmployeeApiUpdateRequest);
        return $this->sendResponse($data, __('messages.employee.update'));
    }

    /**
     * delete employees
     *
     * @param int $id
     * @param EmployeeApiAssignRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/employees/{id}",
     *   summary="Delete employee",
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
     *     description="Employee deleted",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function destroy($id, EmployeeApiDeleteRequest $EmployeeApiDeleteRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->delete($EmployeeApiDeleteRequest);
        return $this->sendResponse($data, __('messages.employee.delete'));
    }

    /**
     * Retrieve employee list reports
     *
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees/reports/{workunit_id}",
     *   summary="Retrieve employee list reports",
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
     * @OA\Parameter(
     *     name="workunit_id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *       example="1"
     *     )
     *   ),
     * @OA\Parameter(
     *     name="date_start",
     *     in="query",
     *     @OA\Schema(
     *       type="string",
     *       example="2022-01-01"
     *     )
     *   ),
     *
     * @OA\Parameter(
     *     name="date_end",
     *     in="query",
     *     @OA\Schema(
     *       type="string",
     *       example="2022-02-01"
     *     )
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="employee list"
     *   )
     * )
     */
    function reports($workunit_id,Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->reports($workunit_id,$request);
        
        return $this->sendResponse($data, __('messages.employee.reports'));
    }

    /**
     * Retrieve employee list report details
     *
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees/report-details/{workunit_id}",
     *   summary="Retrieve employee list report details",
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
     * @OA\Parameter(
     *     name="workunit_id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *       example="1"
     *     )
     *   ),
     * @OA\Parameter(
     *     name="date_start",
     *     in="query",
     *     @OA\Schema(
     *       type="string",
     *       example="2022-01-01"
     *     )
     *   ),
     *
     * @OA\Parameter(
     *     name="date_end",
     *     in="query",
     *     @OA\Schema(
     *       type="string",
     *       example="2022-02-01"
     *     )
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="employee list"
     *   )
     * )
     */
    function reportDetails($workunit_id,Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->reportDetails($workunit_id,$request);
        
        return $this->sendResponse($data, __('messages.employee.report-details'));
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
     * Retrieve employees detail
     * 
     * @param string $nip
     * @param EmployeeApiDetailRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees/detail-by-nip/{nip}",
     *   summary="Retrieve employee list",
     *   tags={"Employees"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="string",
     *     )
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="employee detail",
     *   )
     * )
     */
    function detailByNip(Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->findByNip($request->nip);
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
     *       type="integer"
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
        return $this->sendResponse($data, __('messages.employee.worktime.add'));
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
        return $this->sendResponse($data, __('messages.employee.worktime.delete'));
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
        return $this->sendResponse($data, __('messages.place.add'));
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
        return $this->sendResponse($data, __('messages.place.delete'));
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
        return $this->sendResponse($data, __('messages.place.free'));
    }

    /**
     * Employee Android user
     * 
     * @param int $id
     * @param EmployeeApiFreePlaceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Patch(
     *   path="/employees/{id}/android-user",
     *   summary="android user",
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
    function androidUser($id, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->androidUser($id);
        return $this->sendResponse($data, 'Sukses mengubah data');
    }

    /**
     * Employee Reset Device
     * 
     * @param int $id
     * @param EmployeeApiFreePlaceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Patch(
     *   path="/employees/{id}/reset-device",
     *   summary="reset device",
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
     *     description="reset device",
     *   )
     * )
     */
    function resetDevice($id,Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->resetDevice($id);
        return $this->sendResponse($data, __('messages.employee.reset-device'));
    }

    /**
     * Employee Reset password
     * 
     * @param int $id
     * @param EmployeeApiFreePlaceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Patch(
     *   path="/employees/{id}/reset-password",
     *   summary="reset password",
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
     *     description="reset password",
     *   )
     * )
     */
    function resetPassword($id,Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->resetPassword($id);
        return $this->sendResponse($data, __('messages.employee.reset-password'));
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
     *   @OA\Response(
     *     response=200,
     *     description="employee precence",
     *   )
     * )
     */
    function listPresence($id,EmployeeApiListPresenceRequest $EmployeeApiListPresenceRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->listPresence($EmployeeApiListPresenceRequest);
        return $this->sendResponse($data, __('messages.employee.presence.list'));
    }

    /**
     * Employee list paid leaves
     * 
     * @param int $id
     * @param EmployeeApiListPresenceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees/{id}/paid-leaves",
     *   summary="employee list paid leaves",
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
     *   @OA\Parameter(
     *     name="type",
     *     in="query",
     *     @OA\Schema(
     *       type="string",
     *     )
     *   ),
     *   @OA\Response(
     *     response=200,
     *     description="employee precence",
     *   )
     * )
     */
    function listPaidLeave($id, EmployeeApiListPaidLeaveRequest $EmployeeApiListPaidLeaveRequest, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->listPaidLeave($EmployeeApiListPaidLeaveRequest);
        return $this->sendResponse($data, __('messages.employee.presence.list'));
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
        return $this->sendResponse($data, __('messages.employee.presence.detail'));
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
        return $this->sendResponse($data, __('messages.employee.presence.update'));
    }

    /**
     * Employee check if exists presence
     * 
     * @param int $id
     * @param EmployeeApiPresenceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/employees/{id}/presences/check_if_exists/{worktime_item_id}",
     *   summary="employee check if exists presence",
     *   tags={"Employees"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *       example=1,
     *     )
     *   ),
     *
     * @OA\Parameter(
     *     name="worktime_item_id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *        example=2,
     *     )
     *   ), 
     * 
     *   @OA\Response(
     *     response=200,
     *     description="employee check if exists presence",
     *   )
     * )
     */
    function checkIfExists($id,Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->checkIfExists($request);
        return $this->sendResponse($data, __('messages.employee.presences'));
    }

    
    /**
     * Detail Employee upload attachment presence
     * 
     * @param int $id
     * @param EmployeeApiDetailPresenceRequest $request
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/employees/{id}/presences/{employee_presence_id}/upload-attachment",
     *   summary="detail employee upload attachment presence",
     *   tags={"Employees"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Parameter(
     *     name="id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *      example=1,
     *     )
     *   ),
     * 
     *   @OA\Parameter(
     *     name="employee_presence_id",
     *     in="path",
     *     @OA\Schema(
     *       type="integer",
     *       example=6,
     *     )
     *   ),
     * 
     *  @OA\RequestBody(
     *     @OA\MediaType(
     *       mediaType="multipart/form-data",
     *       @OA\Schema(ref="#/components/schemas/EmployeePresenceUpload")
     *     )
     *  ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="upload attachment presence",
     *   )
     * )
     */
    function uploadAttachment($id,EmployeeApiUploadAttachmentRequest $requst, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->uploadAttachment($requst);
        return $this->sendResponse($data, __('messages.employee.presence.upload'));
    }

    function reportPdf($workunit_id,Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->reports($workunit_id,$request,true);
        $data = $data['data'];
        Log::info($data);
        $workunit = Workunit::whereId($workunit_id)->first();

        $html = "<html><head><title>Laporan Rekapitulasi</title></head><body>";

        $html .= "<h2 align='center' style='margin:6px'>Laporan Rekapitulasi Absensi</h2>";
        $html .= "<h2 align='center' style='margin:6px'>".$workunit->name."</h2>";
        $html .= "<p align='center' style='margin:6px'>Periode ".date('d-m-Y',strtotime($request->date_start))." s/d ".date('d-m-Y',strtotime($request->date_end))."</p>";
        $html .= "<table border=1 cellpaddong=5 cellspacing=0>";
        $html .= "<tr>";
        $html .= "<th style='padding:12px'>Nama</th>";
        $html .= "<th style='padding:12px'>NIP</th>";
        $html .= "<th style='padding:12px'>Golongan</th>";
        $html .= "<th style='padding:12px'>Jabatan</th>";
        $html .= "<th style='padding:12px'>Hadir</th>";
        $html .= "<th style='padding:12px'>Alfa</th>";
        $html .= "<th style='padding:12px'>Cuti</th>";
        $html .= "<th style='padding:12px'>Tugas</th>";
        $html .= "<th style='padding:12px'>Hari Kerja</th>";
        $html .= "<th style='padding:12px'>Kekurangan Waktu (Menit)</th>";
        $html .= "<th style='padding:12px'>Persentase</th>";
        $html .= "</tr>";

        foreach($data as $dt){
            $html .= "<tr>";
            $html .= "<td style='padding:12px'>$dt[name]</td>";
            $html .= "<td style='padding:12px'>$dt[nip]</td>";
            $html .= "<td style='padding:12px'>$dt[group]</td>";
            $html .= "<td style='padding:12px'>$dt[position]</td>";
            $html .= "<td style='padding:12px'>$dt[hadir]</td>";
            $html .= "<td style='padding:12px'>$dt[alfa]</td>";
            $html .= "<td style='padding:12px'>$dt[cuti]</td>";
            $html .= "<td style='padding:12px'>$dt[tugas]</td>";
            $html .= "<td style='padding:12px'>$dt[hari_kerja]</td>";
            $html .= "<td style='padding:12px'>$dt[time_left]</td>";
            $html .= "<td style='padding:12px'>$dt[presentase]</td>";
            $html .= "</tr>";
        }

        $html .= "</table></body></html>";

        $mpdf = new \Mpdf\Mpdf(['orientation' => 'L']);
        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }

    function reportDetailPdf($workunit_id,Request $request, EmployeeApiRepository $EmployeeApiRepository)
    {
        $data = $EmployeeApiRepository->reportDetails($workunit_id,$request,true);
        $workunit = Workunit::whereId($workunit_id)->first();

        $html = "<html><head><title>Laporan Detail</title></head><body>";

        $html .= "<h2 align='center' style='margin:6px'>Laporan Detail Absensi</h2>";
        $html .= "<h2 align='center' style='margin:6px'>".$workunit->name."</h2>";
        $html .= "<p align='center' style='margin:6px'>Periode ".date('d-m-Y',strtotime($request->date_start))." s/d ".date('d-m-Y',strtotime($request->date_end))."</p>";
        $html .= "<table border=1 cellpaddong=5 cellspacing=0>";
        $html .= "<tr>";
        $html .= "<th style='padding:12px;text-align:center' rowspan='2'>Tanggal</th>";
        $html .= "<th style='padding:12px;text-align:center' rowspan='2'>Nama</th>";
        $html .= "<th style='padding:12px;text-align:center' rowspan='2'>NIP</th>";
        $html .= "<th style='padding:12px;text-align:center' rowspan='2'>Pangkat</th>";
        $html .= "<th style='padding:12px;text-align:center' rowspan='2'>Jabatan</th>";
        $html .= "<th style='padding:12px;text-align:center' colspan='4'>Masuk</th>";
        $html .= "<th style='padding:12px;text-align:center' colspan='4'>Pulang</th>";
        $html .= "<th style='padding:12px;text-align:center' colspan='2'>Total</th>";
        $html .= "</tr>";
        $html .= "<tr>";
        $html .= "<th style='padding:12px;text-align:center'>Di Lokasi</th>";
        $html .= "<th style='padding:12px;text-align:center'>Jam</th>";
        $html .= "<th style='padding:12px;text-align:center'>Keterlambatan</th>";
        $html .= "<th style='padding:12px;text-align:center'>%</th>";
        $html .= "<th style='padding:12px;text-align:center'>Di Lokasi</th>";
        $html .= "<th style='padding:12px;text-align:center'>Jam</th>";
        $html .= "<th style='padding:12px;text-align:center'>Sebelum Waktu</th>";
        $html .= "<th style='padding:12px;text-align:center'>%</th>";
        $html .= "<th style='padding:12px;text-align:center'>Kekurangan Waktu</th>";
        $html .= "<th style='padding:12px;text-align:center'>Persentase Kekurangan</th>";
        $html .= "</tr>";

        $i = 1;
        foreach($data['data'] as $dt){
            $html .= "<tr>";
            $html .= "<td style='padding:12px;text-align:center'>".date('d-m-Y',strtotime($dt['date']))."</td>";
            $html .= "<td style='padding:12px;text-align:center'>$dt[name]</td>";
            $html .= "<td style='padding:12px;text-align:center'>$dt[nip]</td>";
            $html .= "<td style='padding:12px;text-align:center'>$dt[group]</td>";
            $html .= "<td style='padding:12px;text-align:center'>$dt[position]</td>";
            
            $additional = "";
            foreach($dt['types'] as $type){
                if(in_array(strtolower($type['status']),['masuk','pulang']) || $type['status'] == false)
                {
                    $additional .= "<td style='padding:12px;text-align:center'>";
                    $additional .= "<p style='padding:12px;text-align:center'>".((string)$type['in_location'] === "1" ? "Ya" : "Tidak")."</p>";
                    $additional .= "</td>";
                    $additional .= "<td style='padding:12px;text-align:center'>";
                    $additional .= "<p style='padding:12px;text-align:center'>".$type['time'] ?? "-"."</p>";
                    $additional .= "</td>";
                    $additional .= "<td style='padding:12px;text-align:center'>";
                    $additional .= "<p style='padding:12px;text-align:center'>$type[time_left]</p>";
                    $additional .= "</td>";
                    $additional .= "<td style='padding:12px;text-align:center'>";
                    $additional .= "<p style='padding:12px;text-align:center'>$type[presentase]%</p>";
                    $additional .= "</td>";
                }
                else
                {
                    $additional .= "<td style='padding:12px;text-align:center' colspan='8'>";
                    $additional .= "<p style='padding:12px;text-align:center'>".ucwords($type['status'])."</p>";
                    $additional .= "</td>";
                }
            }

            $html .= $additional;

            $html .= "<td style='padding:12px;text-align:center'>$dt[time_left]</td>";
            $html .= "<td style='padding:12px;text-align:center'>$dt[presentase]%</td>";

            $html .= "</tr>";
            $i++;
        }

        $html .= "</table></body></html>";

        $mpdf = new \Mpdf\Mpdf(['orientation' => 'L']);
        $mpdf->WriteHTML($html);
        $mpdf->Output();
    }
}
