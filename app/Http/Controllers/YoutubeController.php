<?php

namespace App\Http\Controllers;

use App\Models\Youtube;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class YoutubeController extends Controller
{
    function index(Request $request)
    {
        $response = Http::get('https://www.googleapis.com/youtube/v3/search', $request->params);
        return response($response->body());
    }

    function create(Request $request)
    {
        $playlist = Youtube::create($request->toArray());
        return response($playlist,201);
    }

    function show(Request $request){
        $playlist = Youtube::where('user_id', $request->user_id)->get();
        return response()->json($playlist);
    }
}
