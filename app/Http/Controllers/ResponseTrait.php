<?php

namespace App\Http\Controllers;

use App\Http\ResponseUtil;
use Illuminate\Support\Facades\Response;

trait ResponseTrait
{
    public function sendResponse($result, $message, int $code = 200)
    {
        if (!isset($result['export'])) {
            return Response::json(ResponseUtil::makeResponse($message, $result), $code);
        }
        
        return $result['export'];
    }

    public function sendError($error, $code = 404)
    {
        return Response::json(ResponseUtil::makeError($error), $code);
    }
}
