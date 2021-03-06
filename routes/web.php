<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('products');
});

Route::get('/products', 'App\Http\Controllers\ProductsController@index');
Route::get('/product/index', 'App\Http\Controllers\ProductsController@index');
Route::get('/products/list', 'App\Http\Controllers\ProductsController@index');
Route::get('/products/form', 'App\Http\Controllers\ProductsController@index');
Route::get('/product/edit/{id}', 'App\Http\Controllers\ProductsController@index');
Route::get('/comments/index', 'App\Http\Controllers\ProductsController@index');