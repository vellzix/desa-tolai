<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VillageHamletHead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminHamletHeadController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'dusun_number' => 'required|string|max:255',
            'dusun_order' => 'required|integer|min:1|max:11',
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:255',
            'notes' => 'nullable|string',
            'photo' => 'nullable|image|max:3072',
        ]);

        $data = $validated;
        
        if ($request->hasFile('photo')) {
            $path = $request->file('photo')->store('perangkat-desa', 'public');
            $data['photo_file'] = $path;
        }

        VillageHamletHead::create($data);

        return redirect()->back()->with('success', 'Kepala Dusun berhasil ditambahkan.');
    }

    public function update(Request $request, $id)
    {
        $head = VillageHamletHead::findOrFail($id);

        $validated = $request->validate([
            'dusun_number' => 'required|string|max:255',
            'dusun_order' => 'required|integer|min:1|max:11',
            'name' => 'required|string|max:255',
            'phone' => 'nullable|string|max:255',
            'notes' => 'nullable|string',
            'photo' => 'nullable|image|max:3072',
        ]);

        $data = $validated;

        if ($request->hasFile('photo')) {
            if ($head->photo_file) {
                Storage::disk('public')->delete($head->photo_file);
            }
            $path = $request->file('photo')->store('perangkat-desa', 'public');
            $data['photo_file'] = $path;
        }

        $head->update($data);

        return redirect()->back()->with('success', 'Kepala Dusun berhasil diperbarui.');
    }

    public function destroy($id)
    {
        $head = VillageHamletHead::findOrFail($id);

        if ($head->photo_file) {
            Storage::disk('public')->delete($head->photo_file);
        }

        $head->delete();

        return redirect()->back()->with('success', 'Kepala Dusun berhasil dihapus.');
    }
}
