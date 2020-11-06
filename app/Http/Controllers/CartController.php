<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;
use App\Products;
use Auth;
use App\User;
class CartController extends Controller
{
     public function addCart($id){
         $product = Products::where('id', $id)->first();
         $count = 0;
         $cart=new Cart;
         $cart->image = $product->image;
         $cart->rating = $product->rating;
         $cart->title = $product->title;
         $cart->price = $product->price;
         $cart->count = $count+1;
         $cart->product_id=$id;
         $cart->save();
         return $this->countCart();
     }

     public function countCart(){

         $carts=Cart::all();
         $totalCart = 0;
         $sum = 0;
        foreach ($carts as  $cart){
            $totalCart+= $cart->count;
            $sum += $cart->price;
        }
         return response()->json([
             'status' => 'success',
             'totalCart' => $totalCart,
             'sum' => $sum,
         ]);
   }

     public  function plansProduct(){
         $cart = Cart::all();
         return response()->json([
             'product' => $cart,
         ]);
     }
}
