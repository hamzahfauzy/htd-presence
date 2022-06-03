<?php
namespace App\Repositories\Api\Presences;

use App\Models\Presence;

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
        $presence = Presence::whereId($this->id)->first();
        $presence->name = $input['name'];
        $presence->tolerance_time = $input['tolerance_time'];

        $presence->save();

        return $presence;
    }
}