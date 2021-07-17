<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
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

        Admin::insert($data);
    }
}
