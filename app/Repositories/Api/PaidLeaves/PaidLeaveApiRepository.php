<?php
namespace App\Repositories\Api\PaidLeaves;

use App\Models\PaidLeave;

class PaidLeaveApiRepository
{

    private $creator;
    private $updater;
    private $deleter;
    private $assigner;

    function __construct(Creator $creator, Updater $updater, Deleter $deleter)
    {
        $this->creator = $creator;
        $this->updater = $updater;
        $this->deleter = $deleter;
    }

    public function lists($input)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'asc';
        $perPage = $input['per_page'] ?? 10;

        $PaidLeave = new PaidLeave;
        $PaidLeave->orderBy($sortBy, $orderBy);
        if($input['response'] && $input['response'] == 'array')
            return $PaidLeave->get();
        return $PaidLeave->paginate($perPage);
    }

    public function findOne($id)
    {
        return PaidLeave::whereId($id)->first();
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