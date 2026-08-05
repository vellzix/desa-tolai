<?php

namespace App\Http\Controllers;

use App\Models\VillageProfile;
use App\Models\VillageOfficial;
use App\Models\VillageNews;
use App\Models\VillagePotential;
use App\Models\VillageGallery;
use App\Models\VillageHamletHead;
use Inertia\Inertia;
use Inertia\Response;

class PublicController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('welcome', [
            'profile' => VillageProfile::first(),
            'officials' => VillageOfficial::orderBy('sort_order')->get(),
            'hamletHeads' => VillageHamletHead::orderBy('dusun_order')->get(),
            'potentials' => VillagePotential::all(),
            'news' => VillageNews::orderBy('id', 'desc')->take(6)->get(),
        ]);
    }

    public function about(): Response
    {
        return Inertia::render('about', [
            'profile' => VillageProfile::first(),
            'officials' => VillageOfficial::orderBy('sort_order')->get(),
            'hamletHeads' => VillageHamletHead::orderBy('dusun_order')->get(),
        ]);
    }

    public function potentials(): Response
    {
        return Inertia::render('potentials', [
            'potentials' => VillagePotential::all(),
        ]);
    }

    public function news(): Response
    {
        return Inertia::render('news', [
            'news' => VillageNews::orderBy('id', 'desc')->get(),
        ]);
    }

    public function gallery(): Response
    {
        return Inertia::render('gallery', [
            'galleries' => VillageGallery::orderBy('id', 'desc')->get(),
        ]);
    }

    public function newsShow($id): Response
    {
        $newsItem = VillageNews::findOrFail($id);
        $newsItem->increment('views');

        return Inertia::render('news-detail', [
            'item' => $newsItem,
        ]);
    }

    public function sitemap()
    {
        $news = VillageNews::orderBy('updated_at', 'desc')->get();
        
        return response()
            ->view('sitemap', compact('news'))
            ->header('Content-Type', 'text/xml');
    }
}
