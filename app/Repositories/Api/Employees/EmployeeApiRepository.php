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

    function today(){
        $day = date("D");
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

        $data = Employee::whereHas('presences', function($query) use ($workunit_id, $input){
            $query->where('workunit_id',$workunit_id);

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
        })->withCount([
            'presences AS izin' => function ($query) {
                $query->select(DB::raw("COUNT(*) as izin"))->where('type', 'izin');
            },
            'presences AS hadir' => function ($query) {
                $query->select(DB::raw("COUNT(*) as hadir"))->where('type', 'hadir');
            },
            'presences AS cuti' => function ($query) {
                $cuti = PaidLeave::get()->pluck('name');
                $query->select(DB::raw("COUNT(*) as cuti"))->whereIn('type', $cuti);
            },
            'presences AS sakit' => function ($query) {
                $query->select(DB::raw("COUNT(*) as sakit"))->where('type', 'sakit');
            },
            'presences AS tugasluar' => function ($query) {
                $query->select(DB::raw("COUNT(*) as tugasluar"))->where('type', 'tugasluar');
            },
            'presences AS kegiatan' => function ($query) {
                $query->select(DB::raw("COUNT(*) as kegiatan"))->where('type', 'kegiatan');
            },
            'presences AS alfa' => function ($query) {
                $query->select(DB::raw("COUNT(*) as alfa"))->where('type', 'alfa');
            },
        ])->with('presences');

        if(isset($input['keyword']) && !empty($input['keyword']))
        {
            $data = $data->where('name','LIKE','%'.$input['keyword'].'%');    
        }

        $data = $data->orderBy($sortBy, $orderBy);

        $data = $type ? $data->get() : $data->paginate($perPage);

        $data->transform(function($p) use($input){
            $presentase = 0;
            $times = 0;
            foreach($p->presences as $presence){
                if(!$presence->worktime_item){
                    continue;
                }                

                $on_time_start = strtotime($presence->worktime_item->on_time_start);
                $on_time_end = strtotime($presence->worktime_item->on_time_end);
                $presence_time = strtotime(date('H:i',strtotime($presence->created_at)));

                if($presence_time >= $on_time_start && $presence_time <= $on_time_end)
                {
                    // on time
                    Log::info($presence->worktime_item->name . ' On Time');
                    continue;
                }

                // $on_time_end = strtotime(date('H:i:s', $on_time_end));
                // $act = strtotime($presence->created_at);
                // $act = strtotime(date('H:i:s', $act));

                $time_left = 0;
                // terlalu cepat
                if($presence_time < $on_time_start)
                {
                    $time_left = ($on_time_start-$presence_time)/60;
                    Log::info($presence->worktime_item->name . ' Cepat ' . $time_left);
                }
                
                // terlalu lambat
                if($presence_time > $on_time_end)
                {
                    $time_left = ($presence_time-$on_time_end)/60;
                    Log::info($presence->worktime_item->name . ' Lambat ' . $time_left);
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

            $dates = $p->presences->pluck('created_at');

            $formattedDates = $dates->map(function ($date) {
                return $date->format('Y-m-d');
            })->toArray();

            $start = new DateTime($input['date_start']);
            $end = new DateTime($input['date_end']);
            $oneday = new DateInterval("P1D");

            $days = array();
            $not_check_in = 0;
            $not_check_out = 0;

            foreach(new DatePeriod($start, $oneday, $end->add($oneday)) as $day) {
                $day_num = $day->format("N");
                if($day_num < 6 && $day_num > 0) {
                    if(!in_array($day->format('Y-m-d'),$formattedDates))
                    {
                        $days[] = $day->format("Y-m-d");
                    }
                    else
                    {
                        $absen = $p->presences()->where('created_at','LIKE','%'.$day->format("Y-m-d").'%');
                        $jumlah = $absen->count();
                        Log::info('Jumlah '.$jumlah);
                        if($jumlah < 2)
                        {
                            $absen = $absen->first();
                            if($absen->worktime_item->id == 1)
                            {
                                Log::info('Gak Absen Masuk');
                                $not_check_in++;
                            }
                            else
                            {
                                Log::info('Gak Absen Pulang');
                                $not_check_out++;
                            }
                        }
                    }
                }
            }

            Log::info('Days Off ' . count($days));

            $p->time_left = ceil($times) + (count($days)*510) + ($not_check_in*270) + ($not_check_out*240);
            $p->presentase = $presentase . '%';

            return $p;
        });

        return $data;
    }

    public function reportDetails($workunit_id,$input,$type = false)
    {

        $presences = WorktimeItem::get();

        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'asc';
        $perPage = ($input['per_page'] ?? 10) * $presences->count();

        $data = EmployeePresence::whereHas(
            'employee', function($q) use ($input){
                if(isset($input['keyword']) && !empty($input['keyword']))
                {
                    $q->where('name','LIKE','%'.$input['keyword'].'%');    
                }
            }
        )->where('workunit_id',$workunit_id);

        if(isset($input['date_start']) && isset($input['date_end'])){
            $dateStart = date($input['date_start']).' 00:00:00';
            $dateEnd = date($input['date_end']).' 23:59:59';

            if($dateStart != $dateEnd)
            {
                $data->whereBetween('created_at',[$dateStart,$dateEnd]);
            }
            else
            {
                $data->where('created_at',$dateStart);
            }
        }

        $data = $data->where('presence_id','!=',null)->with('employee','worktime_item','workunit')->orderBy($sortBy, $orderBy);
        
        $data = $type ? $data->get() : $data->paginate($perPage);
        
        $data = $data->toArray();

        $filtered = [];
        
        foreach ($type ? $data : $data['data'] as $ep) {

            $date = date("Y-m-d",strtotime($ep['created_at']));
            $time = date("H:i:s",strtotime($ep['created_at']));
            $filtered[$ep['employee']['nip']."-".$date]['id'] = $ep['id'];
            $filtered[$ep['employee']['nip']."-".$date]['nip'] = $ep['employee']['nip'];
            $filtered[$ep['employee']['nip']."-".$date]['name'] = $ep['employee']['name'];
            $filtered[$ep['employee']['nip']."-".$date]['workunit'] = $ep['workunit']['name'];
            $filtered[$ep['employee']['nip']."-".$date]['date'] = $date;

            foreach ($presences as $presence) {
                if($ep['presence_id'] == $presence['id']){
                    $filtered[$ep['employee']['nip']."-".$date]['types'][$presence['name']]['type'] = $presence['name'];
                    $filtered[$ep['employee']['nip']."-".$date]['types'][$presence['name']]['attachment_url'] = $ep['attachment_url'];
                    $filtered[$ep['employee']['nip']."-".$date]['types'][$presence['name']]['pic_url'] = $ep['pic_url'];
                    $filtered[$ep['employee']['nip']."-".$date]['types'][$presence['name']]['lat'] = $ep['lat'];
                    $filtered[$ep['employee']['nip']."-".$date]['types'][$presence['name']]['lng'] = $ep['lng'];
                    $filtered[$ep['employee']['nip']."-".$date]['types'][$presence['name']]['time'] = $time;
                    $filtered[$ep['employee']['nip']."-".$date]['types'][$presence['name']]['in_location'] = $ep['in_location'];
                }
            }
        }
        
        $newData = [];

        foreach ($filtered as $f) {
            $f['types'] = array_values($f['types']);
            $newData[] = $f;
        }
        $data['data'] = $newData;
        return $data;
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
        $Employee = Employee::whereId($input['id'])->with(
        [
            'presences'=>function($query) use ($input){
                $sortBy = $input['sort_by'] ?? 'id';
                $orderBy = $input['order_by'] ?? 'desc';

                if($input['type']){
                    $query->where('type',$input['type']);
                }
                if($input['status']){
                    $query->where('status',$input['status']);
                }
                if($input['date_from'] && $input['date_to']){
                    $query->whereBetween('created_at',[$input['date_from'],$input['date_to']]);
                }
                $query->orderby($sortBy, $orderBy);
            },
            'presences.worktime_item'
        ])->first();

        return $Employee;
    }

    
    public function detailPresence($input)
    {
        $Employee = Employee::whereId($input['id'])->first();

        $employe_presence = $Employee->presences()->with('worktime_item','workunit')->whereId($input['employee_presence_id'])->first();
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
}