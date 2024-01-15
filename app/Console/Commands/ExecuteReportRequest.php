<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\ReportRequest;
use App\Models\Workunit;
use App\Repositories\Api\Employees\EmployeeApiRepository;

class ExecuteReportRequest extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'report:exec';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Report Request Parse';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $reportRequest = ReportRequest::where('status','WAITING')->first();
        if($reportRequest)
        {
            $reportRequest->update([
                'status' => 'PROCESSING',
            ]);

            $params = [
                'date_start' => $reportRequest->start_at,
                'date_end'   => $reportRequest->end_at
            ];
            if($reportRequest->report_type == 'rekapitulasi')
            {
                $data = app(EmployeeApiRepository::class)->reports($reportRequest->workunit_id, $params);
            }
            else
            {
                $data = app(EmployeeApiRepository::class)->reportDetail($reportRequest->workunit_id, $params);
            }

            $data = $data['data'];

            $workunit = Workunit::whereId($reportRequest->workunit_id)->first();

            $html = "<html><head><title>Laporan Rekapitulasi</title></head><body>";

            $html .= "<h2 align='center' style='margin:6px'>Laporan Rekapitulasi Absensi</h2>";
            $html .= "<h2 align='center' style='margin:6px'>".$workunit->name."</h2>";
            $html .= "<p align='center' style='margin:6px'>Periode ".date('d-m-Y',strtotime($reportRequest->start_at))." s/d ".date('d-m-Y',strtotime($reportRequest->end_at))."</p>";
            $html .= "<table border=1 cellpaddong=5 cellspacing=0>";
            $html .= "<tr>";
            $html .= "<th style='padding:12px'>Nama</th>";
            $html .= "<th style='padding:12px'>NIP</th>";
            $html .= "<th style='padding:12px'>Golongan</th>";
            $html .= "<th style='padding:12px'>Jabatan</th>";
            $html .= "<th style='padding:12px'>Hadir</th>";
            $html .= "<th style='padding:12px'>Alfa</th>";
            $html .= "<th style='padding:12px'>Cuti</th>";
            $html .= "<th style='padding:12px'>Tugas</th>";
            $html .= "<th style='padding:12px'>Hari Kerja</th>";
            $html .= "<th style='padding:12px'>Kekurangan Waktu (Menit)</th>";
            $html .= "<th style='padding:12px'>Persentase</th>";
            $html .= "</tr>";

            foreach($data as $dt){
                $html .= "<tr>";
                $html .= "<td style='padding:12px'>$dt[name]</td>";
                $html .= "<td style='padding:12px'>$dt[nip]</td>";
                $html .= "<td style='padding:12px'>$dt[group]</td>";
                $html .= "<td style='padding:12px'>$dt[position]</td>";
                $html .= "<td style='padding:12px'>$dt[hadir]</td>";
                $html .= "<td style='padding:12px'>$dt[alfa]</td>";
                $html .= "<td style='padding:12px'>$dt[cuti]</td>";
                $html .= "<td style='padding:12px'>$dt[tugas]</td>";
                $html .= "<td style='padding:12px'>$dt[hari_kerja]</td>";
                $html .= "<td style='padding:12px'>$dt[time_left]</td>";
                $html .= "<td style='padding:12px'>$dt[presentase]</td>";
                $html .= "</tr>";
            }

            $html .= "</table></body></html>";

            $filename = "reports/$reportRequest->report_type-$workunit->name-$reportRequest->start_at.pdf";

            $mpdf = new \Mpdf\Mpdf(['orientation' => 'L']);
            $mpdf->WriteHTML($html);

            $mpdf->Output('public/'.$filename,'F');

            $reportRequest->update([
                'status' => 'FINISH',
                'file_url' => url()->to($filename)
            ]);
        }
        return 0;
    }
}
