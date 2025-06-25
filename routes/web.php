<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('index');
})->name('home');

Route::get('/about', function () {
    return Inertia::render('about');
})->name('about');

Route::get('/team', function () {
    return Inertia::render('team');
})->name('team');

Route::get('/service', function () {
    return Inertia::render('service');
})->name('service');

Route::get('/event', function () {
    return Inertia::render('event');
})->name('event');

Route::get('/support', function () {
    return Inertia::render('support');
})->name('support');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
