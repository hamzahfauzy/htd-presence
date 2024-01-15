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
        
        $employeesCount = $employees->count();
        $date = $request->date ?? date('Y-m-d');
        $employeePresences = DB::select("SELECT COUNT(*) as TOTAL, employee_presence.presence_id, employee_presence.status,type, IF(presence_id IS NULL, NULL, (SELECT worktime_items.name FROM worktime_items WHERE worktime_items.id = employee_presence.presence_id)) as name FROM employee_presence WHERE employee_presence.created_at LIKE '%$date%' GROUP BY presence_id, type");
        $worktimeItems = [];
        $absen_lainnya = [
            'diajukan' => 0,
            'disetujui' => 0,
            'ditolak' => 0,
        ];
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

            $key = strtolower($key .' '. $presence->status);

            if(!isset($worktimeItems[$key]))
            {
                $worktimeItems[$key] = 0;
            }

            if(!in_array($key, ['masuk disetujui','pulang disetujui','masuk diajukan','pulang diajukan','masuk ditolak','pulang ditolak']))
            {
                $absen_lainnya[$presence->status] += $presence->TOTAL;
            }

            $worktimeItems[$key] += $presence->TOTAL;
        }

        $total_masuk = isset($worktimeItems['masuk disetujui']) && isset($absen_lainnya['disetujui']) ? $worktimeItems['masuk disetujui'] + $absen_lainnya['disetujui'] : 0;
        $total_pulang = isset($worktimeItems['pulang disetujui']) && isset($absen_lainnya['disetujui']) ? $worktimeItems['pulang disetujui'] + $absen_lainnya['disetujui'] : 0;

        $worktimeItems = array_merge([
            'total masuk' => $total_masuk . " (".number_format($total_masuk ? $total_masuk/$employeesCount*100 : 0)."%)",
            'total pulang' => $total_pulang . " (".number_format($total_pulang ? $total_pulang/$employeesCount*100 : 0)."%)",
        ], $worktimeItems);

        // unset($worktimeItems['masuk']);
        // unset($worktimeItems['pulang']);

        $worktimeItems = array_map(function($name, $count){
            return ['name' => ucwords($name), 'counter' => $count];
        }, array_keys($worktimeItems), $worktimeItems);

        $data = [
            'employees' => $employeesCount,
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
