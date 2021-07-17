<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            'kd_admin' => 'ADM001',
            'nama' => 'Admin',
            'email' => 'admin@mail.com',
            'password' => bcrypt('admin123')
        ];

        User::insert($data);
    }
}
