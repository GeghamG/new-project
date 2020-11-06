<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Products;
class Cart extends Model
{
    protected $table    = 'cart';
    protected $fillable = [ 'product_id', 'count', 'cart_id', 'price'];

    public function product(){
        return $this->hasMany("App\Products");
    }
}


