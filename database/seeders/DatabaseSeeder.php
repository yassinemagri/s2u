<?php

namespace Database\Seeders;

use App\Models\Link;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use App\Models\Rating;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();
        $rating = Rating::factory(5)->create();
        Link::factory(30)->hasAttached($rating)->create();
    }
}
