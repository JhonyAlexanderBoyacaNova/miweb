<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
        	"name" => "Jhony Alexander",
        	"email" => "jhonnova19@gmail.com",
        	"password" => Hash::make("12345")
        ]);
    }
}
