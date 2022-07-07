<?php
namespace App\Repositories\Api\Workunits;

use App\Models\Workunit;

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
        $Workunit = new Workunit;
        $Workunit->id   = $input['id']??null;
        $Workunit->name = $input['name'];
        $Workunit->lat  = $input['lat'];
        $Workunit->lng  = $input['lng'];
        $Workunit->radius  = $input['radius']??0;
        $Workunit->parent_id = $input['parent_id']??null;

        $Workunit->save();

        return $Workunit;
    }
}