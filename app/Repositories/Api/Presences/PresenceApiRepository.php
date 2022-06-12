<?php
namespace App\Repositories\Api\Presences;

use App\Models\Presence;

class PresenceApiRepository
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

    public function lists($input)
    {
        $sortBy = $input['sort_by'] ?? 'id';
        $orderBy = $input['order_by'] ?? 'asc';
        $perPage = $input['per_page'] ?? 10;

        $presences = new Presence;

        if(isset($input['keyword']) && !empty($input['keyword']))
        {
            $presences = $presences->where('name','LIKE','%'.$input['keyword'].'%');
        }
        
        return $presences->orderBy($sortBy, $orderBy)->paginate($perPage);
    }

    public function findOne($id)
    {
        return Presence::whereId($id)->first();
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