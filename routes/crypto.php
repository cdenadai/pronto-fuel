<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/crypto', function() {
    return Inertia::render('Crypto/Buy');
})->middleware('guest')
    ->name('crypto');
