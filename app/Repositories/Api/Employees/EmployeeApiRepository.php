<?php
namespace App\Repositories\Api\Employees;

use Response;
use App\Models\Employee;
use App\Models\Worktime;
use App\Http\ResponseUtil;
use App\Models\WorktimeItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Repositories\Api\Employees\FPlace;
use App\Repositories\Api\Employees\AdderPlace;
use App\Repositories\Api\Employees\DeleterPlace;
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
    
    function __construct(Creator $creator, Updater $updater, Deleter $deleter, AdderWorktime $adderWorktime,DeleterWorktime $deleterWorktime,AdderPlace $adderPlace,DeleterPlace $deleterPlace,FPlace $fPlace)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
        $this->adderWorktime = $adderWorktime;
        $this->deleterWorktime = $deleterWorktime;
        $this->adderPlace = $adderPlace;
        $this->deleterPlace = $deleterPlace;
        $this->fPlace = $fPlace;
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
        

        return $employees->orderBy($sortBy, $orderBy)->paginate($perPage);
    }

    public function findOne($id)
    {
        return Employee::with(['workunit.worktimes','worktimes.items','places','presences','user'])->whereId($id)->first();
    }

    public function reports($workunit_id,$input)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'asc';
        $perPage = $input['per_page'] ?? 10;

        $query = DB::table('employees as e')
            ->leftJoin('workunits as w', 'w.id', 'e.workunit_id')
            ->leftJoin('employee_presence as p', 'p.employee_id', 'e.id'); 
            
        if(isset($input['keyword']) && !empty($input['keyword']))
        {
            $query = $query->where('name','LIKE','%'.$input['keyword'].'%');    
        }

        if(isset($input['date_start']) && isset($input['date_end'])){
            $dateStart = date($input['date_start']);
            $dateEnd = date($input['date_end']);

            $query = $query->whereBetween('p.created_at',[$dateStart,$dateEnd]);
        }

        $hadir = "SUM(CASE WHEN p.type='hadir' THEN 1 ELSE 0 END) as hadir";
        $izin = "SUM(CASE WHEN p.type='izin' THEN 1 ELSE 0 END) as izin";
        $cuti = "SUM(CASE WHEN p.type='cuti' THEN 1 ELSE 0 END) as cuti";
        $sakit = "SUM(CASE WHEN p.type='sakit' THEN 1 ELSE 0 END) as sakit";
        $tugasluar = "SUM(CASE WHEN p.type='tugasluar' THEN 1 ELSE 0 END) as tugasluar";
        $kegiatan = "SUM(CASE WHEN p.type='kegiatan' THEN 1 ELSE 0 END) as kegiatan";
        $alfa = "SUM(CASE WHEN p.type='alfa' THEN 1 ELSE 0 END) as alfa";

        $raw = "e.id, e.name, e.nip, e.group, e.position, $hadir,$izin,$cuti,$sakit,$tugasluar,$kegiatan,$alfa";
        
        $data = $query->selectRaw($raw)->where('w.id',$workunit_id);

        return $data->orderBy($sortBy, $orderBy)->paginate($perPage);
    }

    public function create($input)
    {
        $create = $this->creator
                ->prepare($input)
                ->execute();

        return $this->findOne($create->id);
    }

    public function update($input)
    {
        $update = $this->updater
                ->prepare($input)
                ->execute();

        return $this->findOne($update->id);
    }

    public function delete($id)
    {
        $this->deleter
                ->prepare($id)
                ->execute();
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
        if(
            $input['type'] == 'hadir' && 
            (
                (isset($input['in_location']) && $input['in_location'])
                ||
                $Employee->is_free_place
            )
        )
        {
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
            }
        ])->first();

        return $Employee;
    }

    
    public function detailPresence($input)
    {
        $Employee = Employee::whereId($input['id'])->first();

        $employe_presence = $Employee->presences()->whereId($input['employee_presence_id'])->first();

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