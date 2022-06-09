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
        if($Workunit->place){
            $Workunit->place()->update([
                'lat'=>$input->lat,
                'lng'=>$input->lng,
                'radius'=>$input->radius,
            ]);
        }else{
            $Workunit->place()->create([
                'lat'=>$input->lat,
                'lng'=>$input->lng,
                'radius'=>$input->radius,
            ]);
        }
        return $Workunit;
    }
}