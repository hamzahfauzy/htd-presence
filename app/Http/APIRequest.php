<?php

namespace App\Http;

use Response;
use App\Http\ResponseUtil;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Log;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class APIRequest extends FormRequest
{
    protected $stopOnFirstFailure = true;

    protected function failedValidation(Validator $validator)
    {
        $errors = $validator->errors()->toArray();
        // Log::error(Arr::flatten($errors));
        $messages = implode(' ', Arr::flatten($errors));

        throw new HttpResponseException(Response::json(ResponseUtil::makeError($messages), 400));
    }
}
