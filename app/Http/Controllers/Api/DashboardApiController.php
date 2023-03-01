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
        $employeePresences = DB::select("SELECT COUNT(*) as TOTAL, employee_presence.presence_id, type, IF(presence_id IS NULL, NULL, (SELECT worktime_items.name FROM worktime_items WHERE worktime_items.id = employee_presence.presence_id)) as name FROM employee_presence WHERE employee_presence.created_at LIKE '%$date%' GROUP BY presence_id, type");
        $worktimeItems = [];
        foreach($employeePresences as $presence)
        {
            if(empty($presence->name))
            {
                if(!isset($worktimeItems[$presence->type]))
                {
                    $worktimeItems[$presence->type] = 0;
                }
    
                $worktimeItems[$presence->type] += $presence->TOTAL;
            }
            else
            {
                if(!isset($worktimeItems[$presence->name]))
                {
                    $worktimeItems[$presence->name] = 0;
                }
    
                $worktimeItems[$presence->name] += $presence->TOTAL;
            }
        }

        $worktimeItems = array_map(function($name, $count){
            return ['name' => ucwords($name), 'counter' => $count];
        }, array_keys($worktimeItems), $worktimeItems);
        // $worktimeItems = WorktimeItem::where('worktime_id',1)->where('days','LIKE','%'.$hari.'%')->orderBy('name')->get('name');

        // foreach($worktimeItems as $worktimeItem)
        // {
        //     $employeePresence = EmployeePresence::whereHas('worktime_item',function($query) use ($worktimeItem){
        //         $query->where('name',$worktimeItem->name);
        //     })->where('created_at','LIKE','%'.$date.'%');
    
        //     if($request->workunit_id)
        //     {
        //         $employeePresence = $employeePresence->where('workunit_id',$request->workunit_id);
        //     }

        //     $worktimeItem->counter = $employeePresence->count();
        // }

        $data = [
            'employees' => $employees->count(),
            'worktimeItems' => $worktimeItems
        ];
        
        return $this->sendResponse($data, 'dashboard statistic');
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
