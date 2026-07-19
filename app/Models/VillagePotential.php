<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VillagePotential extends Model
{
    protected $fillable = [
        'title',
        'badge',
        'description',
        'details',
        'category',
        'icon',
        'image_path',
    ];

    protected $casts = [
        'details' => 'array',
    ];
}
