<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VillageNews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminNewsController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:berita,pengumuman,agenda',
            'date' => 'required|string|max:100',
            'excerpt' => 'required|string',
            'news_image_file' => 'nullable|image|max:3072',
            'content' => 'nullable|string',
            'tags' => 'required|array',
        ]);

        $imagePath = null;
        if ($request->hasFile('news_image_file')) {
            $path = $request->file('news_image_file')->store('kabar', 'public');
            $imagePath = '/storage/' . $path;
        }

        VillageNews::create([
            'title' => $data['title'],
            'category' => $data['category'],
            'date' => $data['date'],
            'excerpt' => $data['excerpt'],
            'image_path' => $imagePath,
            'content' => $data['content'] ?? $data['excerpt'],
            'tags' => $data['tags'],
            'views' => 0,
        ]);

        return redirect()->back()->with('success', 'Berita/Kabar desa berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $news = VillageNews::findOrFail($id);

        $data = $request->validate([
            'title' => 'required|string|max:255',
            'category' => 'required|string|in:berita,pengumuman,agenda',
            'date' => 'required|string|max:100',
            'excerpt' => 'required|string',
            'news_image_file' => 'nullable|image|max:3072',
            'content' => 'nullable|string',
            'tags' => 'required|array',
        ]);

        $imagePath = $news->image_path;
        if ($request->hasFile('news_image_file')) {
            // Delete old custom photo if it exists
            if ($news->image_path && Storage::disk('public')->exists(str_replace('/storage/', '', $news->image_path))) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $news->image_path));
            }
            $path = $request->file('news_image_file')->store('kabar', 'public');
            $imagePath = '/storage/' . $path;
        }

        $news->update([
            'title' => $data['title'],
            'category' => $data['category'],
            'date' => $data['date'],
            'excerpt' => $data['excerpt'],
            'image_path' => $imagePath,
            'content' => $data['content'] ?? $data['excerpt'],
            'tags' => $data['tags'],
        ]);

        return redirect()->back()->with('success', 'Berita/Kabar desa berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $news = VillageNews::findOrFail($id);
        
        // Delete image from storage if it exists
        if ($news->image_path && Storage::disk('public')->exists(str_replace('/storage/', '', $news->image_path))) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $news->image_path));
        }

        $news->delete();

        return redirect()->back()->with('success', 'Berita/Kabar desa berhasil dihapus.');
    }
}
