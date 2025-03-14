<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LinkController;
use App\Http\Controllers\LegalController;

Route::get('/', function () {
    $bg_img = asset('imgs/main-bg.png');
    return Inertia::render('Home/Index',compact('bg_img'));
});
// Legal Routes
Route::get('/about',[LegalController::class,'about']);
Route::get('/contact',[LegalController::class,'contact']);
Route::get('/privacy-policy',[LegalController::class,'privacyPolicy']);
Route::get('/developers',[LegalController::class,'DevDetails']);
Route::get('/terms-and-conditions',[LegalController::class, 'TermsAndConditions']);
// page 404
Route::fallback(function () {
    return Inertia::render('NotFound')->toResponse(request())->setStatusCode(404);
});

// links routes
Route::middleware("auth")->group(function() {
    Route::get('/my-links',[LinkController::class,'index'])->name('my-links');
    Route::get('/link/create',[LinkController::class,'create']);
    Route::get('/link/{link}',[LinkController::class,'show'])->name('link.ed');
    Route::post('/link',[LinkController::class,'store']);
    Route::get('/link/{link}/edit',[LinkController::class,'edit']);
    Route::put('/link/{link}',[LinkController::class,'update']);
    Route::delete('/link/{link}',[LinkController::class,'destroy']);
});

require __DIR__.'/auth.php';

