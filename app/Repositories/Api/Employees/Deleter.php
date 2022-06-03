<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;

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
        $Employee = Employee::whereId($this->id)->first();

        $Employee->delete();
    }
}