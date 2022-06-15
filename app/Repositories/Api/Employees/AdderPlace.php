<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;

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
        $Employee = Employee::whereId($this->id)->first();
        $Employee->place()->create([
            'lat'=>$input->lat,
            'lng'=>$input->lng,
        ]);
        return $Employee;
    }
}