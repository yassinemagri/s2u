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
Route::get('/devdetails',[LegalController::class,'DevDetails']);
Route::get('/terms-and-conditions',[LegalController::class, 'TermsAndConditions']);
// page 404
Route::fallback(function () {
    return Inertia::render('NotFound')->toResponse(request())->setStatusCode(404);
});
// links routes
Route::get('/links',[LinkController::class,'index']);
Route::get('/link/create',[LinkController::class,'create'])->middleware('auth');
Route::get('/link/{link}',[LinkController::class,'show']);
Route::post('/link',[LinkController::class,'store'])->middleware('auth');
Route::get('/link/{link}/edit',[LinkController::class,'edit']);
Route::delete('/link/{link}',[LinkController::class,'destroy']);

require __DIR__.'/auth.php';

