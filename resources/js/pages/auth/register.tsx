import { Head } from '@inertiajs/react';
import { useEffect } from 'react';
import { router } from '@inertiajs/react';

/**
 * Halaman registrasi publik dinonaktifkan.
 * Akun admin hanya bisa dibuat melalui Panel Administrasi oleh admin yang sudah login.
 */
export default function Register() {
    useEffect(() => {
        router.replace('/login');
    }, []);

    return (
        <>
            <Head title="Registrasi Tidak Tersedia" />
            <div className="flex min-h-screen items-center justify-center text-sm text-stone-500">
                Mengalihkan ke halaman login...
            </div>
        </>
    );
}
