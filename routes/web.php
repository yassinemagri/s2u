<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $bg_img = asset('imgs/main-bg.png');
    return Inertia::render('Home/Index',compact('bg_img'));
});
Route::get('/about', function () {
    return Inertia::render('About');
});
