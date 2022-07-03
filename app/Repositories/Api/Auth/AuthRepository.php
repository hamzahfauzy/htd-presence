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

        if($user->device_number != null && $user->device_number != $input['device_number']){
            throw new HttpResponseException(Response::json(ResponseUtil::makeError('Device number not valid.'), 400));
        }

        $user->device_number = $input['device_number'];
        $user->save();

        $token = $user->createToken('auth_token')->plainTextToken;

        if(!in_array($user->role,['superuser','adminsistem']))
        {
            $workunit = $user->employee->workunit;
            $user->radius = $workunit->radius;
            $user->employee_id = $user->employee->id;
            if(!empty($user->employee->places) && count($user->employee->places))
                $user->places = $user->employee->places;
            else
                $user->places = [
                    [
                        "lat" => $workunit->lat,
                        "lng" => $workunit->lng,
                    ]
                ];

            unset($user->employee);
        }

        return [
            'user' => $user,
            'token' => 'Bearer ' . $token
        ];
    }

}