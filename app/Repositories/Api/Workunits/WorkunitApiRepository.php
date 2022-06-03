<?php
namespace App\Repositories\Api\Workunits;

use App\Models\Workunit;

class WorkunitApiRepository
{
    private $creator;
    private $updater;
    private $deleter;
    private $assigner;
    private $deleterWorktime;

    function __construct(Creator $creator, Updater $updater, Deleter $deleter,Assigner $assigner,DeleterWorktime $deleterWorktime)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
        $this->assigner = $assigner;
        $this->deleterWorktime = $deleterWorktime;
    }

    public function lists($input)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'desc';
        $perPage = $input['per_page'] ?? 10;

        if(empty($input))
            return Workunit::orderBy($sortBy, $orderBy)->get();
        return Workunit::orderBy($sortBy, $orderBy)
                ->paginate($perPage);
    }

    public function findOne($id)
    {
        return Workunit::with(['employees','worktimes.items'])->whereId($id)->first();
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
        $update = $this->assigner
                ->prepare($input)
                ->execute();

        return $this->findOne($update->id);
    }

    public function deleteWorktime($input)
    {
        $delete = $this->deleterWorktime
                ->prepare($input)
                ->execute();

        return $this->findOne($delete->id);
    }
    
}