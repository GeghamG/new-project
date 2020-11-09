<?php

use Illuminate\Database\Seeder;

class PlansItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('plans_item')->insert(

            $plansItem = [

            [
                'id'=>'1',
                'name'=>'single',
                'description'=>'small family',
                'cost'=>'69',
                'img'=> '0.svg'
            ],
            [    'id'=>'2',
                'name'=>'large',
                'description'=>'large family',
                'cost'=>'79',
                'img'=>'1.svg'
            ],
            [   'id'=>'3',
                'name'=>'companies',
                'description'=>'large family',
                'cost'=>'99',
                'img'=>'2.svg'
            ]
            ]

        );
    }
}
