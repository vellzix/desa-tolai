<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VillagePotential;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminPotentialController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'badge'       => 'required|string|max:100',
            'description' => 'required|string',
            'details'     => 'required|array',
            'category'    => 'required|string|in:economy,culture',
            'icon'        => 'required|string|max:50',
            'image'       => 'nullable|image|max:3072', // max 3 MB
        ]);

        $imagePath = null;
        if ($request->hasFile('image')) {
            $imagePath = $request->file('image')->store('potentials', 'public');
        }

        VillagePotential::create([
            'title'       => $data['title'],
            'badge'       => $data['badge'],
            'description' => $data['description'],
            'details'     => $data['details'],
            'category'    => $data['category'],
            'icon'        => $data['icon'],
            'image_path'  => $imagePath,
        ]);

        return redirect()->back()->with('success', 'Potensi desa berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $potential = VillagePotential::findOrFail($id);

        $data = $request->validate([
            'title'       => 'required|string|max:255',
            'badge'       => 'required|string|max:100',
            'description' => 'required|string',
            'details'     => 'required|array',
            'category'    => 'required|string|in:economy,culture',
            'icon'        => 'required|string|max:50',
            'image'       => 'nullable|image|max:3072',
        ]);

        $imagePath = $potential->image_path;

        if ($request->hasFile('image')) {
            // Hapus gambar lama jika ada
            if ($imagePath) {
                Storage::disk('public')->delete($imagePath);
            }
            $imagePath = $request->file('image')->store('potentials', 'public');
        }

        $potential->update([
            'title'       => $data['title'],
            'badge'       => $data['badge'],
            'description' => $data['description'],
            'details'     => $data['details'],
            'category'    => $data['category'],
            'icon'        => $data['icon'],
            'image_path'  => $imagePath,
        ]);

        return redirect()->back()->with('success', 'Potensi desa berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $potential = VillagePotential::findOrFail($id);

        // Hapus gambar dari storage jika ada
        if ($potential->image_path) {
            Storage::disk('public')->delete($potential->image_path);
        }

        $potential->delete();

        return redirect()->back()->with('success', 'Potensi desa berhasil dihapus.');
    }
}
