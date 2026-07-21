<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\VillageProfile;
use App\Models\VillageOfficial;
use App\Models\VillageNews;
use App\Models\VillagePotential;
use App\Models\VillageGallery;
use App\Models\VillageHamletHead;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('dashboard/overview', [
            'stats' => [
                'officials' => VillageOfficial::count(),
                'news'      => VillageNews::count(),
                'potentials'=> VillagePotential::count(),
                'galleries' => VillageGallery::count(),
                'admins'    => User::count(),
                'hamlet_heads'=> VillageHamletHead::count(),
                'total_views'=> VillageNews::sum('views'),
            ],
            'recentNews' => VillageNews::orderBy('id', 'desc')->take(5)->get(),
        ]);
    }

    public function profile(): Response
    {
        return Inertia::render('dashboard/profile', [
            'profile' => VillageProfile::first(),
        ]);
    }

    public function officials(): Response
    {
        return Inertia::render('dashboard/officials', [
            'officials' => VillageOfficial::orderBy('sort_order')->get(),
        ]);
    }

    public function news(): Response
    {
        return Inertia::render('dashboard/news', [
            'news' => VillageNews::orderBy('id', 'desc')->get(),
        ]);
    }

    public function potentials(): Response
    {
        return Inertia::render('dashboard/potentials', [
            'potentials' => VillagePotential::all(),
        ]);
    }

    public function gallery(): Response
    {
        return Inertia::render('dashboard/gallery', [
            'galleries' => VillageGallery::orderBy('id', 'desc')->get(),
        ]);
    }

    public function admins(): Response
    {
        return Inertia::render('dashboard/admins', [
            'admins' => User::orderBy('created_at')->get(['id', 'name', 'email', 'created_at']),
        ]);
    }

    public function hamletHeads(): Response
    {
        return Inertia::render('dashboard/hamlet-heads', [
            'hamletHeads' => VillageHamletHead::orderBy('dusun_order')->get(),
        ]);
    }
}
