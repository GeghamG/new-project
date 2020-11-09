<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Benefits;
class BenefitsController extends Controller
{
    public function bensfits(){
        $bensfits = Benefits::all();
        return response()->json($bensfits);
    }
}
