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
Route::post('admin/login', 'AdminController@login');

Route::group(
    ['middleware' => 'api'],
    function ($router) {
    Route::post('logout', 'Auth\AuthController@logout');
    Route::post('getProduct', 'ProductsController@getProduct');
    Route::post('addCart/{id}', 'CartController@addCart');
    Route::post('countCart', 'CartController@countCart');
    Route::post('plansProduct', 'CartController@plansProduct');
    Route::post('userInfo', 'UserController@userInfo');
    Route::post('plansItem', 'PlansItemController@plansItem');
    Route::post('ChoosePlansItem/{id}', 'PlansItemController@ChoosePlansItem');
    Route::post('onCheckout/{id}', 'PlansItemController@onCheckout');
    Route::post('checked', 'PlansItemController@checked');
    Route::post('bensfits', 'BenefitsController@bensfits');
    //Admin
    Route::post('admin/logout', 'AdminController@logout');
});
