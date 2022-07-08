<?php
namespace App\Repositories\Api\Users;

use App\Models\User;

class Updater
{

    private $id;
    private $input;

    public function prepare($input)
    {
        $this->id = $input['id'];
        $this->input = $input;
        return $this;
    }

    public function execute()
    {
        $input    = $this->input;
        $User = User::whereId($this->id)->first();
        $User->name = $input['name'];
        $User->email = $input['email'];
        $User->role = $input['role'];
        $User->shift_management = $input['shift_management'];
        $User->workunit_id = $input['workunit_id'];

        $User->save();

        return $User;
    }
}