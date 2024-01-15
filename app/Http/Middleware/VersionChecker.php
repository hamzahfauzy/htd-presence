<?php

namespace App\Http\Middleware;

use Closure;
use App\Http\ResponseUtil;
use Illuminate\Support\Facades\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Exceptions\HttpResponseException;

class VersionChecker
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        $headers = getallheaders();
        $versionAllowed = [12];
        if(
            (isset($headers['X-App-Version']) && in_array($headers['X-App-Version'],$versionAllowed))
            ||
            (in_array($headers['Host'],['localhost:8000','localhost:8001','sisapa.tanjungbalaikota.go.id', '10.0.2.2:8000']))
        )
        {
            return $next($request);
        }

        throw new HttpResponseException(Response::json(ResponseUtil::makeError('Versi Aplikasi sudah tidak di dukung. Harap Update Aplikasi'), 400));
    }
}
