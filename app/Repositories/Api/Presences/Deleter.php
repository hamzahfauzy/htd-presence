<?php
namespace App\Repositories\Api\Presences;

use App\Models\Presence;

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
        $presence = Presence::whereId($this->id)->first();

        $presence->delete();
    }
}