<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\SipakarService;
use App\Repositories\Api\Workunits\WorkunitApiRepository;

class SipakarSyncOpd extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sipakar:sync_opd';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Singkronisasi data OPD';
    public $WorkunitApiRepository;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(WorkunitApiRepository $wu)
    {
        parent::__construct();
        $this->WorkunitApiRepository = $wu;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $sipakar  = new SipakarService;
        $all_opds = $sipakar->getAllOpd();
        foreach($all_opds as $opd)
        {
            if($this->WorkunitApiRepository->findOne($opd->id))
            {
                $this->WorkunitApiRepository->update([
                    'id' => $opd->id,
                    'name' => $opd->opd
                ]);
            }
            else
            {
                $this->WorkunitApiRepository->create([
                    'id' => $opd->id,
                    'name' => $opd->opd,
                    'lat'  => 0,
                    'lng'  => 0,
                    'radius'  => 100,
                ]);

                $this->WorkunitApiRepository->assign([
                    'id' => $opd->id,
                    'worktime_id' => 1
                ]);
            }
        }
    }
}
