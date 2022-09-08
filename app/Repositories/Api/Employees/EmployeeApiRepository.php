<?php
namespace App\Repositories\Api\Employees;

use DateTime;
use Response;
use DatePeriod;
use DateInterval;
use App\Models\Holiday;
use App\Models\Employee;
use App\Models\Presence;
use App\Models\Worktime;
use App\Models\PaidLeave;
use App\Http\ResponseUtil;
use App\Models\WorktimeItem;
use App\Services\Collection;
use App\Models\EmployeePresence;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Repositories\Api\Employees\FPlace;
use App\Repositories\Api\Employees\AdderPlace;
use App\Repositories\Api\Employees\DeleterPlace;
use App\Repositories\Api\Users\UserApiRepository;
use Illuminate\Http\Exceptions\HttpResponseException;

class EmployeeApiRepository
{
    private $creator;
    private $updater;
    private $deleter;   
    private $adderWorktime;
    private $deleterWorktime;
    private $adderPlace;
    private $deleterPlace;
    private $fPlace;
    private $UserApiRepository;
    
    function __construct(
        Creator $creator, 
        Updater $updater, 
        Deleter $deleter, 
        AdderWorktime $adderWorktime,
        DeleterWorktime $deleterWorktime,
        AdderPlace $adderPlace,
        DeleterPlace $deleterPlace,
        FPlace $fPlace, 
        UserApiRepository $UserApiRepository)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
        $this->adderWorktime = $adderWorktime;
        $this->deleterWorktime = $deleterWorktime;
        $this->adderPlace = $adderPlace;
        $this->deleterPlace = $deleterPlace;
        $this->fPlace = $fPlace;
        $this->UserApiRepository = $UserApiRepository;
    }

    public function lists($input)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'asc';
        $perPage = $input['per_page'] ?? 10;
        $employees = Employee::with('workunit');

        if(isset($input['keyword']) && !empty($input['keyword']))
        {
            $employees = $employees->where('name','LIKE','%'.$input['keyword'].'%')
                            ->orwhere('nip','LIKE','%'.$input['keyword'].'%')
                            ->orwhere('position','LIKE','%'.$input['keyword'].'%')
                            ->orwhere('phone','LIKE','%'.$input['keyword'].'%');
        }

        if(isset($input['workunit_id']))
        {
            $employees = $employees->where('workunit_id',$input['workunit_id']);
        }

        $employees = $employees->where('status',1);
        

        return $employees->orderBy($sortBy, $orderBy)->paginate($perPage);
    }

    public function findOne($id)
    {
        $employee = Employee::with([
            'workunit.worktimes.items' => function($q){
                $q->where('start_time','<=',date('H:i'));
                $q->where('end_time','>=',date('H:i'));
            },
            'worktimes.items' => function($q){
                $q->where('start_time','<=',date('H:i'));
                $q->where('end_time','>=',date('H:i'));
            },'places','presences','user'])->whereId($id)->first();

        $active_worktime = null;
        if($employee){
            $employee->is_holiday = Holiday::where('date',date("Y-m-d"))->exists();
            foreach($employee->worktimes as $worktime)
            {
                if(count($worktime->items))
                {
                    $active_worktime = $worktime->items[0];
                    break;
                }
            }
            
            if(empty($active_worktime) && $employee->workunit->worktimes)
            {
                foreach($employee->workunit->worktimes as $worktime)
                {
                    if(count($worktime->items))
                    {
                        $active_worktime = $worktime->items[0];
                        break;
                    }
                }
            }    

            if(empty($active_worktime))
            {
                $worktime = Worktime::whereid(1)->with(['items' => function($q){
                    $q->where('start_time','<=',date('H:i'));
                    $q->where('end_time','>=',date('H:i'));
                }])->first();
                if(count($worktime->items))
                {
                    $active_worktime = $worktime->items[0];
                }

                $employee->active_worktime = $active_worktime;

            }else{
                if($active_worktime->days){
                    $days = explode(",",$active_worktime->days);
    
                    if(!in_array($this->today(),$days)){
                        $employee->active_worktime = null;
                    }else{
                        $employee->active_worktime = $active_worktime;
                    }
                }else{
                    $employee->active_worktime = $active_worktime;
                }
            }
            $employee->email = $employee->user->email;
        }
        return $employee;
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

    public function reports($workunit_id,$input,$type = false)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'asc';
        $perPage = $input['per_page'] ?? 10;

        $data = Employee::where('workunit_id',$workunit_id)->withCount([
            'presences AS cuti' => function ($query) use ($input) {
                $cuti = PaidLeave::get()->pluck('name');
                $query->select(DB::raw("COUNT(*) as cuti"))->whereIn('type', $cuti);

                if(isset($input['date_start']) && isset($input['date_end'])){
                    $dateStart = date($input['date_start']).' 00:00:00';
                    $dateEnd = date($input['date_end']).' 23:59:59';
    
                    if($dateStart != $dateEnd)
                    {
                        $query->whereBetween('created_at',[$dateStart,$dateEnd]);
                    }
                    else
                    {
                        $query->where('created_at',$dateStart);
                    }
                }
            },
        ]);

        if(isset($input['keyword']) && !empty($input['keyword']))
        {
            $data = $data->where('name','LIKE','%'.$input['keyword'].'%');    
        }

        $data = $data->orderBy($sortBy, $orderBy);

        // $data = $type ? $data->get() : $data->paginate($perPage);
        $data = $data->get();

        foreach($data as $p)
        {
            $start  = new DateTime($input['date_start']);
            $end    = new DateTime($input['date_end']);
            $oneday = new DateInterval("P1D");

            // extract($this->presenceCalculation($start,$oneday,$end,$p));
            $calc = $this->presenceCalculationDetail($start,$oneday,$end,$p);

            $time_left = 0;
            $presentase = 0;
            $hadir = 0;
            $alfa = 0;
            $hari_kerja = 0;
            foreach($calc as $c)
            {
                $time_left += $c['time_left'];
                $presentase += $c['presentase']; 
                $hadir += $c['hadir']; 
                $alfa += $c['alfa']; 
                $hari_kerja += $c['hari_kerja']; 
            }

            $p->time_left  = $time_left;
            $p->presentase = $presentase . '%';
            $p->hadir = $hadir;
            $p->alfa  = $alfa;
            $p->hari_kerja = $hari_kerja;
        }

        return [
            'data' => $data,
            'length' => count($data)
        ];
    }

    public function reportDetails($workunit_id,$input,$type = false)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'asc';
        $perPage = $input['per_page'] ?? 10;

        $data = Employee::where('workunit_id',$workunit_id);

        if(isset($input['keyword']) && !empty($input['keyword']))
        {
            $data = $data->where('name','LIKE','%'.$input['keyword'].'%');    
        }

        $data = $data->orderBy($sortBy, $orderBy);

        // $data = $type ? $data->get() : $data->paginate($perPage);
        $data = $data->get();

        $rows = [];

        foreach($data as $p)
        {
            $start = new DateTime($input['date_start']);
            $end = new DateTime($input['date_end']);
            $oneday = new DateInterval("P1D");

            $row = $this->presenceCalculationDetail($start,$oneday,$end,$p);
            $rows = array_merge($rows, $row);
        }

        return [
            'data' => $rows,
            'length' => count($data)
        ];
        // return (new Collection($rows))->paginate($perPage);;
    }

    public function create($input)
    {
        $create = $this->creator
                ->prepare($input)
                ->execute();

        try {
            //code...
            $user = $this->UserApiRepository->create([
                'name'  => $input['name'],
                'email' => $input['email'] ?? $input['nip'],
                'role'  => 'pegawai',
                'workunit_id'=>null,
                'password' => 12345678
            ]);

            if(is_object($input)) // request
            {
                $input->merge(['id'=>$create->id,'user_id'=>$user->id]);
            }
            else
            {
                $input = array_merge($input,['id'=>$create->id,'user_id'=>$user->id]);
            }

            $update = $this->update($input);
            return $update;
        } catch (\Throwable $th) {
            //throw $th;
            Log::info($th);
        }

        return $this->findOne($create->id);
    }

    public function update($input)
    {
        $update = $this->updater
                ->prepare($input)
                ->execute();

        return $this->findOne($update->id);
    }

    public function delete($input)
    {
        $employee = $this->findOne($input['id']);
        $this->deleter
                ->prepare($input)
                ->execute();

        $this->UserApiRepository->delete($employee->user_id);
    }

    public function unlinkUser($id)
    {
        $employee = Employee::where('user_id',$id)->first();
        if($employee)
        {
            $this->update([
                'id' => $employee->id,
                'user_id' => NULL
            ]);
        }
    }

    public function addWorktime($input)
    {
        $update = $this->adderWorktime
                ->prepare($input)
                ->execute();

        return $this->findOne($update->id);
    }

    public function deleteWorktime($input)
    {
        $delete = $this->deleterWorktime
                ->prepare($input)
                ->execute();

        return $this->findOne($delete->id);
    }

    public function addPlace($input)
    {
        $update = $this->adderPlace
                ->prepare($input)
                ->execute();

        return $this->findOne($update->id);
    }

    public function deletePlace($input)
    {
        $delete = $this->deleterPlace
                ->prepare($input)
                ->execute();

        return $this->findOne($delete->id);
    }

    public function freePlace($input)
    {
        $delete = $this->fPlace
                ->prepare($input)
                ->execute();

        return $this->findOne($delete->id);
    }

    public function resetDevice($id)
    {
        $employee = $this->findOne($id);

        $employee->user()->update([
            'device_number'=>null
        ]);

        return $employee; 
    }

    public function checkIfExists($input){
        $Employee = Employee::whereId($input['id'])->first();
        if(
            $Employee->presences()
                ->where('presence_id',$input['worktime_item_id'])
                ->where('created_at','LIKE','%'.date('Y-m-d').'%')
                ->exists()
        )
        {
            return true;
        }else{
            return false;
        }
    }

    public function uploadAttachment($input){
        $Employee = Employee::whereId($input['id'])->first();
        $employee_presence = $Employee->presences()->with('worktime_item','workunit')->whereId($input['employee_presence_id'])->first();
        $attachment = $input->file('attachment');
        if($attachment_url = $attachment->store('attachments')){
            $employee_presence->attachment_url = $attachment_url;
            $employee_presence->save();
            return $employee_presence;
        }else{
            throw new HttpResponseException(Response::json(ResponseUtil::makeError(__('messages.presence.failed-upload')), 400));
        }
    }

    public function presences($input)
    {
        $Employee = Employee::whereId($input['id'])->first();

        if($input['type'] == 'hadir' && isset($input['worktime_item_id']))
        {
            $worktime_item = WorktimeItem::find($input['worktime_item_id']);
            $from = $worktime_item->start_time;
            $to = $worktime_item->end_time;
            $date = date('Y-m-d H:i:s');
            if(!$this->check_in_range($from, $to, $date)){
                throw new HttpResponseException(Response::json(ResponseUtil::makeError(__('messages.presence.not-found')), 400));
            }

            if(
                $Employee->presences()
                    ->where('presence_id',$input['worktime_item_id'])
                    ->where('created_at','LIKE','%'.date('Y-m-d').'%')
                    ->exists()
            )
            {
                throw new HttpResponseException(Response::json(ResponseUtil::makeError(__('messages.presence.once-alert')), 400));
            }
        }

        $attachment = $input->file('attachment');
        $pic = $input->file('pic');
        
        $attachment_url = $attachment ? $attachment->store('attachments') : null;
        $pic_url = $pic ? $pic->store('presences') : null;

        $status = 'diajukan';
        $in_location = false;
        if(
            $input['type'] == 'hadir' && 
            (
                (isset($input['in_location']) && $input['in_location'])
                ||
                $Employee->is_free_place
            )
        )
        {
            $in_location = true;
            $status = 'disetujui';
        }

        $Employee->presences()->create([
            'type'=>$input['type'],
            'status'=>$status,
            'presence_id'=>$input['worktime_item_id']??null,
            'workunit_id'=>$Employee->workunit->id,
            'attachment_url'=>$attachment_url,
            'pic_url'=>$pic_url,
            'lat' => $input->lat??null,
            'lng' => $input->lng??null,
            'in_location' => $in_location,
            'started_at' => $input->started_at??null,
            'finished_at' => $input->finished_at??null,
        ]);

        return $this->findOne($Employee->id);
    }

    public function listPresence($input)
    {
        $Employee = Employee::whereId($input['id'])->first();

        $start = new DateTime($input['date_from']);
        $end = new DateTime($input['date_to']);
        $oneday = new DateInterval("P1D");

        $detail = $this->presenceCalculationDetail($start, $oneday, $end, $Employee);
        
        $presences = [];
        foreach($detail as $d)
        {
            $types = $d['types'];
            foreach($types as $key => $type)
            {
                $types[$key]['type'] = "Hadir";
                if($type['time_left'] == $type['worktime_item']->penalty)
                {
                    $types[$key]['type'] = "Tidak Hadir";
                }
            }
            $presences = array_merge($presences, $types);
        }

        $Employee = $Employee->toArray();
        $Employee['presences'] = $presences;

        return $Employee;
    }

    
    public function detailPresence($input)
    {
        $Employee = Employee::whereId($input['id'])->first();

        $employe_presence = $Employee->presences()->with('worktime_item','workunit')->whereId($input['employee_presence_id'])->first();

        $on_time_start = strtotime($employe_presence->worktime_item->on_time_start);
        $on_time_end   = strtotime($employe_presence->worktime_item->on_time_end);
        $presence_time = strtotime(date('H:i',strtotime($employe_presence->created_at)));

        $time_left = 0;
        $presentase = 0;

        // terlalu cepat
        if($presence_time < $on_time_start)
        {
            $time_left = ($on_time_start-$presence_time)/60;
        }
        
        // terlalu lambat
        if($presence_time > $on_time_end)
        {
            $time_left = ($presence_time-$on_time_end)/60;
        }

        if($time_left > 0){

            if($time_left >= 1 && $time_left < 31)
            {
                $presentase = 0.5;
            }

            if($time_left >= 31 && $time_left < 61)
            {
                $presentase = 1;
            }
            
            if($time_left >= 61 && $time_left < 91)
            {
                $presentase = 1.25;
            }
            
            if($time_left >= 91)
            {
                $presentase = 1.5;
            }
        }
        
        $employe_presence->time_left = $time_left;
        $employe_presence->presentase = $presentase .'%';
        $employe_presence->employee;
        return $employe_presence;
    }

    public function updatePresence($input)
    {
        $Employee = Employee::whereId($input['id'])->first();

        $employe_presence = $Employee->presences()->whereId($input['employee_presence_id'])->first();

        if($employe_presence)
        {
            $employe_presence->update([
                'status'=>$input['status']
            ]);
        }

        return $employe_presence;
    }

    function check_in_range($start_date, $end_date, $date_from_user)
    {
        // Convert to timestamp
        $start_ts = strtotime($start_date);
        $end_ts = strtotime($end_date);
        $user_ts = strtotime($date_from_user);

        // Check that user date is between start & end
        return (($user_ts >= $start_ts) && ($user_ts <= $end_ts));
    }

    function check_worktime($worktime)
    {
        $items = $worktime->items()->where('day', date('N'));
        if(!$items->exists())
        {
            return null;
            // throw new HttpResponseException(Response::json(ResponseUtil::makeError(__('messages.presence.not-found')), 400));
        }

        $items = $items->get();
        foreach($items as $item)
        {
            $from = date('Y-m-d').' '.$item->time.':00';
            $to = date('Y-m-d H:i', strtotime($from.' +'.$item->presence->tolerance_time.' minutes')).':00';
            $date = date('Y-m-d H:i:s');
            if($this->check_in_range($from, $to, $date)){
                return $item->presence_id;
            }
        }

        // throw new HttpResponseException(Response::json(ResponseUtil::makeError(__('messages.presence.not-found')), 400));
        return null;
    }

    public function presenceCalculation($start, $oneday, $end, $p)
    {
        $hari_kerja = 0;
        $hadir = 0;
        $alfa  = 0;
        $presentase = 0;
        $times = 0;

        $dates = $p->presences->pluck('created_at');

        $formattedDates = $dates->map(function ($date) {
            return $date->format('Y-m-d');
        })->toArray();

        foreach(new DatePeriod($start, $oneday, $end->add($oneday)) as $day) {
            $day_num = $day->format("N");
            $holiday = Holiday::where('date',$day->format('Y-m-d'))->exists();
            if($day_num < 6 && $day_num > 0 && !$holiday) {
                $hari_kerja++;

                $worktime_items = count($p->worktimes) ? $p->worktimes[0]->items : null;
                    
                if((empty($worktime_items) || !count($worktime_items)) && $p->workunit->worktimes && count($p->workunit->worktimes))
                {
                    $worktime_items = $p->workunit->worktimes[0]->items;
                }        

                if((empty($worktime_items) || !count($worktime_items)))
                {
                    $worktime_items = Worktime::whereid(1)->first()->items;
                }

                foreach($worktime_items as $index => $worktime_item)
                {
                    if($worktime_item->days){
                        $days = explode(",",$worktime_item->days);
        
                        if(!in_array($this->today($day->format('D')),$days)){
                            unset($worktime_items[$index]);
                        }
                    }
                }
                
                if(!in_array($day->format('Y-m-d'),$formattedDates))
                {
                    $alfa++;
                    foreach($worktime_items as $item)
                    {
                        Log::info('Tidak Absen '.$item->name.' '.$day->format('Y-m-d'));
                        Log::info($item->penalty);
                        $times += $item->penalty;
                    }
                    $presentase += 3;
                }
                else
                {

                    if(empty($worktime_items) || count($worktime_items) == 0) continue;

                    $worktime_items = $worktime_items->toArray();
                    
                    $workime_item_ids = array_map(function($worktime_item){
                        return $worktime_item['id'];
                    }, $worktime_items);

                    $hadir++;
                    $absen = $p->presences()->with('worktime_item')->where('created_at','LIKE','%'.$day->format("Y-m-d").'%');
                    $absences = $absen->get();
                    $absence_ids = array_map(function($absence){
                        return $absence['worktime_item']['id'];
                    }, $absences->toArray());

                    // get the different
                    $diff = array_diff($workime_item_ids, $absence_ids);

                    if($diff)
                    {
                        foreach($diff as $worktime_item_id)
                        {
                            $worktime_item = WorktimeItem::find($worktime_item_id);
                            Log::info('Tidak Absen '.$worktime_item->name.' '.$day->format('Y-m-d'));

                            Log::info($worktime_item->penalty);

                            $times += $worktime_item->penalty;
                            $presentase += 1.5;
                        }
                    }

                    $day_time_left = 0;
                    foreach($absences as $presence)
                    {
                        if(!$presence->worktime_item){
                            continue;
                        }
                        
                        $time_left = 0;
        
                        $on_time_start = strtotime($presence->worktime_item->on_time_start);
                        $on_time_end = strtotime($presence->worktime_item->on_time_end);
                        $presence_time = strtotime(date('H:i',strtotime($presence->created_at)));
        
                        if($presence_time >= $on_time_start && $presence_time <= $on_time_end)
                        {
                            // on time
                            Log::info('On Time '.$day->format('Y-m-d'));
                            continue;
                        }
        
                        // terlalu cepat
                        if($presence_time < $on_time_start)
                        {
                            $time_left = ($on_time_start-$presence_time)/60;
                            Log::info('Cepat '.$time_left.' '.$day->format('Y-m-d'));
                        }
                        
                        // terlalu lambat
                        if($presence_time > $on_time_end)
                        {
                            $time_left = ($presence_time-$on_time_end)/60;
                            Log::info('Lambat '.$time_left.' '.$day->format('Y-m-d'));
                        }
        
                        if($time_left > 0){
                            $times += $time_left;

                            if($time_left >= 1 && $time_left < 31)
                            {
                                $presentase += 0.5;
                            }
        
                            if($time_left >= 31 && $time_left < 61)
                            {
                                $presentase += 1;
                            }
                            
                            if($time_left >= 61 && $time_left < 91)
                            {
                                $presentase += 1.25;
                            }
                            
                            if($time_left >= 91)
                            {
                                $presentase += 1.5;
                            }
                        }
                    }

                }
            }
        }

        return compact(
            'hari_kerja',
            'hadir',
            'alfa',
            'presentase',
            'times'
        );
    }

    public function presenceCalculationDetail($start, $oneday, $end, $p)
    {
        $dates = $p->presences->pluck('created_at');

        $formattedDates = $dates->map(function ($date) {
            return $date->format('Y-m-d');
        })->toArray();

        $rows = [];

        foreach(new DatePeriod($start, $oneday, $end->add($oneday)) as $day) {
            $day_num = $day->format("N");
            $holiday = Holiday::where('date',$day->format('Y-m-d'))->exists();

            $hari_kerja = 0;
            $hadir = 0;
            $alfa  = 0;
            $presentase = 0;
            $times = 0;
            
            if($day_num < 6 && $day_num > 0 && !$holiday) {
                $hari_kerja++;

                $row         = [];
                $row['id']   = $p->id;
                $row['nip']  = $p->nip;
                $row['name'] = $p->name;
                $row['group'] = $p->group;
                $row['position'] = $p->position;
                $row['workunit'] = $p->workunit->name;
                $row['date'] = $day->format('Y-m-d');

                $worktime_items = count($p->worktimes) ? $p->worktimes[0]->items : null;
                    
                if((empty($worktime_items) || !count($worktime_items)) && $p->workunit->worktimes && count($p->workunit->worktimes))
                {
                    $worktime_items = $p->workunit->worktimes[0]->items;
                }        

                if((empty($worktime_items) || !count($worktime_items)))
                {
                    $worktime_items = Worktime::whereid(1)->first()->items;
                }

                foreach($worktime_items as $index => $worktime_item)
                {
                    if($worktime_item->days){
                        $days = explode(",",$worktime_item->days);
        
                        if(!in_array($this->today($day->format('D')),$days)){
                            unset($worktime_items[$index]);
                        }
                    }
                }
                
                if(!in_array($day->format('Y-m-d'),$formattedDates))
                {
                    $alfa++;
                    foreach($worktime_items as $item)
                    {
                        $times += $item->penalty;
                        $row['types'][$item->name]['id'] = 0;
                        $row['types'][$item->name]['type'] = $item->name;
                        $row['types'][$item->name]['attachment_url'] = false;
                        $row['types'][$item->name]['pic_url'] = false;
                        $row['types'][$item->name]['lat'] = false;
                        $row['types'][$item->name]['lng'] = false;
                        $row['types'][$item->name]['status'] = false;
                        $row['types'][$item->name]['time'] = false;
                        $row['types'][$item->name]['in_location'] = false;
                        $row['types'][$item->name]['time_left'] = $item->penalty;
                        $row['types'][$item->name]['presentase'] = 1.5;
                        $row['types'][$item->name]['worktime_item'] = $item;
                        $row['types'][$item->name]['date'] = $day->format('Y-m-d');
                    }
                    $presentase += 3;
                }
                else
                {

                    if(empty($worktime_items) || count($worktime_items) == 0) continue;

                    $worktime_items = $worktime_items->toArray();
                    
                    $workime_item_ids = array_map(function($worktime_item){
                        return $worktime_item['id'];
                    }, $worktime_items);

                    $hadir++;
                    $absen = $p->presences()->with('worktime_item')->where('created_at','LIKE','%'.$day->format("Y-m-d").'%');
                    $absences = $absen->get();
                    $absence_ids = array_map(function($absence){
                        return $absence['worktime_item']['id'];
                    }, $absences->toArray());

                    // get the different
                    $diff = array_diff($workime_item_ids, $absence_ids);

                    if($diff)
                    {
                        foreach($diff as $worktime_item_id)
                        {
                            $worktime_item = WorktimeItem::find($worktime_item_id);
                            Log::info('Tidak Absen '.$worktime_item->name.' '.$day->format('Y-m-d'));

                            Log::info($worktime_item->penalty);

                            $times += $worktime_item->penalty;
                            $presentase += 1.5;

                            $row['types'][$worktime_item->name]['id'] = 0;
                            $row['types'][$worktime_item->name]['type'] = $worktime_item->name;
                            $row['types'][$worktime_item->name]['attachment_url'] = false;
                            $row['types'][$worktime_item->name]['pic_url'] = false;
                            $row['types'][$worktime_item->name]['lat'] = false;
                            $row['types'][$worktime_item->name]['lng'] = false;
                            $row['types'][$worktime_item->name]['status'] = false;
                            $row['types'][$worktime_item->name]['time'] = false;
                            $row['types'][$worktime_item->name]['in_location'] = false;
                            $row['types'][$worktime_item->name]['time_left'] = $worktime_item->penalty;
                            $row['types'][$worktime_item->name]['presentase'] = 1.5;
                            $row['types'][$worktime_item->name]['worktime_item'] = $worktime_item;
                            $row['types'][$worktime_item->name]['date'] = $day->format('Y-m-d');
                        }
                    }

                    $day_time_left = 0;
                    foreach($absences as $presence)
                    {
                        if(!$presence->worktime_item){
                            continue;
                        }
                        
                        $time_left = 0;

                        $row['types'][$presence->worktime_item->name]['id'] = $presence->id;
                        $row['types'][$presence->worktime_item->name]['type'] = $presence->worktime_item->name;
                        $row['types'][$presence->worktime_item->name]['attachment_url'] = $presence->attachment_url;
                        $row['types'][$presence->worktime_item->name]['pic_url'] = $presence->pic_url;
                        $row['types'][$presence->worktime_item->name]['lat'] = $presence->lat;
                        $row['types'][$presence->worktime_item->name]['lng'] = $presence->lng;
                        $row['types'][$presence->worktime_item->name]['time'] = date('H:i',strtotime($presence->created_at));
                        $row['types'][$presence->worktime_item->name]['in_location'] = $presence->in_location;
                        $row['types'][$presence->worktime_item->name]['time_left'] = 0;
                        $row['types'][$presence->worktime_item->name]['presentase'] = 0;
                        $row['types'][$presence->worktime_item->name]['worktime_item'] = $presence->worktime_item;
                        $row['types'][$presence->worktime_item->name]['date'] = $presence->created_at->format('Y-m-d H:i:s');
                        $row['types'][$presence->worktime_item->name]['status'] = $presence->status;
        
                        $on_time_start = strtotime($presence->worktime_item->on_time_start);
                        $on_time_end   = strtotime($presence->worktime_item->on_time_end);
                        $presence_time = strtotime(date('H:i',strtotime($presence->created_at)));
        
                        if($presence_time >= $on_time_start && $presence_time <= $on_time_end)
                        {
                            // on time
                            Log::info('On Time '.$day->format('Y-m-d'));
                            continue;
                        }
        
                        // terlalu cepat
                        if($presence_time < $on_time_start)
                        {
                            $time_left = ($on_time_start-$presence_time)/60;
                            Log::info('Cepat '.$time_left.' '.$day->format('Y-m-d'));
                        }
                        
                        // terlalu lambat
                        if($presence_time > $on_time_end)
                        {
                            $time_left = ($presence_time-$on_time_end)/60;
                            Log::info('Lambat '.$time_left.' '.$day->format('Y-m-d'));
                        }
        
                        if($time_left > 0){
                            $times += $time_left;
                            $row['types'][$presence->worktime_item->name]['time_left'] = $time_left;

                            if($time_left >= 1 && $time_left < 31)
                            {
                                $presentase += 0.5;
                                $row['types'][$presence->worktime_item->name]['presentase'] = 0.5;
                            }
        
                            if($time_left >= 31 && $time_left < 61)
                            {
                                $presentase += 1;
                                $row['types'][$presence->worktime_item->name]['presentase'] = 1;
                            }
                            
                            if($time_left >= 61 && $time_left < 91)
                            {
                                $presentase += 1.25;
                                $row['types'][$presence->worktime_item->name]['presentase'] = 1.25;
                            }
                            
                            if($time_left >= 91)
                            {
                                $presentase += 1.5;
                                $row['types'][$presence->worktime_item->name]['presentase'] = 1.5;
                            }
                        }
                    }   
                }

                $types = $row['types'];

                sort($types);

                $row['types'] = $types;

                $row['time_left'] = ceil($times);
                $row['presentase'] = $presentase;
                $row['hari_kerja'] = $hari_kerja;
                $row['hadir'] = $hadir;
                $row['alfa'] = $alfa;
                $rows[] = $row;
            }

        }

        usort($rows, function($a, $b) {
            return strtotime($b['date']) - strtotime($a['date']);
        });

        return $rows;
    }
}