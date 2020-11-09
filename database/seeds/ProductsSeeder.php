<?php

use Illuminate\Database\Seeder;
use App\Product;
class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product')->insert([
            'title'=>'product',
            'price'=>'50',
            'rating'=>'2',
            'count' =>'7',
            'image'=>'4.jpg'
        ]);
    }
}
