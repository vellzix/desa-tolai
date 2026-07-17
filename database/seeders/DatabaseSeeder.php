<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Check if admin user already exists
        if (!User::where('email', 'admin@desatolai.go.id')->exists()) {
            User::create([
                'name' => 'Admin Desa Tolai',
                'email' => 'admin@desatolai.go.id',
                'password' => Hash::make('AdminDesa2026'),
                'email_verified_at' => now(),
            ]);
        }

        // Run the VillageSeeder
        $this->call(VillageSeeder::class);
    }
}
