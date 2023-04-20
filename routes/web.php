<?php

use Illuminate\Support\Facades\Route;
use Spatie\FlareClient\Flare;
use App\Http\Controllers\FlavriteController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

//comment
Route::get('api/flavrite', [FlavriteController::class, 'getFlavriteMatchJSON']);
