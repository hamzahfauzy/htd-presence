<?php
namespace App\Repositories\Api\Workunits;

use App\Models\Workunit;

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
        $input   = $this->input;
        $Workunit = Workunit::whereId($this->id)->first();
        $Workunit->name = $input['name'];
        $Workunit->lat  = $input['lat']??$Workunit->lat;
        $Workunit->lng  = $input['lng']??$Workunit->lng;
        $Workunit->radius  = $input['radius']??$Workunit->radius;
        $Workunit->parent_id = $input['parent_id']??$Workunit->parent_id;

        $Workunit->save();

        return $Workunit;
    }
}