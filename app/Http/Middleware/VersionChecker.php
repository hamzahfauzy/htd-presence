<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
        $versionAllowed = [10];
        if(in_array($headers['X-App-Version'],$versionAllowed))
        {
            return $next($request);
        }

        throw new HttpResponseException(Response::json(ResponseUtil::makeError('Versi Aplikasi sudah tidak di dukung. Harap Update Aplikasi'), 400));
    }
}
