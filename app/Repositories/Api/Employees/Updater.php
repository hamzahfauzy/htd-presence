<?php
namespace App\Repositories\Api\Employees;

use App\Models\Employee;

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
        $Employee = Employee::whereId($this->id)->first();
        $Employee->user_id = isset($input['user_id']) || is_null($input['user_id'])?$input['user_id']:$Employee->user_id;
        $Employee->workunit_id = $input['workunit_id']??$Employee->workunit_id;
        $Employee->name = $input['name']??$Employee->name;
        $Employee->nip = $input['nip']??$Employee->nip;
        $Employee->group  = $input['group']??$Employee->group;
        $Employee->position  = $input['position']??$Employee->position;
        $Employee->head_position  = $input['head_position']??$Employee->head_position;
        $Employee->head_name  = $input['head_name']??$Employee->head_name;
        $Employee->phone  = $input['phone']??$Employee->phone;

        $Employee->save();

        return $Employee;
    }
}