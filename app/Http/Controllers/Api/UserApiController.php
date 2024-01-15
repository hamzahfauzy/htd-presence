<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\Api\Users\UserApiRepository;
use App\Http\Controllers\ApiController as Controller;
use App\Http\Requests\Api\Users\UserApiCreateRequest;
use App\Http\Requests\Api\Users\UserApiDeleteRequest;
use App\Http\Requests\Api\Users\UserApiDetailRequest;
use App\Http\Requests\Api\Users\UserApiUpdateRequest;
use App\Http\Requests\Api\Users\UserApiChangePasswordRequest;

class UserApiController extends Controller
{
    /**
     * Retrieve users list
     *
     * @param UserApiRepository $UserApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/users",
     *   summary="Retrieve user list",
     *   tags={"Users"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\Response(
     *     response=200,
     *     description="user list",
     *   )
     * )
     */
    function lists(Request $request,UserApiRepository $UserApiRepository)
    {
        $data = $UserApiRepository->lists($request);
        
        return $this->sendResponse($data, __('messages.user.lists'));
    }

    /**
     * Retrieve users detail
     * 
     * @param int $id
     * @param UserApiDetailRequest $request
     * @param UserApiRepository $UserApiRepository
     *
     * @return Response
     *
     * @OA\Get(
     *   path="/users/{id}",
     *   summary="Retrieve user list",
     *   tags={"Users"},
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
     *     description="User detail",
     *   )
     * )
     */
    function detail(UserApiDetailRequest $UserApiDetailRequest, UserApiRepository $UserApiRepository)
    {
        $data = $UserApiRepository->findOne($UserApiDetailRequest->id);
        return $this->sendResponse($data, __('messages.user.detail'));
    }

    /**
     * Create users
     *
     * @param UserApiCreateRequest $request
     * @param UserApiRepository $UserApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/users",
     *   summary="Create users",
     *   tags={"Users"},
     *   security={{"Bearer":{}}},
     *
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/User")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="User created",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function create(UserApiCreateRequest $UserApiCreateRequest, UserApiRepository $UserApiRepository)
    {
        $data = $UserApiRepository->create($UserApiCreateRequest);
        return $this->sendResponse($data, __('messages.user.create'));
    }

    /**
     * Update users
     *
     * @param int $id
     * @param UserApiUpdateRequest $request
     * @param UserApiRepository $UserApiRepository
     *
     * @return Response
     *
     * @OA\Put(
     *   path="/users/{id}",
     *   summary="Update users",
     *   tags={"Users"},
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
     *     @OA\JsonContent(ref="#/components/schemas/User")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="User updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function update($id, UserApiUpdateRequest $UserApiUpdateRequest, UserApiRepository $UserApiRepository)
    {
        $data = $UserApiRepository->update($UserApiUpdateRequest);
        return $this->sendResponse($data, __('messages.user.update'));
    }

    /**
     * Delete users
     *
     * @param int $id
     * @param UserApiDeleteRequest $request
     * @param UserApiRepository $UserApiRepository
     *
     * @return Response
     *
     * @OA\Delete(
     *   path="/users/{id}",
     *   summary="Delete users",
     *   tags={"Users"},
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
     *     description="User deleted",
     *   )
     * )
     */
    function destroy($id, UserApiDeleteRequest $UserApiDeleteRequest, UserApiRepository $UserApiRepository)
    {
        $data = $UserApiRepository->delete($UserApiDeleteRequest->id);
        return $this->sendResponse([], __('messages.user.delete'));
    }

    /**
     * Change Password users
     *
     * @param int $id
     * @param UserApiChangePasswordRequest $request
     * @param UserApiRepository $UserApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/users/{id}/change-password",
     *   summary="Change Password users",
     *   tags={"Users"},
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
     *     @OA\JsonContent(ref="#/components/schemas/UserPassword")
     *   ),
     *
     *   @OA\Response(
     *     response=200,
     *     description="User updated",
     *   ),
     *   @OA\Response(
     *     response=400,
     *     description="Invalid input",
     *   )
     * )
     */
    function changePassword($id, UserApiChangePasswordRequest $UserApiChangePasswordRequest, UserApiRepository $UserApiRepository)
    {
        $data = $UserApiRepository->changePassword($UserApiChangePasswordRequest);
        return $this->sendResponse($data, __('messages.user.update'));
    }
}
