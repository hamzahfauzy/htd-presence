<?php
namespace App\Repositories\Api\Holidays;

use App\Models\Holiday;

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
        $Holiday = new Holiday;
        $Holiday->name = $input['name'];
        $Holiday->date = $input['date'];

        $Holiday->save();

        return $Holiday;
    }
}