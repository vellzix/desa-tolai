<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VillageOfficial;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminOfficialController extends Controller
{
    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'nip' => 'nullable|string|max:50',
            'photo_file_upload' => 'nullable|image|max:2048',
            'photo_label' => 'required|string|max:10',
            'description' => 'required|string',
            'duty' => 'required|array',
            'color' => 'required|string|max:50',
            'sort_order' => 'required|integer',
        ]);

        $photoPath = null;
        if ($request->hasFile('photo_file_upload')) {
            $path = $request->file('photo_file_upload')->store('perangkat', 'public');
            $photoPath = '/storage/' . $path;
        }

        VillageOfficial::create([
            'name' => $data['name'],
            'role' => $data['role'],
            'nip' => $data['nip'] ?? null,
            'photo_file' => $photoPath,
            'photo_label' => $data['photo_label'],
            'description' => $data['description'],
            'duty' => $data['duty'],
            'color' => $data['color'],
            'sort_order' => $data['sort_order'],
        ]);

        return redirect()->back()->with('success', 'Aparatur desa berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $official = VillageOfficial::findOrFail($id);

        $data = $request->validate([
            'name' => 'required|string|max:255',
            'role' => 'required|string|max:255',
            'nip' => 'nullable|string|max:50',
            'photo_file_upload' => 'nullable|image|max:2048',
            'photo_label' => 'required|string|max:10',
            'description' => 'required|string',
            'duty' => 'required|array',
            'color' => 'required|string|max:50',
            'sort_order' => 'required|integer',
        ]);

        $photoPath = $official->photo_file;
        if ($request->hasFile('photo_file_upload')) {
            // Delete old custom photo if it exists
            if ($official->photo_file && Storage::disk('public')->exists(str_replace('/storage/', '', $official->photo_file))) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $official->photo_file));
            }
            $path = $request->file('photo_file_upload')->store('perangkat', 'public');
            $photoPath = '/storage/' . $path;
        }

        $official->update([
            'name' => $data['name'],
            'role' => $data['role'],
            'nip' => $data['nip'] ?? null,
            'photo_file' => $photoPath,
            'photo_label' => $data['photo_label'],
            'description' => $data['description'],
            'duty' => $data['duty'],
            'color' => $data['color'],
            'sort_order' => $data['sort_order'],
        ]);

        return redirect()->back()->with('success', 'Aparatur desa berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $official = VillageOfficial::findOrFail($id);

        // Delete photo from storage if it exists
        if ($official->photo_file && Storage::disk('public')->exists(str_replace('/storage/', '', $official->photo_file))) {
            Storage::disk('public')->delete(str_replace('/storage/', '', $official->photo_file));
        }

        $official->delete();

        return redirect()->back()->with('success', 'Aparatur desa berhasil dihapus.');
    }
}
