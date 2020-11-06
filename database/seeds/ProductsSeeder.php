<?php

use Illuminate\Database\Seeder;
use App\Products;
class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'title'=>'product',
            'price'=>'50',
            'rating'=>'2',
            'image'=>'4.jpg'
        ]);
    }
}
