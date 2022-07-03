<?php
namespace App\Repositories\Api\PaidLeaves;

use App\Models\PaidLeave;

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
        $PaidLeave = PaidLeave::whereId($this->id)->first();

        $PaidLeave->delete();
    }
}