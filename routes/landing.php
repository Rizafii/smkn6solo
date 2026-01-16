<?php
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/tentang-kami', function () {
    return Inertia::render('tentang-kami/page');
})->name('tentang-kami');