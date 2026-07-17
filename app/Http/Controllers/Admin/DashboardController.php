<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VillageProfile;
use App\Models\VillageOfficial;
use App\Models\VillageNews;
use App\Models\VillagePotential;
use App\Models\VillageGallery;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('dashboard', [
            'profile' => VillageProfile::first(),
            'officials' => VillageOfficial::orderBy('sort_order')->get(),
            'news' => VillageNews::orderBy('id', 'desc')->get(),
            'potentials' => VillagePotential::all(),
            'galleries' => VillageGallery::orderBy('id', 'desc')->get(),
        ]);
    }
}
