<?php

use Illuminate\Database\Seeder;

class CreateAdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('admins')->insert([

            'email'=>'admin@gmail.com',
            'password'=> bcrypt('admin@gmail.com'),
        ]);
    }
}
