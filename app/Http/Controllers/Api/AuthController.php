<?php

namespace App\Http\Controllers\Api;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;

use Illuminate\Auth\Events\PasswordReset;
use App\Repositories\Api\Auth\AuthRepository;
use Illuminate\Validation\ValidationException;
use App\Http\Requests\Api\Auth\AuthLoginRequest;
use App\Http\Controllers\ApiController as Controller;
use Illuminate\Validation\Rules\Password as RulesPassword;

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

    /**
     * Send Email Forgot Password
     *
     * @param EmployeeApiRepository $EmployeeApiRepository
     *
     * @return Response
     *
     * @OA\Post(
     *   path="/auth/forgot-password",
     *   summary="Forgot Password",
     *   tags={"Authentication"},
     *
     *   @OA\RequestBody(
     *     @OA\JsonContent(ref="#/components/schemas/AuthForgotPassword")
     *   ),
     * 
     *   @OA\Response(
     *     response=200,
     *     description="forgot password",
     *   )
     * )
     */
    public function forgotPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
        ]);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if ($status == Password::RESET_LINK_SENT) {
            return [
                'status' => __($status)
            ];
        }

        throw ValidationException::withMessages([
            'email' => [trans($status)],
        ]);
    }

    public function reset(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => ['required', 'confirmed', RulesPassword::defaults()],
        ]);

        $status = Password::reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user) use ($request) {
                $user->forceFill([
                    'password' => Hash::make($request->password),
                    'remember_token' => Str::random(60),
                ])->save();

                $user->tokens()->delete();

                event(new PasswordReset($user));
            }
        );

        if ($status == Password::PASSWORD_RESET) {
            return redirect()->route('password.reset.success');
        }

        return redirect()->route('password.reset.failed');

    }
}
