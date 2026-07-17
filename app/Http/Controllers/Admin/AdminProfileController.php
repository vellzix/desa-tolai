<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\VillageProfile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminProfileController extends Controller
{
    public function update(Request $request)
    {
        $profile = VillageProfile::firstOrCreate([], [
            'welcome_title' => 'Portal Informasi Desa Tolai',
            'welcome_text' => '',
            'history_text' => '',
            'vision' => '',
            'missions' => [],
        ]);

        $data = $request->validate([
            'welcome_title' => 'required|string|max:255',
            'welcome_text' => 'required|string',
            'welcome_kades_name' => 'required|string|max:255',
            'welcome_kades_photo_file' => 'nullable|image|max:2048',
            'history_text' => 'required|string',
            'vision' => 'required|string',
            'missions' => 'required|array',
            'phone' => 'nullable|string|max:50',
            'email' => 'nullable|email|max:255',
            'address' => 'nullable|string',
            'timings' => 'nullable|string|max:255',
        ]);

        if ($request->hasFile('welcome_kades_photo_file')) {
            // Delete old photo if it exists and is custom
            if ($profile->welcome_kades_photo && Storage::disk('public')->exists(str_replace('/storage/', '', $profile->welcome_kades_photo))) {
                Storage::disk('public')->delete(str_replace('/storage/', '', $profile->welcome_kades_photo));
            }
            $path = $request->file('welcome_kades_photo_file')->store('kades', 'public');
            $profile->welcome_kades_photo = '/storage/' . $path;
        }

        $profile->update([
            'welcome_title' => $data['welcome_title'],
            'welcome_text' => $data['welcome_text'],
            'welcome_kades_name' => $data['welcome_kades_name'],
            'history_text' => $data['history_text'],
            'vision' => $data['vision'],
            'missions' => $data['missions'],
            'phone' => $data['phone'] ?? null,
            'email' => $data['email'] ?? null,
            'address' => $data['address'] ?? null,
            'timings' => $data['timings'] ?? null,
        ]);

        return redirect()->back()->with('success', 'Profil desa berhasil diperbarui.');
    }
}
