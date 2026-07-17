<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\PublicController;

Route::get('/', [PublicController::class, 'home'])->name('home');
Route::get('/tentang', [PublicController::class, 'about'])->name('about');
Route::get('/potensi', [PublicController::class, 'potentials'])->name('potentials');
Route::get('/kabar', [PublicController::class, 'news'])->name('news');
Route::get('/kabar/{id}', [PublicController::class, 'newsShow'])->name('news.show');
Route::get('/galeri', [PublicController::class, 'gallery'])->name('gallery');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\Admin\DashboardController::class, 'index'])->name('dashboard');
    Route::post('/dashboard/profile', [App\Http\Controllers\Admin\AdminProfileController::class, 'update'])->name('admin.profile.update');
    Route::post('/dashboard/officials', [App\Http\Controllers\Admin\AdminOfficialController::class, 'store'])->name('admin.officials.store');
    Route::post('/dashboard/officials/{id}', [App\Http\Controllers\Admin\AdminOfficialController::class, 'update'])->name('admin.officials.update');
    Route::delete('/dashboard/officials/{id}', [App\Http\Controllers\Admin\AdminOfficialController::class, 'destroy'])->name('admin.officials.destroy');
    Route::post('/dashboard/news', [App\Http\Controllers\Admin\AdminNewsController::class, 'store'])->name('admin.news.store');
    Route::post('/dashboard/news/{id}', [App\Http\Controllers\Admin\AdminNewsController::class, 'update'])->name('admin.news.update');
    Route::delete('/dashboard/news/{id}', [App\Http\Controllers\Admin\AdminNewsController::class, 'destroy'])->name('admin.news.destroy');
    Route::post('/dashboard/potentials', [App\Http\Controllers\Admin\AdminPotentialController::class, 'store'])->name('admin.potentials.store');
    Route::put('/dashboard/potentials/{id}', [App\Http\Controllers\Admin\AdminPotentialController::class, 'update'])->name('admin.potentials.update');
    Route::delete('/dashboard/potentials/{id}', [App\Http\Controllers\Admin\AdminPotentialController::class, 'destroy'])->name('admin.potentials.destroy');
    Route::post('/dashboard/galleries', [App\Http\Controllers\Admin\AdminGalleryController::class, 'store'])->name('admin.galleries.store');
    Route::delete('/dashboard/galleries/{id}', [App\Http\Controllers\Admin\AdminGalleryController::class, 'destroy'])->name('admin.galleries.destroy');
});

require __DIR__.'/settings.php';
