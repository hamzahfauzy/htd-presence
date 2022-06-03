<?php
namespace App\Repositories\Api\Holidays;

use App\Models\Holiday;

class HolidayApiRepository
{

    private $creator;
    private $updater;
    private $deleter;

    function __construct(Creator $creator, Updater $updater, Deleter $deleter)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
    }

    public function lists()
    {
        return Holiday::get();
    }

    public function findOne($id)
    {
        return Holiday::whereId($id)->first();
    }

    public function create($input)
    {
        $create = $this->creator
                ->prepare($input)
                ->execute();

        return $this->findOne($create->id);
    }

    public function update($input)
    {
        $update = $this->updater
                ->prepare($input)
                ->execute();

        return $this->findOne($update->id);
    }

    public function delete($id)
    {
        $this->deleter
                ->prepare($id)
                ->execute();
    }

}