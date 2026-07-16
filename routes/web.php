<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('/tentang', 'about')->name('about');
Route::inertia('/potensi', 'potentials')->name('potentials');
Route::inertia('/kabar', 'news')->name('news');
Route::inertia('/galeri', 'gallery')->name('gallery');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
