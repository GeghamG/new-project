<?php

namespace App\Http\Controllers;

use App\Models\Songs;
use Illuminate\Http\Request;

class SongsController extends Controller
{

    function index(Request $request){
        $playlist = Songs::where('playlist_id', $request->playlist_id)->get();
        return response()->json($playlist);
    }
    function store(Request $request){
        $playlist = Songs::create($request->toArray());
        return response($playlist,201);
}
}
