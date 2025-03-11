<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SesssionController;

Route::middleware('guest')->group(function() {
    Route::get('/register',[RegisterController::class,'create'])->name('register');
    Route::post('/register',[RegisterController::class,'store'])->name('register.post');
    Route::get('/login',[SesssionController::class,'create'])->name('login');
    Route::post('/login',[SesssionController::class,'store'])->name('login.post');
});
Route::middleware('auth')->group(function(){
    Route::delete('/logout',[SesssionController::class,'destroy'])->name('logout');
});