<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;
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
    
    function __construct(Creator $creator, Updater $updater, Deleter $deleter, AdderWorktime $adderWorktime,DeleterWorktime $deleterWorktime,AdderPlace $adderPlace,DeleterPlace $deleterPlace)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
        $this->adderWorktime = $adderWorktime;
        $this->deleterWorktime = $deleterWorktime;
        $this->adderPlace = $adderPlace;
        $this->deleterPlace = $deleterPlace;
    }

    public function lists($input)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'desc';
        $perPage = $input['per_page'] ?? 10;

        return Employee::with('workunit')
                ->orderBy($sortBy, $orderBy)
                ->paginate($perPage);
    }

    public function findOne($id)
    {
        return Employee::with(['workunit','worktimes.items','place'])->whereId($id)->first();
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
}