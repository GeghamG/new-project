<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Http\Resources\User as UserResource;
use Auth;
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

    function userInfo(){
        $user = Auth::user();
        return response()->json(['status'=>'success','user'=>$user]);
    }

    function about(){}
}
