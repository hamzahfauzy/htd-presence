<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;

class DeleterWorktime
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
        $Employee->worktimes()->detach($input->worktime_id);
        return $Employee;
    }
}