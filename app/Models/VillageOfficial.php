<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VillageOfficial extends Model
{
    protected $fillable = [
        'name',
        'role',
        'nip',
        'photo_file',
        'photo_label',
        'description',
        'duty',
        'color',
        'sort_order',
    ];

    protected $casts = [
        'duty' => 'array',
    ];
}
