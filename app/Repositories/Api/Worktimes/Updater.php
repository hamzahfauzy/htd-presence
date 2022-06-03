<?php
namespace App\Repositories\Api\Worktimes;

use App\Models\Worktime;

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
        $Worktime = Worktime::whereId($this->id)->first();
        $Worktime->name = $input['name']??$Worktime->name;

        $Worktime->save();

        return $Worktime;
    }
}