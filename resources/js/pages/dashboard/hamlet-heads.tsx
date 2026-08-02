import { Head, useForm, router } from '@inertiajs/react';
import { Pencil, Trash2, Plus, MapPin } from 'lucide-react';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { dashboard } from '@/routes';

interface HamletHeadsProps {
    hamletHeads: any[];
}

export default function HamletHeads({ hamletHeads }: HamletHeadsProps) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [editingId, setEditingId] = useState<number | null>(null);
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

    const { data, setData, post, reset, processing, errors } = useForm({
        dusun_number: '',
        dusun_order: '',
        name: '',
        phone: '',
        notes: '',
        photo: null as File | null,
    });

    const openCreateDialog = () => {
        setEditingId(null);
        setPhotoPreview(null);
        reset();
        setIsDialogOpen(true);
    };

    const openEditDialog = (head: any) => {
        setEditingId(head.id);
        setData({
            dusun_number: head.dusun_number || '',
            dusun_order: head.dusun_order ? head.dusun_order.toString() : '',
            name: head.name || '',
            phone: head.phone || '',
            notes: head.notes || '',
            photo: null,
        });
        setPhotoPreview(head.photo_file ? (head.photo_file.startsWith('http') ? head.photo_file : '/storage/' + head.photo_file) : null);
        setIsDialogOpen(true);
    };

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
            setData('photo', file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        
        const url = editingId 
            ? `/dashboard/hamlet-heads/${editingId}`
            : '/dashboard/hamlet-heads';

        post(url, {
            forceFormData: true,
            onSuccess: () => {
                setIsDialogOpen(false);
                reset();
            }
        });
    };

    const deleteHead = (id: number, name: string) => {
        if (confirm(`Apakah Anda yakin ingin menghapus ${name}?`)) {
            router.delete(`/dashboard/hamlet-heads/${id}`);
        }
    };

    return (
        <>
            <Head title="Kelola Kepala Dusun" />
            
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-slate-50 dark:bg-navy-950/20 min-h-screen text-slate-800 dark:text-slate-200">
                <div className="flex justify-between items-center pb-4 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">Kelola Kepala Dusun</h2>
                        <p className="text-xs text-stone-500 mt-1">Atur data dan profil Kepala Dusun 1-11</p>
                    </div>
                    <Button onClick={openCreateDialog} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                        <Plus className="mr-1.5 h-4 w-4" /> Tambah Kepala Dusun
                    </Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {hamletHeads.map((head) => (
                        <div key={head.id} className="bg-white dark:bg-navy-900/40 border border-stone-200 dark:border-navy-800 rounded-lg overflow-hidden group hover:shadow-md transition-shadow">
                            <div className="aspect-[3/4] bg-stone-100 dark:bg-navy-950/50 relative border-b border-stone-200 dark:border-navy-800">
                                {head.photo_file ? (
                                    <img 
                                        src={head.photo_file.startsWith('http') ? head.photo_file : '/storage/' + head.photo_file} 
                                        alt={head.name}
                                        className="w-full h-full object-cover object-top"
                                    />
                                ) : (
                                    <div className="w-full h-full flex flex-col items-center justify-center text-stone-400 dark:text-navy-700 bg-stone-200 dark:bg-navy-900">
                                        <MapPin className="h-12 w-12 mb-2 opacity-50" />
                                        <span className="font-semibold text-lg opacity-75">{head.dusun_number}</span>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                    <Button size="sm" variant="secondary" onClick={() => openEditDialog(head)} className="cursor-pointer">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button size="sm" variant="destructive" onClick={() => deleteHead(head.id, head.name)} className="cursor-pointer">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <div className="p-4">
                                <div className="inline-block px-2 py-1 bg-navy-100 dark:bg-navy-800 text-navy-800 dark:text-navy-100 text-[10px] font-bold rounded-full mb-2">
                                    Dusun {head.dusun_number}
                                </div>
                                <h3 className="font-bold text-sm text-navy-900 dark:text-white line-clamp-1">{head.name}</h3>
                                {head.phone && (
                                    <p className="text-[11px] text-stone-500 dark:text-stone-400 mt-1">{head.phone}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="max-w-xl bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 text-slate-900 dark:text-white max-h-[90vh] overflow-y-auto p-6 rounded-lg">
                        <DialogHeader>
                            <DialogTitle className="text-base font-bold text-navy-900 dark:text-white">
                                {editingId ? 'Edit Kepala Dusun' : 'Tambah Kepala Dusun'}
                            </DialogTitle>
                        </DialogHeader>
                        
                        <form onSubmit={submit} className="space-y-4 text-xs mt-2">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <Label htmlFor="dusun_number">Nomor Dusun (Romawi/Teks)</Label>
                                    <Input 
                                        id="dusun_number" 
                                        value={data.dusun_number} 
                                        onChange={e => setData('dusun_number', e.target.value)}
                                        placeholder="Contoh: I, II, III"
                                        required
                                    />
                                    {errors.dusun_number && <p className="text-[10px] text-red-500">{errors.dusun_number}</p>}
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="dusun_order">Urutan (1-11)</Label>
                                    <Input 
                                        id="dusun_order" 
                                        type="number" 
                                        min="1" max="11"
                                        value={data.dusun_order} 
                                        onChange={e => setData('dusun_order', e.target.value)}
                                        required
                                    />
                                    {errors.dusun_order && <p className="text-[10px] text-red-500">{errors.dusun_order}</p>}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="name">Nama Lengkap</Label>
                                <Input 
                                    id="name" 
                                    value={data.name} 
                                    onChange={e => setData('name', e.target.value)}
                                    placeholder="Nama Kepala Dusun"
                                    required
                                />
                                {errors.name && <p className="text-[10px] text-red-500">{errors.name}</p>}
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="phone">Nomor Telepon/WA (Opsional)</Label>
                                <Input 
                                    id="phone" 
                                    value={data.phone} 
                                    onChange={e => setData('phone', e.target.value)}
                                    placeholder="Contoh: 08123456789"
                                />
                                {errors.phone && <p className="text-[10px] text-red-500">{errors.phone}</p>}
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="notes">Catatan (Opsional)</Label>
                                <textarea 
                                    id="notes" 
                                    rows={3}
                                    className="w-full text-xs p-2 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                    value={data.notes} 
                                    onChange={e => setData('notes', e.target.value)}
                                    placeholder="Informasi tambahan..."
                                />
                                {errors.notes && <p className="text-[10px] text-red-500">{errors.notes}</p>}
                            </div>

                            <div className="space-y-1">
                                <Label htmlFor="photo">Foto Kepala Dusun (Opsional, Max 3MB)</Label>
                                <Input 
                                    id="photo" 
                                    type="file" 
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                />
                                {errors.photo && <p className="text-[10px] text-red-500">{errors.photo}</p>}
                                
                                {photoPreview && (
                                    <div className="mt-4 relative w-32 aspect-[3/4] rounded-md overflow-hidden border border-stone-200 dark:border-navy-800">
                                        <img src={photoPreview} alt="Preview" className="w-full h-full object-cover object-top" />
                                    </div>
                                )}
                            </div>

                            <DialogFooter className="pt-4 border-t border-stone-100 dark:border-navy-800/80 mt-4">
                                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)} className="rounded cursor-pointer">
                                    Batal
                                </Button>
                                <Button type="submit" disabled={processing} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                                    {processing ? 'Menyimpan...' : 'Simpan'}
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}

HamletHeads.layout = {
    breadcrumbs: [
        {
            title: 'Ikhtisar',
            href: dashboard(),
        },
        {
            title: 'Kepala Dusun',
            href: '/dashboard/kadus',
        },
    ],
};
