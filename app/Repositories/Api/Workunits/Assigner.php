<?php
namespace App\Repositories\Api\Workunits;

use App\Models\Workunit;

class Assigner
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
        $input    = $this->input;
        $Workunit = Workunit::whereId($this->id)->first();
        $Workunit->worktimes()->sync($input['worktime_id']);

        return $Workunit;
    }
}