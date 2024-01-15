<?php
namespace App\Repositories\Api\PaidLeaves;

use App\Models\PaidLeave;

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
        $PaidLeave = new PaidLeave;
        $PaidLeave->name = $input['name'];

        $PaidLeave->save();

        return $PaidLeave;
    }
}