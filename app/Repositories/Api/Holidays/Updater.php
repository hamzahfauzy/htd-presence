<?php
namespace App\Repositories\Api\Holidays;

use App\Models\Holiday;

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
        $Holiday = Holiday::whereId($this->id)->first();
        $Holiday->name = $input['name'];
        $Holiday->date = $input['date'];

        $Holiday->save();

        return $Holiday;
    }
}