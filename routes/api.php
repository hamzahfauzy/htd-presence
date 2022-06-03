<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\UserApiController;
use App\Http\Controllers\Api\HolidayApiController;
use App\Http\Controllers\Api\EmployeeApiController;
use App\Http\Controllers\Api\PresenceApiController;
use App\Http\Controllers\Api\WorktimeApiController;
use App\Http\Controllers\Api\WorkunitApiController;
use App\Http\Controllers\Api\WorktimeItemApiController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function(){
    Route::post('login',[AuthController::class, 'login']);
});

Route::middleware('auth:api')->group(function(){

    Route::get('user', function(Request $request){
        return $request->user();
    });
    
    Route::prefix('holidays')->group(function(){
        Route::get('/',[HolidayApiController::class,'lists']);
        Route::post('/',[HolidayApiController::class,'create']);
        Route::get('{id}',[HolidayApiController::class,'detail']);
        Route::put('{id}',[HolidayApiController::class,'update']);
        Route::delete('{id}',[HolidayApiController::class,'destroy']);
    });
    
    Route::prefix('presences')->group(function(){
        Route::get('/',[PresenceApiController::class,'lists']);
        Route::post('/',[PresenceApiController::class,'create']);
        Route::get('{id}',[PresenceApiController::class,'detail']);
        Route::put('{id}',[PresenceApiController::class,'update']);
        Route::delete('{id}',[PresenceApiController::class,'destroy']);
    });
    
    Route::prefix('worktimes')->group(function(){
        Route::get('/',[WorktimeApiController::class,'lists']);
        Route::post('/',[WorktimeApiController::class,'create']);
        Route::get('{id}',[WorktimeApiController::class,'detail']);
        Route::put('{id}',[WorktimeApiController::class,'update']);
        Route::delete('{id}',[WorktimeApiController::class,'destroy']);
        
        Route::post('{id}/items',[WorktimeItemApiController::class,'create']);
        Route::put('{id}/items/{item_id}',[WorktimeItemApiController::class,'update']);
        Route::delete('{id}/items/{item_id}',[WorktimeItemApiController::class,'destroy']);
    });
    
    Route::prefix('workunits')->group(function(){
        Route::get('/',[WorkunitApiController::class,'lists']);
        Route::get('{id}',[WorkunitApiController::class,'detail']);
    });
    
    Route::prefix('employees')->group(function(){
        Route::get('/',[EmployeeApiController::class,'lists']);
        Route::get('{id}',[EmployeeApiController::class,'detail']);
    });

    Route::prefix('users')->group(function(){
        Route::get('/',[UserApiController::class,'lists']);
        Route::post('/',[UserApiController::class,'create']);
        Route::get('{id}',[UserApiController::class,'detail']);
        Route::put('{id}',[UserApiController::class,'update']);
        Route::delete('{id}',[UserApiController::class,'destroy']);
    });

});