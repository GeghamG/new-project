<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cart;
use App\Product;
use Auth;
use App\User;
use App\CartProduct;
class CartController extends Controller
{
    public function addCart($id){
        $user = Auth::user();
        $product = Product::where('id', $id)->first();
        $count = 0;
        $cart=new Cart;
        $cart->user_id = $user->id;
        $cart->price = $product->price;
        $cart->count = $count+1;
        $cart->save();

        $cartProduct=new CartProduct;
        $cartProduct->cart_id = $cart->id;
        $cartProduct->product_id = $product->id;
        $cartProduct->save();
        return $this->countCart();
    }

    public function countCart(){
        $user = Auth::user();
        $carts = Cart::where('user_id', $user->id)->get();
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
        $user = Auth::user();
        $cart = Cart::where('user_id', $user->id)->with('products')->get();

        $array = [];
         foreach ($cart  as $product){
            foreach ( $product->products as $item){
                   array_push($array, $item);
            }
         }
         return response()->json(['status'=>'success',
                                  'array'=>$array]);

    }
    public function deleteCartProduct($id){
        $user = Auth::user();
        $cartProduct = CartProduct::where('product_id', $id)->first();
        $cartProduct->delete();
    }
}
