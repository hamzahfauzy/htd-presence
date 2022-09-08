<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;
use App\Models\Workunit;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController as Controller;

class DashboardApiController extends Controller
{
    function index(Request $request)
    {
        $data = [
            'employees' => Employee::where('status',1)->count(),
            'workunits' => Workunit::count(),
        ];
        
        return $this->sendResponse($data, __('messages.user.lists'));
    }
}
