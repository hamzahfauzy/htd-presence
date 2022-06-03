<?php
namespace App\Repositories\Api\Auth;

use Response;
use App\Http\ResponseUtil;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class AuthRepository
{

    public function login($input)
    {
        $credentials = [
            'email'    => $input['email'],
            'password' => $input['password']
        ];

        $login = Auth::attempt($credentials);
        
        if(!$login)
        {
            throw new HttpResponseException(Response::json(ResponseUtil::makeError('Password not valid.'), 400));
        }

        $user = User::where('email', $input['email'])->first();

        $token = $user->createToken('auth_token')->accessToken;

        return $token;
    }

}