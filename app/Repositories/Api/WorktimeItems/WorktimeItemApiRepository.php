<?php
namespace App\Repositories\Api\WorktimeItems;

use App\Models\Worktime;
use App\Models\WorktimeItem;
use App\Repositories\Api\Worktimes\WorktimeApiRepository;

class WorktimeItemApiRepository
{

    private $WorktimeApiRepository;
    private $creator;
    private $updater;
    private $deleter;

    function __construct(WorktimeApiRepository $WorktimeApiRepository, Creator $creator, Updater $updater, Deleter $deleter)
    {
        $this->WorktimeApiRepository = $WorktimeApiRepository;
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
    }

    public function findOne($id)
    {
        return $this->WorktimeApiRepository->findOne($id);
    }

    public function create($input)
    {
        $create = $this->creator
                ->prepare($input)
                ->execute();

        return $this->findOne($create->worktime_id);
    }

    public function update($input)
    {
        $update = $this->updater
                ->prepare($input)
                ->execute();

        return $this->findOne($update->worktime_id);
    }

    public function delete($id)
    {
        $this->deleter
                ->prepare($id)
                ->execute();
    }

}