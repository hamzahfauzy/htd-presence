<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Services\SipakarService;
use Illuminate\Support\Facades\Log;
use App\Repositories\Api\Employees\EmployeeApiRepository;
use App\Repositories\Api\Workunits\WorkunitApiRepository;

class SipakarSyncAsn extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sipakar:sync_asn';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Singkronisasi data ASN';

    public $EmployeeApiRepository, $WorkunitApiRepository;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(EmployeeApiRepository $employee, WorkunitApiRepository $wu)
    {
        parent::__construct();
        $this->EmployeeApiRepository = $employee;
        $this->WorkunitApiRepository = $wu;
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $sipakar   = new SipakarService;
        $workunits = $this->WorkunitApiRepository->lists();
        foreach($workunits as $opd)
        {
            $all_asns = $sipakar->getAllAsnByOpd($opd->id);
            Log::info('Do id : '.$opd->id);
            foreach($all_asns as $asn)
            {
                if($this->EmployeeApiRepository->findOne($asn->id_pegawai))
                {
                    $this->EmployeeApiRepository->update([
                        "id" => $asn->id_pegawai,
                        "name" => $asn->nama,
                        "nip" => $asn->nip,
                        "workunit_id" => $opd->id,
                        "group" => $asn->gol_ruang,
                        "position" => $asn->jabatan,
                        "head_position" => $asn->atasan,
                        "head_name" => $asn->nama_atasan,
                        "phone" => $asn->ponsel,
                    ]);
                }
                else
                {
                    $this->EmployeeApiRepository->create([
                        "id" => $asn->id_pegawai,
                        "name" => $asn->nama,
                        "nip" => $asn->nip,
                        "workunit_id" => $opd->id,
                        "group" => $asn->gol_ruang,
                        "position" => $asn->jabatan,
                        "head_position" => $asn->atasan,
                        "head_name" => $asn->nama_atasan,
                        "phone" => $asn->ponsel,
                    ]);
                }
            }
        }
    }
}
