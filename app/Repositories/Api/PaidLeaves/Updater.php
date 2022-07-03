<?php
namespace App\Repositories\Api\PaidLeaves;

use App\Models\PaidLeave;

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
        $PaidLeave = PaidLeave::whereId($this->id)->first();
        $PaidLeave->name = $input['name']??$PaidLeave->name;

        $PaidLeave->save();

        return $PaidLeave;
    }
}