<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/products/comments', 'App\Http\Controllers\API\ProductsController@list_comments');
Route::post('/products/create', 'App\Http\Controllers\API\ProductsController@create');
Route::get('/products/list', 'App\Http\Controllers\API\ProductsController@list');
Route::get('/products/get/{id}', 'App\Http\Controllers\API\ProductsController@get');
Route::put('/products/update/{id}', 'App\Http\Controllers\API\ProductsController@update');
Route::post('/comments/create', 'App\Http\Controllers\API\CommentsController@create');


