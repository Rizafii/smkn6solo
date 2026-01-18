<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/tentang-kami', function () {
    return Inertia::render('tentang-kami/page');
})->name('tentang-kami');

Route::get('/berita', function () {
    return Inertia::render('berita/page');
})->name('berita');

Route::get('/program', function(){
    return Inertia::render('program/page');
})->name('program');