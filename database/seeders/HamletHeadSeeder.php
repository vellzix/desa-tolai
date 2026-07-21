<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\VillageHamletHead;

class HamletHeadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            ['dusun_number' => 'I',    'dusun_order' => 1,  'name' => 'I Made Raka Suparta',   'photo_file' => 'perangkat-desa/I MADE RAKA SUPARTA_KADUS 1.jpeg'],
            ['dusun_number' => 'II',   'dusun_order' => 2,  'name' => 'Kepala Dusun II',        'photo_file' => null],
            ['dusun_number' => 'III',  'dusun_order' => 3,  'name' => 'I Ketut Suastika',       'photo_file' => 'perangkat-desa/I KETUT SUASTIKA_KADUS 3.jpeg'],
            ['dusun_number' => 'IV',   'dusun_order' => 4,  'name' => 'Kepala Dusun IV',        'photo_file' => null],
            ['dusun_number' => 'V',    'dusun_order' => 5,  'name' => 'Alfian',                 'photo_file' => 'perangkat-desa/ALFIAN_KADUS 5.jpeg'],
            ['dusun_number' => 'VI',   'dusun_order' => 6,  'name' => 'Yudi Artawijaya',        'photo_file' => 'perangkat-desa/YUDI ARTAWIJAYA_KADUS 6.jpeg'],
            ['dusun_number' => 'VII',  'dusun_order' => 7,  'name' => 'Nanang Fernanda',        'photo_file' => 'perangkat-desa/NANANG FERNANDA_KADUS VII.jpeg'],
            ['dusun_number' => 'VIII', 'dusun_order' => 8,  'name' => 'Kepala Dusun VIII',      'photo_file' => null],
            ['dusun_number' => 'IX',   'dusun_order' => 9,  'name' => 'I Made Arrtana',         'photo_file' => 'perangkat-desa/I MADE ARRTANA_KADUS 9.jpeg'],
            ['dusun_number' => 'X',    'dusun_order' => 10, 'name' => 'I Wayan Eka Winaya',     'photo_file' => 'perangkat-desa/I WAYAN EKA WINAYA_KADUS X.jpeg'],
            ['dusun_number' => 'XI',   'dusun_order' => 11, 'name' => 'I Made Nesa Wiarta',     'photo_file' => 'perangkat-desa/I MADE NESA WIARTA_KADUS 11.jpeg'],
        ];

        foreach ($data as $item) {
            VillageHamletHead::create($item);
        }
    }
}
