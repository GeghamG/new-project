<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table    = 'products';
    protected $fillable = [ 'title','price', 'rating', 'description', 'image', 'product_id'];

    public function cart(){
    return $this->hasMany("App\Cart");
  }
}


