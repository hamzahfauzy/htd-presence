<?php
namespace App\Repositories\Api\Auth;

use Response;
use App\Http\ResponseUtil;
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

        // sampai di sini login sukses
        // tinggal cek apakah device number dan user nya valid

        $user = User::where('email', $input['email'])->first();

        if($user->role == "pegawai"){
            // get user by device
            $userByDevice = User::where('device_number',$input['device_number'])->first();

            // compare user by device with user by email
            if($userByDevice)
            {
                if($user->id != $userByDevice->id)
                {
                    throw new HttpResponseException(Response::json(ResponseUtil::makeError('Akun anda sudah terdaftar di perangkat lain.'), 401));
                }
            }

            if($user->device_number != null && $user->device_number != $input['device_number']){
                throw new HttpResponseException(Response::json(ResponseUtil::makeError('Akun anda sudah terdaftar di perangkat lain.'), 401));
            }
    
            if(isset($input['device_number'])){
                $user->device_number = $input['device_number'];
                $user->save();
            }
        }


        $token = $user->createToken('auth_token')->plainTextToken;

        if($user->role == 'pegawai')
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

            // unset($user->employee);
        }

        return [
            'user' => $user,
            'token' => 'Bearer ' . $token
        ];
    }

}