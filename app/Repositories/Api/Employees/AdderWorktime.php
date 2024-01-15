<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;

class AdderWorktime
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
        $Employee->worktimes()->attach([$input->worktime_id=>['date_start'=>$input->date_start,'date_end'=>$input->date_end,]]);
        return $Employee;
    }
}