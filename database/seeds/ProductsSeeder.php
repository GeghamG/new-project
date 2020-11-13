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
        DB::table('product')->insert(

          $product = [
            [
            'id'=>1,
            'title'=>'product1',
            'price'=>'150',
            'rating'=>'2',
            'count' =>'5',
            'image'=>'4.jpg'
            ],
            [
                'id'=>2,
                'title'=>'product2',
                'price'=>'50',
                'rating'=>'2',
                'count' =>'11',
                'image'=>'5.jpg'
            ],
            [
                'id'=>3,
                'title'=>'product3',
                'price'=>'157',
                'rating'=>'2',
                'count' =>'7',
                'image'=>'6.jpg'
            ],
            [
                'id'=>4,
                'title'=>'product4',
             'price'=>'318',
             'rating'=>'2',
             'count' =>'3',
             'image'=>'7.jpg'
            ]
        ]
        );
    }
}
