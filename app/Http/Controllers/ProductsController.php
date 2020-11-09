<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
class ProductsController extends Controller
{
    public function getProduct(){
        $product = Product::all();
        return response()->json([
            'status' => 'success',
            'product' => $product
        ]);
    }

}
