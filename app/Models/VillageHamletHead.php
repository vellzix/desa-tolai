<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VillageHamletHead extends Model
{
    protected $fillable = ['dusun_number', 'dusun_order', 'name', 'photo_file', 'phone', 'notes'];
}
