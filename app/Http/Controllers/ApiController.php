<?php

namespace App\Http\Controllers;

/**
 * @OA\OpenApi(
 *     @OA\Info(
 *         version="1.0.0",
 *         title="Presences API",
 *         description= "Cara login:
 * Login ke endpoint /auth/login dgn email dan password Anda
 * Kopi token dari resultnya
 * Klik button authorize di pojok kanan atas
 * Masukkan token, dengan format::  Bearer <api_key>
 * Klik submit button Authorize"
 *     ),
 *     @OA\Server(
 *         description="LIVE server",
 *         url="/api/",
 *     ),
 * )
 */

class ApiController extends Controller
{
    use ResponseTrait;
}
