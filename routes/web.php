<?php

use App\Http\Controllers\AccountController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ChirpController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ShareController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/about', function(){
    return Inertia::render('About');
});

Route::resource('/chirps', ChirpController::class)
    //->only(['index', 'store', 'update'])
    ->only(['index', 'store'])
    ->middleware(['auth', 'verified']);


Route::resource('/posts', PostController::class)
    ->only(['index', 'store'])
    ->middleware(['auth', 'verified']);  
  
Route::resource('status', StatusController::class)
    ->only(['index', 'store', 'update'])
    ->middleware(['auth', 'verified']);


Route::resource('share', ShareController::class)
    ->only(['index', 'store', 'update'])
    ->middleware(['auth', 'verified']);

Route::get('data', [UserController::class, 'fetchData']);

Route::get('account', [AccountController::class, 'fetchAccount']);

require __DIR__.'/auth.php';
