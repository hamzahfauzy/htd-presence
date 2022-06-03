<?php

namespace App\Http;

use App\Traits\OptimizationTool;

class ResponseUtil
{
    use OptimizationTool;
    /**
     * @param string $message
     * @param mixed  $data
     *
     * @return array
     */
    public static function makeResponse($message, $data)
    {
        $return = [
            'success' => true,
            'data'    => $data,
            'message' => $message,
        ];

        $execution_time = OptimizationTool::getExecutionTime();
        $return['time'] = $execution_time;
        return $return;
    }

    /**
     * @param string $message
     * @param array  $data
     *
     * @return array
     */
    public static function makeError($message, array $data = [])
    {
        $res = [
            'success' => false,
            'message' => $message,
        ];

        if (!empty($data)) {
            $res['data'] = $data;
        }

        return $res;
    }
}
