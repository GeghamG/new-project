<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Product;
class Cart extends Model
{
  protected $table    = 'cart';
    protected $fillable = [ 'count', 'user_id', 'price'];



    public function products() {
        return $this->belongsToMany(
            Product::class,
            'cart_products',
            'cart_id',
            'product_id');

    }

}


