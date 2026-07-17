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
    ];

    protected $casts = [
        'details' => 'array',
    ];
}
