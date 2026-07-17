<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('village_profiles', function (Blueprint $table) {
            $table->id();
            $table->string('welcome_title')->default('Portal Informasi Desa Tolai');
            $table->text('welcome_text');
            $table->string('welcome_kades_name')->default('I Made Gede Dipayana');
            $table->string('welcome_kades_photo')->nullable();
            $table->text('history_text');
            $table->text('vision');
            $table->json('missions');
            $table->string('phone')->nullable();
            $table->string('email')->nullable();
            $table->text('address')->nullable();
            $table->string('timings')->nullable();
            $table->timestamps();
        });

        Schema::create('village_officials', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('role');
            $table->string('nip')->nullable();
            $table->string('photo_file')->nullable();
            $table->string('photo_label');
            $table->text('description');
            $table->json('duty');
            $table->string('color')->default('bg-navy-600');
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });

        Schema::create('village_news', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('category'); // 'berita', 'pengumuman', 'agenda'
            $table->string('date');
            $table->text('excerpt');
            $table->longText('content')->nullable();
            $table->json('tags');
            $table->integer('views')->default(0);
            $table->timestamps();
        });

        Schema::create('village_potentials', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('badge');
            $table->text('description');
            $table->json('details');
            $table->string('category'); // 'economy', 'culture'
            $table->string('icon');
            $table->timestamps();
        });

        Schema::create('village_galleries', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description')->nullable();
            $table->string('image_path');
            $table->string('category')->default('kegiatan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('village_galleries');
        Schema::dropIfExists('village_potentials');
        Schema::dropIfExists('village_news');
        Schema::dropIfExists('village_officials');
        Schema::dropIfExists('village_profiles');
    }
};
