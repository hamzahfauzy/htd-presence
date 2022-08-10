<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/reset-password/{token}', function ($token) {
    return view('auth.reset-password', ['token' => $token]);
})->middleware('guest')->name('password.reset');


Route::get('/reset-password-success', function () {
    return view('auth.reset-password-success');
})->middleware('guest')->name('password.reset.success');

Route::get('/reset-password-failed', function () {
    return view('auth.reset-password-failed');
})->middleware('guest')->name('password.reset.failed');

Route::get('/', function () {
    return redirect()->to('/app');
});
