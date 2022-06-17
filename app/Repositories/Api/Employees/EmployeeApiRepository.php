<?php
namespace App\Repositories\Api\Employees;

use Response;
use App\Models\Employee;
use App\Models\Worktime;
use App\Http\ResponseUtil;
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

    public function presences($input)
    {
        $Employee = Employee::whereId($input['id'])->first();
        $presence_id = null;

        if($input['type'] == 'hadir')
        {
            if($Employee->worktimes && !empty($Employee->worktimes) && count($Employee->worktimes))
            {
                $now = date('Y-m-d');
                $worktime = $Employee->worktimes()->wherePivot('date_start','<=',$now)->wherePivot('date_end','>=',$now)->first();
                $presence_id = $this->check_worktime($worktime);
            }
            else
            {
                if($Employee->workunit->worktimes && !empty($Employee->workunit->worktimes) && count($Employee->workunit->worktimes)){
                    $worktime = $Employee->workunit->worktimes[0];
                }
                else
                {
                    $worktime = Worktime::whereId(1)->first();
                }
                
                $presence_id = $this->check_worktime($worktime);
            }

        }

        $attachment = $input->file('attachment');
        $pic = $input->file('attachment');
        
        $attachment_url = $attachment ? $attachment->store('presences') : null;
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
            'status'=>$input['type'] == 'hadir' ? 'disetujui' : 'diajukan',
            'presence_id'=>$presence_id,
            'workunit_id'=>$Employee->workunit->id,
            'attachment_url'=>$attachment_url,
            'pic_url'=>$pic_url,
            'lat' => $input->lat??null,
            'lng' => $input->lng??null,
        ]);

        return $this->findOne($Employee->id);
    }

    public function listPresence($input)
    {
        $Employee = Employee::whereId($input['id'])->with(
        [
            'presences'=>function($query) use ($input){
                if($input['type']){
                    $query->where('type',$input['type']);
                }
                if($input['status']){
                    $query->where('status',$input['status']);
                }
                if($input['date_from'] && $input['date_to']){
                    $query->whereBetween('created_at',[$input['date_from'],$input['date_to']]);
                }
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
            throw new HttpResponseException(Response::json(ResponseUtil::makeError(__('messages.presence.not-found')), 400));
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

        throw new HttpResponseException(Response::json(ResponseUtil::makeError(__('messages.presence.not-found')), 400));
        return null;
    }
}