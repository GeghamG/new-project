<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CartProduct extends Model
{
    protected $table    = 'cart_products';
    protected $fillable = ['cart_id', 'product_id'];


//   public function products() {
//       return $this->hasMany("App\Product");
//   }
////
//   public function carts() {
//       return $this->hasMany("App\Cart");
//   }


}
