<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VillageProfile extends Model
{
    protected $fillable = [
        'welcome_title',
        'welcome_text',
        'welcome_kades_name',
        'welcome_kades_photo',
        'history_text',
        'vision',
        'missions',
        'phone',
        'email',
        'address',
        'timings',
        'stats_cards',
    ];

    protected $casts = [
        'missions' => 'array',
        'stats_cards' => 'array',
    ];
}
