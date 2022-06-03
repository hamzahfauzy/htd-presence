<?php
namespace App\Services;

class SipakarService
{
    private $base_url = 'https://api.sipakar.tanjungbalaikota.go.id/api/v1/';

    function getAllOpd()
    {
        try {
            //code...
            $data = file_get_contents($this->base_url.'opd');
            $data = json_decode($data);
            return $data->total_data ? $data->opd : [];
        } catch (\Throwable $th) {
            return [];
        }
    }

    function getAllAsn()
    {
        try {
            //code...
            $data = file_get_contents($this->base_url.'asn');
            $data = json_decode($data);
            return $data->total_data ? $data->asn : [];
        } catch (\Throwable $th) {
            return [];
        }
    }

    function getAllAsnByOpd($opd_id)
    {
        try {
            //code...
            $data = file_get_contents($this->base_url.'asn?opd='.$opd_id);
            $data = json_decode($data);
            return $data->total_data ? $data->asn : [];
        } catch (\Throwable $th) {
            return [];
        }
    }
}