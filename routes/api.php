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

Route::post('register', 'Auth\AuthController@register');
Route::post('login', 'Auth\AuthController@login');


Route::group(
    ['middleware' => 'api'],
    function ($router) {
    Route::post('logout', 'Auth\AuthController@logout');
    Route::post('youtube', 'YoutubeController@index');
    Route::post('youtube/create', 'YoutubeController@create');
    Route::post('youtube/show', 'YoutubeController@show');
    Route::post('youtube/store', 'SongsController@store');
    Route::post('youtube/playlist', 'SongsController@index');
});
