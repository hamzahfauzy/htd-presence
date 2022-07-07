<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;

class Deleter
{

    private $id;

    public function prepare($input)
    {
        $this->id = $input['id'];
        return $this;
    }

    public function execute()
    {
        $Employee = Employee::whereId($this->id)->first();

        $Employee->delete();
    }
}