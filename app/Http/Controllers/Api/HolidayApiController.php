<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Holidays\HolidayApiRepository;
use App\Http\Requests\Api\Holidays\HolidayApiCreateRequest;
use App\Http\Requests\Api\Holidays\HolidayApiDeleteRequest;
use App\Http\Requests\Api\Holidays\HolidayApiDetailRequest;
use App\Http\Requests\Api\Holidays\HolidayApiUpdateRequest;

class HolidayApiController extends Controller
{
    /**
     * Retrieve holidays list
     *
     * @param HolidayApiRepository $HolidayApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/holidays",
     *   summary="Retrieve holiday list",
     *   tags={"Holidays"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Response(
     *     response=200,
     *     description="holiday list",
     *   )
     * )
     */
    function lists(HolidayApiRepository $HolidayApiRepository)
    {
        $data = $HolidayApiRepository->lists();
        
        return $this->sendResponse($data, __('messages.holiday.lists'));
    }

    /**
     * Retrieve holidays detail
     * 
     * @param int $id
     * @param HolidayApiDetailRequest $request
     * @param HolidayApiRepository $HolidayApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/holidays/{id}",
     *   summary="Retrieve holiday list",
     *   tags={"Holidays"},
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
     *     description="holiday detail",
     *   )
     * )
     */
    function detail(HolidayApiDetailRequest $HolidayApiDetailRequest, HolidayApiRepository $HolidayApiRepository)
    {
        $data = $HolidayApiRepository->findOne($HolidayApiDetailRequest->id);
        return $this->sendResponse($data, __('messages.holiday.detail'));
    }

    /**
     * Create holidays
     *
     * @param HolidayApiCreateRequest $request
     * @param HolidayApiRepository $HolidayApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/holidays",
     *   summary="Create holidays",
     *   tags={"Holidays"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/Holiday")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="holiday created",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function create(HolidayApiCreateRequest $HolidayApiCreateRequest, HolidayApiRepository $HolidayApiRepository)
    {
        $data = $HolidayApiRepository->create($HolidayApiCreateRequest);
        return $this->sendResponse($data, __('messages.holiday.create'));
    }

    /**
     * Update holidays
     *
     * @param int $id
     * @param HolidayApiUpdateRequest $request
     * @param HolidayApiRepository $HolidayApiRepository
     *
     * @return Response
     *
     * @OA\Put(
     *   path="/holidays/{id}",
     *   summary="Update holidays",
     *   tags={"Holidays"},
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
     *     @OA\JsonContent(ref="#/components/schemas/Holiday")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="holiday updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function update($id, HolidayApiUpdateRequest $HolidayApiUpdateRequest, HolidayApiRepository $HolidayApiRepository)
    {
        $data = $HolidayApiRepository->update($HolidayApiUpdateRequest);
        return $this->sendResponse($data, __('messages.holiday.update'));
    }

    /**
     * Delete holidays
     *
     * @param int $id
     * @param HolidayApiDeleteRequest $request
     * @param HolidayApiRepository $HolidayApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/holidays/{id}",
     *   summary="Delete holidays",
     *   tags={"Holidays"},
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
     *     description="holiday deleted",
     *   )
     * )
     */
    function destroy($id, HolidayApiDeleteRequest $HolidayApiDeleteRequest, HolidayApiRepository $HolidayApiRepository)
    {
        $data = $HolidayApiRepository->delete($HolidayApiDeleteRequest->id);
        return $this->sendResponse([], __('messages.holiday.delete'));
    }
}
