<?php

use App\Http\Controllers\PostController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $bg_img = asset('imgs/main-bg.png');
    return Inertia::render('Home/Index',compact('bg_img'));
});
// These pages have an error!!!!.
Route::get('/terms-and-conditions', function () {
    return Inertia::render('TermsAndConditions');
});
// pages
Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/privacy-policy', function () {
    return Inertia::render('PrivacyPolicy');
});
Route::get('/devdetails', function () {
    return Inertia::render('DevDetails');
});
// page 404
Route::fallback(function () {
    return Inertia::render('NotFound')->toResponse(request())->setStatusCode(404);
});
// posts
Route::get('/posts',[PostController::class,'index']);
Route::get('/post/create',[PostController::class,'create'])->middleware('auth');
Route::get('/post/{post}',[PostController::class,'show']);
Route::post('/post',[PostController::class,'store'])->middleware('auth');
Route::get('/post/{post}/edit',[PostController::class,'edit']);
Route::delete('/post/{post}',[PostController::class,'destroy']);

require __DIR__.'/auth.php';

