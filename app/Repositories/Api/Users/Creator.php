<?php
namespace App\Repositories\Api\Users;

use App\Models\User;

class Creator
{

    private $input;

    public function prepare($input)
    {
        $this->input = $input;
        return $this;
    }

    public function execute()
    {
        $input    = $this->input;
        $User = new User;
        $User->name = $input['name'];
        $User->email = $input['email'];
        $User->role = $input['role'];
        $User->workunit_id = $input['workunit_id'];
        $User->shift_management = $input['shift_management'];
        $User->password = bcrypt($input['password']);

        $User->save();

        return $User;
    }
}