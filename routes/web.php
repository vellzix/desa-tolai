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
    Route::get('/dashboard/profil', [App\Http\Controllers\Admin\DashboardController::class, 'profile'])->name('admin.profile.page');
    Route::get('/dashboard/aparatur', [App\Http\Controllers\Admin\DashboardController::class, 'officials'])->name('admin.officials.page');
    Route::get('/dashboard/kabar', [App\Http\Controllers\Admin\DashboardController::class, 'news'])->name('admin.news.page');
    Route::get('/dashboard/potensi', [App\Http\Controllers\Admin\DashboardController::class, 'potentials'])->name('admin.potentials.page');
    Route::get('/dashboard/galeri', [App\Http\Controllers\Admin\DashboardController::class, 'gallery'])->name('admin.gallery.page');
    Route::get('/dashboard/admin-akun', [App\Http\Controllers\Admin\DashboardController::class, 'admins'])->name('admin.users.page');
    Route::post('/dashboard/profile', [App\Http\Controllers\Admin\AdminProfileController::class, 'update'])->name('admin.profile.update');
    Route::post('/dashboard/officials', [App\Http\Controllers\Admin\AdminOfficialController::class, 'store'])->name('admin.officials.store');
    Route::post('/dashboard/officials/{id}', [App\Http\Controllers\Admin\AdminOfficialController::class, 'update'])->name('admin.officials.update');
    Route::delete('/dashboard/officials/{id}', [App\Http\Controllers\Admin\AdminOfficialController::class, 'destroy'])->name('admin.officials.destroy');
    Route::post('/dashboard/news', [App\Http\Controllers\Admin\AdminNewsController::class, 'store'])->name('admin.news.store');
    Route::post('/dashboard/news/{id}', [App\Http\Controllers\Admin\AdminNewsController::class, 'update'])->name('admin.news.update');
    Route::delete('/dashboard/news/{id}', [App\Http\Controllers\Admin\AdminNewsController::class, 'destroy'])->name('admin.news.destroy');
    Route::post('/dashboard/potentials', [App\Http\Controllers\Admin\AdminPotentialController::class, 'store'])->name('admin.potentials.store');
    Route::post('/dashboard/potentials/{id}', [App\Http\Controllers\Admin\AdminPotentialController::class, 'update'])->name('admin.potentials.update');
    Route::delete('/dashboard/potentials/{id}', [App\Http\Controllers\Admin\AdminPotentialController::class, 'destroy'])->name('admin.potentials.destroy');
    Route::post('/dashboard/galleries', [App\Http\Controllers\Admin\AdminGalleryController::class, 'store'])->name('admin.galleries.store');
    Route::delete('/dashboard/galleries/{id}', [App\Http\Controllers\Admin\AdminGalleryController::class, 'destroy'])->name('admin.galleries.destroy');
    Route::post('/dashboard/admins', [App\Http\Controllers\Admin\AdminUserController::class, 'store'])->name('admin.users.store');
    Route::delete('/dashboard/admins/{id}', [App\Http\Controllers\Admin\AdminUserController::class, 'destroy'])->name('admin.users.destroy');
    
    Route::get('/dashboard/kadus', [App\Http\Controllers\Admin\DashboardController::class, 'hamletHeads'])->name('admin.hamlet_heads.page');
    Route::post('/dashboard/hamlet-heads', [App\Http\Controllers\Admin\AdminHamletHeadController::class, 'store'])->name('admin.hamlet_heads.store');
    Route::post('/dashboard/hamlet-heads/{id}', [App\Http\Controllers\Admin\AdminHamletHeadController::class, 'update'])->name('admin.hamlet_heads.update');
    Route::delete('/dashboard/hamlet-heads/{id}', [App\Http\Controllers\Admin\AdminHamletHeadController::class, 'destroy'])->name('admin.hamlet_heads.destroy');
});

require __DIR__.'/settings.php';
