<?php
namespace App\Repositories\Api\Users;

use App\Models\User;
// use App\Repositories\Api\Employees\EmployeeApiRepository;

class UserApiRepository
{

    private $creator;
    private $updater;
    private $deleter;
    // private $EmployeeApiRepository;

    function __construct(
        // EmployeeApiRepository $EmployeeApiRepository, 
        Creator $creator, Updater $updater, Deleter $deleter)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
        // $this->EmployeeApiRepository = $EmployeeApiRepository;
    }

    public function lists($input)
    {

        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'asc';
        $perPage = $input['per_page'] ?? 10;

        $users = User::with(['employee','workunit','employee.workunit']);

        if(isset($input['keyword']) && !empty($input['keyword']))
        {
            $users = $users->where('name','LIKE','%'.$input['keyword'].'%')
                            ->orwhere('email','LIKE','%'.$input['keyword'].'%')
                            ->orwhere('role','LIKE','%'.$input['keyword'].'%');
        }

        if(isset($input['user'])){
            $users = $users->where('role','!=','pegawai')->where('role','!=','superuser');
        }
        

        return $users->orderBy($sortBy, $orderBy)->paginate($perPage);
    }

    public function findOne($id)
    {
        return User::with(['employee','workunit','employee.workunit'])->whereId($id)->first();
    }

    public function create($input)
    {
        $create = $this->creator
                ->prepare($input)
                ->execute();

        // if(isset($input['employee_id'])){
        //     $this->EmployeeApiRepository->update([
        //         'id' => $input['employee_id'],
        //         'user_id' => $create->id
        //     ]);
        // }


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

    public function changePassword($input)
    {
        $user = User::find($input['id'])->update([
            'password'=>\bcrypt($input['password'])
        ]); 

        return $user;
    }

}