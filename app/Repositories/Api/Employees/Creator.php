<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;

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
        $Employee = new Employee;
        $Employee->id   = $input['id']??null;
        $Employee->user_id = $input['user_id']??null;
        $Employee->workunit_id = $input['workunit_id'];
        $Employee->name = $input['name'];
        $Employee->nip = $input['nip'];
        $Employee->group  = $input['group']??null;
        $Employee->position  = $input['position']??null;
        $Employee->head_position  = $input['head_position']??null;
        $Employee->head_name  = $input['head_name']??null;
        $Employee->phone  = $input['phone']??null;

        $Employee->save();

        return $Employee;
    }
}