<?php
namespace App\Repositories\Api\Users;

use App\Models\User;
use App\Repositories\Api\Employees\EmployeeApiRepository;

class UserApiRepository
{

    private $creator;
    private $updater;
    private $deleter;
    private $EmployeeApiRepository;

    function __construct(EmployeeApiRepository $EmployeeApiRepository, Creator $creator, Updater $updater, Deleter $deleter)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
        $this->EmployeeApiRepository = $EmployeeApiRepository;
    }

    public function lists()
    {
        return User::with('employee')->get();
    }

    public function findOne($id)
    {
        return User::with('employee')->whereId($id)->first();
    }

    public function create($input)
    {
        $create = $this->creator
                ->prepare($input)
                ->execute();

        $this->EmployeeApiRepository->update([
            'id' => $input['employee_id'],
            'user_id' => $create->id
        ]);

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

        $this->EmployeeApiRepository->unlinkUser([
            'user_id' => $id
        ]);
    }

}