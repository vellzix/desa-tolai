<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VillageGallery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminGalleryController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image_upload' => 'required|image|max:3072',
            'category' => 'required|string|max:100',
        ]);

        $imagePath = '';
        if ($request->hasFile('image_upload')) {
            $path = $request->file('image_upload')->store('galeri', 'public');
            $imagePath = '/storage/' . $path;
        }

        VillageGallery::create([
            'title' => $data['title'],
            'description' => $data['description'] ?? null,
            'image_path' => $imagePath,
            'category' => $data['category'],
        ]);

        return redirect()->back()->with('success', 'Foto galeri berhasil ditambahkan.');
    }

    public function destroy($id)
    {
        $gallery = VillageGallery::findOrFail($id);

        // Delete the image file if it exists in storage
        if ($gallery->image_path && Storage::disk('public')->exists(str_replace('/storage/', '', $gallery->image_path))) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $gallery->image_path));
        }

        $gallery->delete();

        return redirect()->back()->with('success', 'Foto galeri berhasil dihapus.');
    }
}
