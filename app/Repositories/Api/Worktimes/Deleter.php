<?php
namespace App\Repositories\Api\Worktimes;

use App\Models\Worktime;

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
        $Worktime = Worktime::whereId($this->id)->first();

        $Worktime->delete();
    }
}