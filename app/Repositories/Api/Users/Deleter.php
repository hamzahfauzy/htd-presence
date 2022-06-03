<?php
namespace App\Repositories\Api\Users;

use App\Models\User;

class Deleter
{

    private $id;

    public function prepare($id)
    {
        $this->id = $id;
        return $this;
    }

    public function execute()
    {
        $User = User::whereId($this->id)->first();

        $User->delete();
    }
}