<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;
use App\Repositories\Api\Presences\PresenceApiRepository;
use App\Http\Requests\Api\Presences\PresenceApiCreateRequest;
use App\Http\Requests\Api\Presences\PresenceApiDeleteRequest;
use App\Http\Requests\Api\Presences\PresenceApiDetailRequest;
use App\Http\Requests\Api\Presences\PresenceApiUpdateRequest;

class PresenceApiController extends Controller
{
    /**
     * Retrieve presences list
     *
     * @param PresenceApiRepository $PresenceApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/presences",
     *   summary="Retrieve presence list",
     *   tags={"Presences"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Response(
     *     response=200,
     *     description="presence list",
     *   )
     * )
     */
    function lists(PresenceApiRepository $PresenceApiRepository)
    {
        $data = $PresenceApiRepository->lists();
        
        return $this->sendResponse($data, __('messages.presence.lists'));
    }

    /**
     * Retrieve presences detail
     * 
     * @param int $id
     * @param PresenceApiDetailRequest $request
     * @param PresenceApiRepository $PresenceApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/presences/{id}",
     *   summary="Retrieve presence list",
     *   tags={"Presences"},
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
     *     description="presence detail",
     *   )
     * )
     */
    function detail(PresenceApiDetailRequest $PresenceApiDetailRequest, PresenceApiRepository $PresenceApiRepository)
    {
        $data = $PresenceApiRepository->findOne($PresenceApiDetailRequest->id);
        return $this->sendResponse($data, __('messages.presence.detail'));
    }

    /**
     * Create presences
     *
     * @param PresenceApiCreateRequest $request
     * @param PresenceApiRepository $PresenceApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/presences",
     *   summary="Create presences",
     *   tags={"Presences"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/Presence")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Presence created",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function create(PresenceApiCreateRequest $PresenceApiCreateRequest, PresenceApiRepository $PresenceApiRepository)
    {
        $data = $PresenceApiRepository->create($PresenceApiCreateRequest);
        return $this->sendResponse($data, __('messages.presence.create'));
    }

    /**
     * Update presences
     *
     * @param int $id
     * @param PresenceApiUpdateRequest $request
     * @param PresenceApiRepository $PresenceApiRepository
     *
     * @return Response
     *
     * @OA\Put(
     *   path="/presences/{id}",
     *   summary="Update presences",
     *   tags={"Presences"},
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
     *     @OA\JsonContent(ref="#/components/schemas/Presence")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="Presence updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function update($id, PresenceApiUpdateRequest $PresenceApiUpdateRequest, PresenceApiRepository $PresenceApiRepository)
    {
        $data = $PresenceApiRepository->update($PresenceApiUpdateRequest);
        return $this->sendResponse($data, __('messages.presence.update'));
    }

    /**
     * Delete presences
     *
     * @param int $id
     * @param PresenceApiDeleteRequest $request
     * @param PresenceApiRepository $PresenceApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/presences/{id}",
     *   summary="Delete presences",
     *   tags={"Presences"},
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
     *     description="Presence deleted",
     *   )
     * )
     */
    function destroy($id, PresenceApiDeleteRequest $PresenceApiDeleteRequest, PresenceApiRepository $PresenceApiRepository)
    {
        $data = $PresenceApiRepository->delete($PresenceApiDeleteRequest->id);
        return $this->sendResponse([], __('messages.presence.delete'));
    }
}
