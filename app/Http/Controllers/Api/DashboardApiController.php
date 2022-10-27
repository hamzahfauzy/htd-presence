<?php

namespace App\Http\Controllers\Api;

use App\Models\Employee;
use App\Models\Workunit;
use App\Models\WorktimeItem;
use Illuminate\Http\Request;
use App\Models\EmployeePresence;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\ApiController as Controller;

class DashboardApiController extends Controller
{
    function index(Request $request)
    {
        $employees = Employee::where('status',1);
        if($request->workunit_id)
        {
            $employees = $employees->where('workunit_id',$request->workunit_id);
        }
        
        $date = $request->date ?? date('Y-m-d');
        $hari = $this->today(date('D', strtotime($date)));
        $worktimeItems = WorktimeItem::where('worktime_id',1)->where('days','LIKE','%'.$hari.'%')->get();

        foreach($worktimeItems as $worktimeItem)
        {
            $employeePresence = EmployeePresence::where('presence_id',$worktimeItem->id)->where('created_at','LIKE','%'.$date.'%');
    
            if($request->workunit_id)
            {
                $employeePresence = $employeePresence->where('workunit_id',$request->workunit_id);
            }

            $worktimeItem->counter = $employeePresence->count();
        }

        $data = [
            'employees' => $employees->count(),
            'worktimeItems' => $worktimeItems
        ];
        
        return $this->sendResponse($data, __('messages.user.lists'));
    }

    function today($d = null){
        $day = $d == null ? date("D") : $d;
        switch($day){
            case 'Sun':
                $today = "Minggu";
            break;
            case 'Mon':			
                $today = "Senin";
            break;
            case 'Tue':
                $today = "Selasa";
            break;
            case 'Wed':
                $today = "Rabu";
            break;
            case 'Thu':
                $today = "Kamis";
            break;
            case 'Fri':
                $today = "Jumat";
            break;
            case 'Sat':
                $today = "Sabtu";
            break;
            default:
                $today = null;		
            break;
        }
        return $today;
    }
}
