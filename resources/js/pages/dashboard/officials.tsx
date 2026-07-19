import { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Plus, Trash2, Edit3 } from 'lucide-react';
import { dashboard } from '@/routes';

interface OfficialsProps {
    officials: any[];
}

export default function Officials({ officials }: OfficialsProps) {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editingOfficial, setEditingOfficial] = useState<any | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        role: '',
        nip: '',
        photo_file_upload: null as any,
        photo_label: '',
        description: '',
        duty: [] as string[],
        color: 'bg-navy-600',
        sort_order: 1,
    });

    const [newDuty, setNewDuty] = useState('');

    const handleAddDuty = () => {
        if (!newDuty.trim()) return;
        setData('duty', [...data.duty, newDuty.trim()]);
        setNewDuty('');
    };

    const handleRemoveDuty = (index: number) => {
        setData('duty', data.duty.filter((_, idx) => idx !== index));
    };

    const handleOpenAdd = () => {
        reset();
        setEditingOfficial(null);
        setIsAddOpen(true);
    };

    const handleOpenEdit = (official: any) => {
        setEditingOfficial(official);
        const parsedDuties = Array.isArray(official.duty) ? official.duty : JSON.parse(official.duty || '[]');
        setData({
            name: official.name,
            role: official.role,
            nip: official.nip || '',
            photo_file_upload: null,
            photo_label: official.photo_label,
            description: official.description,
            duty: parsedDuties,
            color: official.color,
            sort_order: official.sort_order,
        });
        setIsAddOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingOfficial) {
            post(`/dashboard/officials/${editingOfficial.id}`, {
                onSuccess: () => {
                    setIsAddOpen(false);
                    reset();
                }
            });
        } else {
            post('/dashboard/officials', {
                onSuccess: () => {
                    setIsAddOpen(false);
                    reset();
                }
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus aparatur desa ini?')) {
            router.delete(`/dashboard/officials/${id}`);
        }
    };

    return (
        <>
            <Head title="Aparatur Desa" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-slate-50 dark:bg-navy-950/20 min-h-screen text-slate-800 dark:text-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">Aparatur Desa</h1>
                        <p className="text-xs text-stone-500 mt-1">Kelola data aparatur dan struktur organisasi desa.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-navy-900/40 border border-stone-200 dark:border-navy-800 p-6 rounded-lg shadow-sm">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-navy-800">
                            <h2 className="text-lg font-bold text-navy-900 dark:text-white">
                                Kelola Aparatur Desa
                            </h2>
                            <Button onClick={handleOpenAdd} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                                <Plus className="h-4 w-4 mr-1.5" /> Tambah Aparatur
                            </Button>
                        </div>

                        {/* Grid display */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {officials.map((official) => (
                                <div key={official.id} className="bg-stone-50 dark:bg-navy-950/20 border border-stone-200 dark:border-navy-800 p-4 flex flex-col justify-between rounded-lg">
                                    <div className="flex gap-3 items-start mb-4">
                                        <div className="h-16 w-12 bg-stone-200 shrink-0 overflow-hidden border">
                                            {official.photo_file ? (
                                                <img src={official.photo_file} className="h-full w-full object-cover object-top" alt={official.name} />
                                            ) : (
                                                <div className="h-full w-full flex items-center justify-center text-xs font-bold text-slate-400 bg-slate-100">
                                                    {official.photo_label}
                                                </div>
                                            )}
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-xs font-bold text-navy-900 dark:text-white leading-tight truncate">{official.name}</h4>
                                            <p className="text-[10px] text-navy-600 dark:text-gold-400 font-semibold mt-0.5">{official.role}</p>
                                            {official.nip && <p className="text-[9px] text-stone-400 mt-0.5">NIP: {official.nip}</p>}
                                        </div>
                                    </div>

                                    <div className="flex gap-2 border-t border-stone-200 dark:border-navy-800/60 pt-3">
                                        <Button 
                                            variant="outline" 
                                            size="sm" 
                                            onClick={() => handleOpenEdit(official)}
                                            className="flex-1 rounded border-stone-300 dark:border-navy-700 text-stone-600 dark:text-stone-300 text-[10px] h-7 cursor-pointer"
                                        >
                                            <Edit3 className="h-3 w-3 mr-1" /> Edit
                                        </Button>
                                        <Button 
                                            variant="destructive" 
                                            size="sm" 
                                            onClick={() => handleDelete(official.id)}
                                            className="rounded text-[10px] h-7 cursor-pointer"
                                        >
                                            <Trash2 className="h-3 w-3 mr-1" /> Hapus
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Form Dialog */}
            <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
                <DialogContent className="max-w-xl bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 text-slate-900 dark:text-white max-h-[90vh] overflow-y-auto p-6 rounded-lg">
                    <DialogHeader>
                        <DialogTitle className="text-base font-bold text-navy-900 dark:text-white">
                            {editingOfficial ? 'Edit Aparatur Desa' : 'Tambah Aparatur Desa Baru'}
                        </DialogTitle>
                    </DialogHeader>
                    
                    <form onSubmit={handleSave} className="space-y-4 text-xs">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="name">Nama Lengkap & Gelar</Label>
                                <Input id="name" value={data.name} onChange={e => setData('name', e.target.value)} required />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="role">Jabatan / Role</Label>
                                <Input id="role" value={data.role} onChange={e => setData('role', e.target.value)} required />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="nip">NIP (Optional)</Label>
                                <Input id="nip" value={data.nip} onChange={e => setData('nip', e.target.value)} />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="photo_label">Inisial / Label Foto (Max 5 huruf)</Label>
                                <Input id="photo_label" value={data.photo_label} onChange={e => setData('photo_label', e.target.value)} required />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="sort_order">Urutan Tampilan</Label>
                                <Input id="sort_order" type="number" value={data.sort_order} onChange={e => setData('sort_order', parseInt(e.target.value))} required />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="photo_file_upload">Upload Foto (Max 2MB)</Label>
                                <Input id="photo_file_upload" type="file" onChange={e => setData('photo_file_upload', e.target.files?.[0] as any)} />
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="description">Deskripsi Singkat Profil</Label>
                            <textarea
                                id="description"
                                rows={2}
                                className="w-full text-xs p-2 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2 border-t border-stone-200 dark:border-navy-800 pt-3">
                            <Label>Tugas & Tanggung Jawab Utama</Label>
                            <div className="space-y-1.5 max-h-36 overflow-y-auto">
                                {data.duty.map((task: string, idx: number) => (
                                    <div key={idx} className="flex gap-2 items-center bg-stone-50 dark:bg-navy-900 p-2 border border-stone-200 dark:border-navy-800">
                                        <span className="flex-1 text-[11px]">{task}</span>
                                        <button type="button" onClick={() => handleRemoveDuty(idx)} className="text-red-500 hover:text-red-700">
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Input placeholder="Tulis tugas baru..." value={newDuty} onChange={e => setNewDuty(e.target.value)} />
                                <Button type="button" onClick={handleAddDuty} className="bg-navy-700 hover:bg-navy-800 text-white rounded shrink-0 cursor-pointer">
                                    Tambah
                                </Button>
                            </div>
                        </div>

                        <DialogFooter className="pt-4 border-t border-stone-100 dark:border-navy-800/80">
                            <Button type="button" variant="outline" onClick={() => setIsAddOpen(false)} className="rounded cursor-pointer">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                                Simpan Aparatur
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

Officials.layout = {
    breadcrumbs: [
        {
            title: 'Ikhtisar',
            href: dashboard(),
        },
        {
            title: 'Aparatur Desa',
            href: '/dashboard/aparatur',
        },
    ],
};
