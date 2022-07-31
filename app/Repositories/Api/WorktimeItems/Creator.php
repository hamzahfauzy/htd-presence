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
        $WorktimeItem->name = $input['name'];
        $WorktimeItem->start_time = $input['start_time'];
        $WorktimeItem->end_time = $input['end_time'];
        $WorktimeItem->on_time_start = $input['on_time_start'];
        $WorktimeItem->on_time_end = $input['on_time_end'];
        $WorktimeItem->days = $input['days'] ?? '';

        $WorktimeItem->save();

        return $WorktimeItem;
    }
}