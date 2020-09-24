<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Http\Resources\User as UserResource;

use Illuminate\Http\Request;

class UserController extends Controller
{
    function create(Request $request){
        $userData = [
            'email' => $request->email,
            'password' => bcrypt($request->password)
        ];

        $user = User::create($userData);

        return response()->json(array('success'=>true));
    }

    function index(){

    }

    function about(){}
}
