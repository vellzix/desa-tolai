<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VillagePotential;
use Illuminate\Http\Request;

class AdminPotentialController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'badge' => 'required|string|max:100',
            'description' => 'required|string',
            'details' => 'required|array',
            'category' => 'required|string|in:economy,culture',
            'icon' => 'required|string|max:50',
        ]);

        VillagePotential::create([
            'title' => $data['title'],
            'badge' => $data['badge'],
            'description' => $data['description'],
            'details' => $data['details'],
            'category' => $data['category'],
            'icon' => $data['icon'],
        ]);

        return redirect()->back()->with('success', 'Potensi desa berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $potential = VillagePotential::findOrFail($id);

        $data = $request->validate([
            'title' => 'required|string|max:255',
            'badge' => 'required|string|max:100',
            'description' => 'required|string',
            'details' => 'required|array',
            'category' => 'required|string|in:economy,culture',
            'icon' => 'required|string|max:50',
        ]);

        $potential->update([
            'title' => $data['title'],
            'badge' => $data['badge'],
            'description' => $data['description'],
            'details' => $data['details'],
            'category' => $data['category'],
            'icon' => $data['icon'],
        ]);

        return redirect()->back()->with('success', 'Potensi desa berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $potential = VillagePotential::findOrFail($id);
        $potential->delete();

        return redirect()->back()->with('success', 'Potensi desa berhasil dihapus.');
    }
}
