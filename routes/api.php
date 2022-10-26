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
use App\Http\Controllers\Api\DashboardApiController;
use App\Http\Controllers\Api\PaidLeaveApiController;
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
    Route::post('forgot-password',[AuthController::class, 'forgotPassword']);
    Route::post('reset-password', [AuthController::class, 'reset'])->name('auth.reset-password');
});

Route::get('times',function(){
    $data = date("H:i:s");
    return response()->json(['data'=>$data],200);
});

Route::get('employees/report-pdf/{workunit_id}',[EmployeeApiController::class,'reportPdf']);
Route::get('employees/report-detail-pdf/{workunit_id}',[EmployeeApiController::class,'reportDetailPdf']);

Route::prefix('dashboards')->group(function(){
    Route::get('index',[DashboardApiController::class,'index']);
});

Route::middleware('auth:sanctum')->group(function(){

    Route::post('auth/change-password',[AuthController::class, 'changePassword']);
    Route::post('auth/change-email',[AuthController::class, 'changeEmail']);

    Route::get('user', function(Request $request){
        $user = $request->user();
        $user->employee;
        return $user;
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
        
        Route::get('{id}/items',[WorktimeItemApiController::class,'lists']);
        Route::post('{id}/items',[WorktimeItemApiController::class,'create']);
        Route::put('{id}/items/{item_id}',[WorktimeItemApiController::class,'update']);
        Route::delete('{id}/items/{item_id}',[WorktimeItemApiController::class,'destroy']);

        Route::post('{id}/workunit',[WorktimeApiController::class,'assign']);
    });
    
    Route::prefix('workunits')->group(function(){
        Route::get('/',[WorkunitApiController::class,'lists']);
        Route::get('presences',[WorkunitApiController::class,'presences']);
        Route::get('{id}',[WorkunitApiController::class,'detail']);
        Route::get('{id}/presences',[WorkunitApiController::class,'presenceList']);
        Route::post('/',[WorkunitApiController::class,'create']);
        Route::put('{id}',[WorkunitApiController::class,'update']);
        Route::delete('{id}',[WorkunitApiController::class,'destroy']);

        Route::patch('{id}/worktime',[WorkunitApiController::class,'assign']);
        Route::delete('{id}/worktime',[WorkunitApiController::class,'deleteWorktime']);
        Route::patch('{id}/place',[WorkunitApiController::class,'addPlace']);
    });
    
    Route::prefix('employees')->group(function(){
        Route::get('/',[EmployeeApiController::class,'lists']);
        Route::post('/',[EmployeeApiController::class,'create']);
        Route::put('{id}',[EmployeeApiController::class,'update']);
        Route::delete('{id}',[EmployeeApiController::class,'destroy']);
        Route::get('reports/{workunit_id}',[EmployeeApiController::class,'reports']);
        Route::get('report-details/{workunit_id}',[EmployeeApiController::class,'reportDetails']);
        Route::get('detail-by-nip/{nip}',[EmployeeApiController::class,'detailByNip']);
        Route::get('{id}',[EmployeeApiController::class,'detail']);
        Route::post('{id}/worktime',[EmployeeApiController::class,'addWorktime']);
        Route::delete('{id}/worktime',[EmployeeApiController::class,'deleteWorktime']);
        Route::post('{id}/place',[EmployeeApiController::class,'addPlace']);
        Route::delete('{id}/place',[EmployeeApiController::class,'deletePlace']);
        Route::patch('{id}/place',[EmployeeApiController::class,'freePlace']);
        Route::patch('{id}/android-user',[EmployeeApiController::class,'androidUser']);
        Route::post('{id}/reset-device',[EmployeeApiController::class,'resetDevice']);
        Route::post('{id}/reset-password',[EmployeeApiController::class,'resetPassword']);
        Route::post('{id}/presences',[EmployeeApiController::class,'presences']);
        Route::get('{id}/presences/check_if_exists/{worktime_item_id}',[EmployeeApiController::class,'checkIfExists']);
        Route::post('{id}/presences/{employee_presence_id}/upload-attachment',[EmployeeApiController::class,'uploadAttachment']);
        Route::get('{id}/presences/{employee_presence_id}',[EmployeeApiController::class,'detailPresence']);
        Route::get('{id}/presences',[EmployeeApiController::class,'listPresence']);
        Route::get('{id}/paid-leaves',[EmployeeApiController::class,'listPaidLeave']);
        Route::patch('{id}/presences/{employee_presence_id}',[EmployeeApiController::class,'updatePresence']);
    });

    Route::prefix('users')->group(function(){
        Route::get('/',[UserApiController::class,'lists']);
        Route::post('/',[UserApiController::class,'create']);
        Route::get('{id}',[UserApiController::class,'detail']);
        Route::put('{id}',[UserApiController::class,'update']);
        Route::delete('{id}',[UserApiController::class,'destroy']);
        Route::post('{id}/change-password',[UserApiController::class,'changePassword']);
    });
    
    Route::prefix('paid_leaves')->group(function(){
        Route::get('/',[PaidLeaveApiController::class,'lists']);
        Route::post('/',[PaidLeaveApiController::class,'create']);
        Route::get('{id}',[PaidLeaveApiController::class,'detail']);
        Route::put('{id}',[PaidLeaveApiController::class,'update']);
        Route::delete('{id}',[PaidLeaveApiController::class,'destroy']);
    });
});