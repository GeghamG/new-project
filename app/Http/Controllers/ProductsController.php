<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;
class ProductsController extends Controller
{
    public function getProduct(){
        $product = Products::all();
        return response()->json([
            'status' => 'success',
            'product' => $product
        ]);
    }

}
