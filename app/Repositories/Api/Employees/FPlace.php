<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;

class FPlace
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
        $Employee->update([
            'is_free_place'=>!$Employee->is_free_place,
        ]);
        return $Employee;
    }
}