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
    Route::delete('deleteCartProduct/{id}', 'CartController@deleteCartProduct');
    Route::post('addCart/{id}', 'CartController@addCart');
    Route::post('countCart', 'CartController@countCart');
    Route::post('plansProduct', 'CartController@plansProduct');
    Route::post('userInfo', 'UserController@userInfo');
    Route::post('plansItem', 'PlansItemController@plansItem');
    Route::post('ChoosePlansItem/{id}', 'PlansItemController@ChoosePlansItem');
    Route::post('onCheckout/{id}', 'PlansItemController@onCheckout');
    Route::post('checked', 'PlansItemController@checked');
    Route::post('bensfits', 'BenefitsController@bensfits');
    Route::post('onCheckBoxChange/{id}', 'BenefitsController@onCheckBoxChange');
    Route::post('updateCardHandler/{id}', 'PlansItemController@updateCardHandler');
    Route::post('plansBenefits/{id}', 'PlansItemController@plansBenefits');
    Route::post('updatePlan/{id}', 'PlansItemController@updatePlan');
    //Admin
    Route::post('admin/logout', 'AdminController@logout');

});
