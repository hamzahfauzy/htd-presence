<?php
namespace App\Repositories\Api\Holidays;

use App\Models\Holiday;

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
        $Holiday = Holiday::whereId($this->id)->first();

        $Holiday->delete();
    }
}