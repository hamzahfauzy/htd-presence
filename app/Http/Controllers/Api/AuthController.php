<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Repositories\Api\Auth\AuthRepository;
use App\Http\Requests\Api\Auth\AuthLoginRequest;
use App\Http\Controllers\ApiController as Controller;

class AuthController extends Controller
{
    /**
     * Authentication
     *
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/auth/login",
     *   summary="Get authentication",
     *   tags={"Authentication"},
     *
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/AuthLogin")
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="employee list",
     *   )
     * )
     */
    public function login(AuthLoginRequest $request, AuthRepository $AuthRepository)
    {
        $data = $AuthRepository->login($request);
        return $this->sendResponse($data, __('messages.auth.login'));
    }
}
