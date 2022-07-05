<?php
namespace App\Repositories\Api\Workunits;

use App\Models\Workunit;
use App\Models\EmployeePresence;
use App\Repositories\Api\Workunits\AdderPlace;

class WorkunitApiRepository
{
    private $creator;
    private $updater;
    private $deleter;
    private $assigner;
    private $deleterWorktime;
    private $adderPlace;

    function __construct(Creator $creator, Updater $updater, Deleter $deleter,Assigner $assigner,DeleterWorktime $deleterWorktime,AdderPlace $adderPlace)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
        $this->assigner = $assigner;
        $this->deleterWorktime = $deleterWorktime;
        $this->adderPlace = $adderPlace;
    }

    public function lists($input)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'desc';
        $perPage = $input['per_page'] ?? 10;

        $workunit = Workunit::orderBy($sortBy, $orderBy);
        
        if(isset($input['keyword']) && !empty($input['keyword']))
        {
            $workunit = $workunit->where('name','LIKE','%'.$input['keyword'].'%')
                            ->orwhere('id','LIKE','%'.$input['keyword'].'%');
        }

        if(isset($input['all']))
            return ['data'=>$workunit->get()];

        return $workunit->paginate($perPage);
    }

    public function presenceList($input)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'desc';
        $perPage = $input['per_page'] ?? 10;

        $presences = EmployeePresence::where('workunit_id',$input['id'])
                        ->with(['workunit','employee','presence'])
                        ->orderBy($sortBy, $orderBy);
    
        if(empty($input))
            return $presences->get();
        return $presences->paginate($perPage);
    }

    public function findOne($id)
    {
        return Workunit::with(['employees','worktimes.items','place'])->whereId($id)->first();
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

    public function assign($input)
    {
        $update = $this->assigner
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
    
}