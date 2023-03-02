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
        $worktimeItems['masuk'] = 0;
        $worktimeItems['pulang'] = 0;
        $absen_lainnya = 0;
        $total = 0;
        foreach($employeePresences as $presence)
        {
            $key = "";
            if(empty($presence->name))
            {
                $key = $presence->type;
            }
            else
            {
                $key = $presence->name;
            }

            $key = strtolower($key);

            if(!isset($worktimeItems[$key]))
            {
                $worktimeItems[$key] = 0;
            }

            if(!in_array($key, ['masuk','pulang']))
            {
                $absen_lainnya += $presence->TOTAL;
            }

            $worktimeItems[$key] += $presence->TOTAL;
        }

        $worktimeItems = array_merge([
            'total masuk' => $worktimeItems['masuk'] + $absen_lainnya,
            'total pulang' => $worktimeItems['pulang'] ? $worktimeItems['pulang'] + $absen_lainnya : 0,
        ], $worktimeItems);

        $worktimeItems = array_map(function($name, $count){
            return ['name' => ucwords($name), 'counter' => $count];
        }, array_keys($worktimeItems), $worktimeItems);

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
