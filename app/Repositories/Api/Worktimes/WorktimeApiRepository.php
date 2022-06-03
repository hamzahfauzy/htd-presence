<?php
namespace App\Repositories\Api\Worktimes;

use App\Models\Worktime;
use App\Repositories\Api\Worktimes\Assigner;

class WorktimeApiRepository
{

    private $creator;
    private $updater;
    private $deleter;
    private $assigner;

    function __construct(Creator $creator, Updater $updater, Deleter $deleter, Assigner $assigner)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
        $this->assigner = $assigner;
    }

    public function lists()
    {
        return Worktime::with('items.presence')->get();
    }

    public function findOne($id)
    {
        return Worktime::with(['items.presence','workunits'])->whereId($id)->first();
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

    public function assign($input)
    {
       $update =  $this->assigner
                ->prepare($input)
                ->execute();

        return $this->findOne($update->id);
    }

}