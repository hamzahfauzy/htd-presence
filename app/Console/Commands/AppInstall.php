<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Artisan;

class AppInstall extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:install';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Application installation';

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
        $this->output->progressStart(4);

        // database installation
        $schemaName = env('DB_DATABASE');
        $charset = config("database.connections.mysql.charset",'utf8mb4');
        $collation = config("database.connections.mysql.collation",'utf8mb4_unicode_ci');

        $query = "CREATE DATABASE IF NOT EXISTS $schemaName CHARACTER SET $charset COLLATE $collation;";

        DB::statement($query);
        $this->output->progressAdvance();
        sleep(1);

        // database migration and seed
        Artisan::call("migrate:fresh --seed");
        $this->output->progressAdvance();
        sleep(1);

        // sync data OPD
        Artisan::call("sipakar:sync_opd");
        $this->output->progressAdvance();
        sleep(1);

        // sync data ASN
        Artisan::call("sipakar:sync_asn");
        $this->output->progressAdvance();
        sleep(1);

        $this->output->progressFinish();
        
        return 0;
    }
}
