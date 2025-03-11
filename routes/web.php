<?php

use App\Http\Controllers\PostController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $bg_img = asset('imgs/main-bg.png');
    return Inertia::render('Home/Index',compact('bg_img'));
});
Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/posts',[PostController::class,'index']);
Route::get('/post/{post}',[PostController::class,'show']);
Route::get('/post/create',[PostController::class,'create']);
Route::post('/post',[PostController::class,'store'])->middleware('auth');
Route::get('/post/{post}/edit',[PostController::class,'edit']);




require __DIR__.'/auth.php';

