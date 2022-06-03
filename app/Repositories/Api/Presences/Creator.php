<?php
namespace App\Repositories\Api\Presences;

use App\Models\Presence;

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
        $presence = new Presence;
        $presence->name = $input['name'];
        $presence->tolerance_time = $input['tolerance_time'];

        $presence->save();

        return $presence;
    }
}