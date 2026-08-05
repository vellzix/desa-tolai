<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VillageNews extends Model
{
    protected $fillable = [
        'title',
        'category',
        'date',
        'excerpt',
        'image_path',
        'additional_images',
        'content',
        'tags',
        'views',
    ];

    protected $casts = [
        'tags' => 'array',
        'additional_images' => 'array',
    ];
}
