<?php
namespace App\Repositories\Api\WorktimeItems;

use App\Models\WorktimeItem;

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
        $WorktimeItem = WorktimeItem::whereId($this->id)->first();

        $WorktimeItem->delete();
    }
}