<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table    = 'product';
    protected $fillable = ['title','price', 'rating', 'image'];

    public function carts() {
        return $this->belongsToMany(
            Cart::class,
            'cart_products',
            'product_id',
        'cart_id');
    }
}




