import { Head, useForm, router } from '@inertiajs/react';
import { Trash2, ShieldCheck, UserPlus } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { dashboard } from '@/routes';

interface AdminsProps {
    admins: any[];
}

export default function Admins({ admins }: AdminsProps) {
    const [isOpen, setIsOpen] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/admins', {
            onSuccess: () => {
                setIsOpen(false);
                reset();
            },
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus akun admin ini? Tindakan ini tidak dapat dibatalkan.')) {
            router.delete(`/dashboard/admins/${id}`);
        }
    };

    return (
        <>
            <Head title="Kelola Admin" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-slate-50 dark:bg-navy-950/20 min-h-screen text-slate-800 dark:text-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">Kelola Admin</h1>
                        <p className="text-xs text-stone-500 mt-1">Kelola akses akun admin untuk mengelola website desa.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-navy-900/40 border border-stone-200 dark:border-navy-800 p-6 rounded-lg shadow-sm">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-navy-800">
                            <div>
                                <h2 className="text-lg font-bold text-navy-900 dark:text-white">Kelola Akun Admin</h2>
                                <p className="text-xs text-stone-500 mt-0.5">
                                    Hanya pengguna dengan akun di sini yang dapat mengakses Panel Administrasi. Registrasi publik dinonaktifkan.
                                </p>
                            </div>
                            <Button onClick={() => setIsOpen(true)} className="bg-red-700 hover:bg-red-800 text-white rounded cursor-pointer shrink-0">
                                <UserPlus className="h-4 w-4 mr-1.5" /> Tambah Admin
                            </Button>
                        </div>

                        {/* Warning banner */}
                        <div className="flex items-start gap-3 p-4 bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800 rounded-lg text-xs text-amber-800 dark:text-amber-400">
                            <ShieldCheck className="h-4 w-4 shrink-0 mt-0.5" />
                            <span>
                                <strong>Hati-hati:</strong> Setiap akun yang terdaftar di sini memiliki akses penuh ke seluruh Panel Administrasi.
                                Anda tidak dapat menghapus akun yang sedang Anda gunakan.
                            </span>
                        </div>

                        {/* Admin list table */}
                        <div className="overflow-x-auto border border-stone-200 dark:border-navy-800 rounded-lg">
                            <table className="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr className="bg-stone-50 dark:bg-navy-950/40 text-stone-600 dark:text-stone-400 font-bold border-b border-stone-200 dark:border-navy-800">
                                        <th className="p-3">Nama</th>
                                        <th className="p-3">Email / Username</th>
                                        <th className="p-3">Terdaftar Sejak</th>
                                        <th className="p-3 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 dark:divide-navy-800/60">
                                    {admins.map((admin) => (
                                        <tr key={admin.id} className="hover:bg-stone-50/50 dark:hover:bg-navy-950/10">
                                            <td className="p-3 font-semibold text-navy-900 dark:text-white">
                                                <div className="flex items-center gap-2">
                                                    <div className="h-7 w-7 rounded-full bg-navy-700 flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                                                        {admin.name?.charAt(0).toUpperCase()}
                                                    </div>
                                                    {admin.name}
                                                </div>
                                            </td>
                                            <td className="p-3 text-stone-500 font-mono">{admin.email}</td>
                                            <td className="p-3 text-stone-400 whitespace-nowrap">
                                                {new Date(admin.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                                            </td>
                                            <td className="p-3 text-right">
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    onClick={() => handleDelete(admin.id)}
                                                    className="rounded h-7 text-[10px] cursor-pointer"
                                                >
                                                    <Trash2 className="h-3 w-3 mr-1" /> Hapus
                                                </Button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Create Admin Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-md bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 text-slate-900 dark:text-white p-6 rounded-lg">
                    <DialogHeader>
                        <DialogTitle className="text-base font-bold text-navy-900 dark:text-white">
                            Buat Akun Admin Baru
                        </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSave} className="space-y-4 text-xs">
                        <div className="space-y-1">
                            <Label htmlFor="admin_name">Nama Lengkap</Label>
                            <Input
                                id="admin_name"
                                value={data.name}
                                onChange={e => setData('name', e.target.value)}
                                placeholder="cth. I Ketut Administrator"
                                required
                            />
                            {errors.name && <span className="text-[10px] text-red-500">{errors.name}</span>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="admin_email">Alamat Email (untuk login)</Label>
                            <Input
                                id="admin_email"
                                type="email"
                                value={data.email}
                                onChange={e => setData('email', e.target.value)}
                                placeholder="cth. admin2@desatolai.go.id"
                                required
                            />
                            {errors.email && <span className="text-[10px] text-red-500">{errors.email}</span>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="admin_password">Kata Sandi (minimal 8 karakter)</Label>
                            <Input
                                id="admin_password"
                                type="password"
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                                required
                            />
                            {errors.password && <span className="text-[10px] text-red-500">{errors.password}</span>}
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="admin_password_confirmation">Konfirmasi Kata Sandi</Label>
                            <Input
                                id="admin_password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={e => setData('password_confirmation', e.target.value)}
                                required
                            />
                        </div>

                        <DialogFooter className="pt-4 border-t border-stone-100 dark:border-navy-800/80">
                            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="rounded cursor-pointer">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-red-700 hover:bg-red-800 text-white rounded cursor-pointer">
                                Buat Akun Admin
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

Admins.layout = {
    breadcrumbs: [
        {
            title: 'Ikhtisar',
            href: dashboard(),
        },
        {
            title: 'Kelola Admin',
            href: '/dashboard/admin-akun',
        },
    ],
};
