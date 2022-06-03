<?php
namespace App\Repositories\Api\WorktimeItems;

use App\Models\WorktimeItem;

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
        $WorktimeItem = new WorktimeItem;
        $WorktimeItem->worktime_id = $input['worktime_id'];
        $WorktimeItem->presence_id = $input['presence_id'];
        $WorktimeItem->time = $input['time'];
        $WorktimeItem->day = $input['day'];

        $WorktimeItem->save();

        return $WorktimeItem;
    }
}