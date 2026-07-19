<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;

class AdminUserController extends Controller
{
    /**
     * Create a new admin account.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'name'     => 'required|string|max:255',
            'email'    => 'required|email|max:255|unique:users,email',
            'password' => ['required', 'confirmed', Password::min(8)],
        ]);

        User::create([
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return redirect()->back()->with('success', 'Akun admin baru berhasil dibuat.');
    }

    /**
     * Delete an admin account (cannot delete own account).
     */
    public function destroy(Request $request, $id)
    {
        $target = User::findOrFail($id);

        if ($target->id === $request->user()->id) {
            return redirect()->back()->withErrors(['delete' => 'Anda tidak dapat menghapus akun Anda sendiri.']);
        }

        $target->delete();

        return redirect()->back()->with('success', 'Akun admin berhasil dihapus.');
    }
}
