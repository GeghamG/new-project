<?php

use Illuminate\Database\Seeder;

class BenefitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('benefits')->insert(

            $plansItem = [
                [   'id'=>'1',
                    'image'=>'box.svg',
                    'name'=>'Free shipping',
                    'cost'=>'20',
                ],
                [   'id'=>'2',
                    'image'=>'edit.svg',
                    'name'=>'Free edit plan',
                    'cost'=>'20',
                ],
                [   'id'=>'3',
                    'image'=>'edit.svg',
                    'name'=>'Free changing',
                    'cost'=>'29',
                ],
                [   'id'=>'4',
                    'image'=>'box.svg',
                    'name'=>'Money back',
                    'cost'=>'3',
                ],
                [   'id'=>'5',
                    'image'=>'box.svg',
                    'name'=>'Rough hours shipping',
                    'cost'=>'3',
                ],
                [   'id'=>'6',
                    'image'=>'box.svg',
                    'name'=>'Free shipping + bonus',
                    'cost'=>'4',
                ],
                [   'id'=>'7',
                    'image'=>'box.svg',
                    'name'=>'Free edit plan + bonus',
                    'cost'=>'5',
                ],

                [   'id'=>'8',
                    'image'=>'box.svg',
                    'name'=>'Free changing + bonus',
                    'cost'=>'5',
                ],
                [   'id'=>'9',
                    'image'=>'box.svg',
                    'name'=>'Money back + bonus',
                    'cost'=>'10',
                ],
                [   'id'=>'10',
                    'image'=>'box.svg',
                    'name'=>'Rough hours shipping + bonus',
                    'cost'=>'20',
                ],
            ]


        );
    }
}
