import { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Plus, Trash2 } from 'lucide-react';
import { dashboard } from '@/routes';

interface GalleryProps {
    galleries: any[];
}

export default function Gallery({ galleries }: GalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        image_upload: null as any,
        category: 'kegiatan',
    });

    const handleOpenAdd = () => {
        reset();
        setIsOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/galleries', {
            onSuccess: () => {
                setIsOpen(false);
                reset();
            }
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus foto galeri ini?')) {
            router.delete(`/dashboard/galleries/${id}`);
        }
    };

    return (
        <>
            <Head title="Galeri Dokumentasi" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-slate-50 dark:bg-navy-950/20 min-h-screen text-slate-800 dark:text-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">Galeri Dokumentasi</h1>
                        <p className="text-xs text-stone-500 mt-1">Kelola foto-foto kegiatan, pembangunan, dan fasilitas desa.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-navy-900/40 border border-stone-200 dark:border-navy-800 p-6 rounded-lg shadow-sm">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-navy-800">
                            <h2 className="text-lg font-bold text-navy-900 dark:text-white">
                                Kelola Galeri Dokumentasi Foto
                            </h2>
                            <Button onClick={handleOpenAdd} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                                <Plus className="h-4 w-4 mr-1.5" /> Upload Foto Baru
                            </Button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                            {galleries.map((g) => (
                                <div key={g.id} className="relative group aspect-[4/3] overflow-hidden border border-stone-200 dark:border-navy-800 rounded bg-stone-100 dark:bg-navy-950">
                                    <img src={g.image_path} className="w-full h-full object-cover" alt={g.title} />
                                    
                                    <div className="absolute inset-0 bg-navy-950/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3 text-white">
                                        <div>
                                            <h4 className="text-xs font-bold leading-tight truncate">{g.title}</h4>
                                            <p className="text-[10px] text-navy-300 mt-1 capitalize">{g.category}</p>
                                        </div>
                                        <Button 
                                            variant="destructive" 
                                            size="sm" 
                                            onClick={() => handleDelete(g.id)}
                                            className="w-full text-[10px] h-7 rounded cursor-pointer"
                                        >
                                            <Trash2 className="h-3 w-3 mr-1" /> Hapus Foto
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Upload Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-md bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 text-slate-900 dark:text-white p-6 rounded-lg">
                    <DialogHeader>
                        <DialogTitle className="text-base font-bold text-navy-900 dark:text-white">
                            Upload Foto Galeri Baru
                        </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSave} className="space-y-4 text-xs">
                        <div className="space-y-1">
                            <Label htmlFor="gal_title">Judul Foto / Kegiatan</Label>
                            <Input id="gal_title" value={data.title} onChange={e => setData('title', e.target.value)} required />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="gal_category">Kategori</Label>
                                <select 
                                    id="gal_category" 
                                    className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                    value={data.category} 
                                    onChange={e => setData('category', e.target.value)}
                                    required
                                >
                                    <option value="kegiatan">Kegiatan Desa</option>
                                    <option value="pembangunan">Pembangunan</option>
                                    <option value="budaya">Budaya & Event</option>
                                    <option value="fasilitas">Fasilitas Umum</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="image_upload">Pilih Foto (Max 3MB)</Label>
                                <Input id="image_upload" type="file" onChange={e => setData('image_upload', e.target.files?.[0] as any)} required />
                                {errors.image_upload && <span className="text-[9px] text-red-500">{errors.image_upload}</span>}
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="gal_desc">Keterangan / Keterangan Singkat</Label>
                            <textarea
                                id="gal_desc"
                                rows={3}
                                className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                            />
                        </div>

                        <DialogFooter className="pt-4 border-t border-stone-100 dark:border-navy-800/80">
                            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="rounded cursor-pointer">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                                Upload Foto
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

Gallery.layout = {
    breadcrumbs: [
        {
            title: 'Ikhtisar',
            href: dashboard(),
        },
        {
            title: 'Galeri Dokumentasi',
            href: '/dashboard/galeri',
        },
    ],
};
