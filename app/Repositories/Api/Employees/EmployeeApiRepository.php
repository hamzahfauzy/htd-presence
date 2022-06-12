<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;
use App\Repositories\Api\Employees\FPlace;
use App\Repositories\Api\Employees\AdderPlace;
use App\Repositories\Api\Employees\DeleterPlace;

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
        $orderBy = $input['order_by'] ?? 'desc';
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
        return Employee::with(['workunit','worktimes.items','place','presences'])->whereId($id)->first();
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

        $attachment = $input->file('attachment');
        
        if($attachment){
            $attachment_url = $attachment->store('presences');

            $Employee->presences()->create([
                'type'=>$input['type'],
                'workunit_id'=>$Employee->workunit->id,
                'attachment_url'=>$attachment_url
            ]);
        }

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
}