<?php
namespace App\Repositories\Api\Workunits;

use App\Models\Workunit;

class AdderPlace
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
        $input   = $this->input;
        $Workunit = Workunit::whereId($this->id)->first();
        $Workunit->lat = $input['lat'];
        $Workunit->lng = $input['lng'];
        $Workunit->radius = $input['radius'];
        $Workunit->save();
        
        return $Workunit;
    }
}