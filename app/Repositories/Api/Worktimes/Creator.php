<?php
namespace App\Repositories\Api\Worktimes;

use App\Models\Worktime;

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
        $Worktime = new Worktime;
        $Worktime->name = $input['name'];

        $Worktime->save();

        return $Worktime;
    }
}