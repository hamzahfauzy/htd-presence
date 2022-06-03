<?php
namespace App\Repositories\Api\WorktimeItems;

use App\Models\WorktimeItem;

class Updater
{

    private $id;
    private $input;

    public function prepare($input)
    {
        $this->id = $input['item_id'];
        $this->input = $input;
        return $this;
    }

    public function execute()
    {
        $input    = $this->input;
        $WorktimeItem = WorktimeItem::whereId($this->id)->first();
        $WorktimeItem->worktime_id = $input['worktime_id'];
        $WorktimeItem->presence_id = $input['presence_id'];
        $WorktimeItem->time = $input['time'];
        $WorktimeItem->day = $input['day'];

        $WorktimeItem->save();

        return $WorktimeItem;
    }
}