<?php
namespace App\Repositories\Api\Workunits;

use App\Models\Workunit;

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
        $Workunit = Workunit::whereId($this->id)->first();

        $Workunit->delete();
    }
}