import { Head, useForm, router } from '@inertiajs/react';
import { Plus, Trash2, ChevronRight, ImageIcon, Upload, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { dashboard } from '@/routes';

interface PotentialsProps {
    potentials: any[];
}

function getImageUrl(path: string | null) {
    if (!path) {
return null;
}

    if (path.startsWith('http')) {
return path;
}

    return `/storage/${path}`;
}

export default function Potentials({ potentials }: PotentialsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [editingPotential, setEditingPotential] = useState<any | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        badge: '',
        description: '',
        details: [] as string[],
        category: 'economy',
        icon: 'Wheat',
        image: null as File | null,
    });

    const [detailInput, setDetailInput] = useState('');

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setData('image', file);

        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleClearImage = () => {
        setData('image', null);
        setImagePreview(null);
    };

    const handleAddDetail = () => {
        if (!detailInput.trim()) {
return;
}

        setData('details', [...data.details, detailInput.trim()]);
        setDetailInput('');
    };

    const handleRemoveDetail = (index: number) => {
        setData('details', data.details.filter((_, idx) => idx !== index));
    };

    const handleOpenAdd = () => {
        reset();
        setImagePreview(null);
        setEditingPotential(null);
        setIsOpen(true);
    };

    const handleOpenEdit = (p: any) => {
        setEditingPotential(p);
        const parsedDetails = Array.isArray(p.details) ? p.details : JSON.parse(p.details || '[]');
        setData({
            title: p.title,
            badge: p.badge,
            description: p.description,
            details: parsedDetails,
            category: p.category,
            icon: p.icon,
            image: null,
        });
        setImagePreview(null);
        setIsOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        const url = editingPotential
            ? `/dashboard/potentials/${editingPotential.id}`
            : '/dashboard/potentials';

        post(url, {
            forceFormData: true,
            onSuccess: () => {
                setIsOpen(false);
                reset();
                setImagePreview(null);
            },
        });
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus potensi desa ini? Gambar terkait juga akan dihapus.')) {
            router.delete(`/dashboard/potentials/${id}`);
        }
    };

    return (
        <>
            <Head title="Potensi Wilayah" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-slate-50 dark:bg-navy-950/20 min-h-screen text-slate-800 dark:text-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">Potensi Wilayah</h1>
                        <p className="text-xs text-stone-500 mt-1">Kelola data potensi ekonomi, budaya, dan agraria desa — lengkap dengan gambar ilustrasi.</p>
                    </div>
                    <Button onClick={handleOpenAdd} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer shrink-0">
                        <Plus className="h-4 w-4 mr-1.5" /> Tambah Potensi
                    </Button>
                </div>

                {potentials.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-stone-400 border border-dashed border-stone-200 dark:border-navy-800 rounded-lg">
                        <ImageIcon className="h-10 w-10 mb-3 opacity-30" />
                        <p className="text-sm font-medium">Belum ada data potensi wilayah.</p>
                        <Button onClick={handleOpenAdd} variant="outline" className="mt-4 text-xs rounded cursor-pointer">
                            <Plus className="h-3.5 w-3.5 mr-1" /> Tambah Potensi Pertama
                        </Button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {potentials.map((p) => {
                            const details = Array.isArray(p.details) ? p.details : JSON.parse(p.details || '[]');
                            const imgUrl = getImageUrl(p.image_path);

                            return (
                                <div key={p.id} className="bg-white dark:bg-navy-900/40 border border-stone-200 dark:border-navy-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
                                    {/* Gambar */}
                                    {imgUrl ? (
                                        <div className="relative h-56 overflow-hidden bg-stone-100 dark:bg-navy-950">
                                            <img
                                                src={imgUrl}
                                                alt={p.title}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                                            <div className="absolute bottom-3 left-4 flex gap-2">
                                                <span className="px-2.5 py-1 rounded-full bg-white/95 text-navy-800 text-xs font-bold uppercase tracking-wider shadow">
                                                    {p.badge}
                                                </span>
                                                <span className="px-2.5 py-1 rounded-full bg-white/85 text-stone-700 text-xs font-semibold shadow">
                                                    {p.category === 'economy' ? 'Ekonomi' : 'Budaya'}
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-36 bg-gradient-to-br from-stone-100 to-stone-200 dark:from-navy-950/60 dark:to-navy-900/60 flex items-center justify-center">
                                            <ImageIcon className="h-10 w-10 text-stone-300 dark:text-navy-700" />
                                        </div>
                                    )}

                                    {/* Konten */}
                                    <div className="p-5 flex flex-col flex-1">
                                        {!imgUrl && (
                                            <div className="flex gap-2 mb-3">
                                                <span className="px-2.5 py-1 rounded bg-navy-100 dark:bg-navy-800 text-navy-800 dark:text-navy-200 text-xs font-bold uppercase tracking-wider">{p.badge}</span>
                                                <span className="text-xs text-stone-400 self-center capitalize">{p.category === 'economy' ? 'Ekonomi' : 'Budaya'}</span>
                                            </div>
                                        )}
                                        <h3 className="text-base font-bold text-navy-900 dark:text-white">{p.title}</h3>
                                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 line-clamp-3 leading-relaxed">{p.description}</p>

                                        <ul className="mt-4 space-y-1.5 text-xs text-stone-500 dark:text-stone-400 flex-1">
                                            {details.map((d: string, idx: number) => (
                                                <li key={idx} className="flex gap-2 items-start">
                                                    <ChevronRight className="h-3.5 w-3.5 text-navy-500 shrink-0 mt-0.5" />
                                                    <span>{d}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex gap-3 border-t border-stone-200 dark:border-navy-800/60 pt-4 mt-5">
                                            <Button variant="outline" size="sm" onClick={() => handleOpenEdit(p)} className="flex-1 rounded-lg h-9 text-xs font-medium cursor-pointer">
                                                Edit
                                            </Button>
                                            <Button variant="destructive" size="sm" onClick={() => handleDelete(p.id)} className="rounded-lg h-9 text-xs font-medium cursor-pointer">
                                                Hapus
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Dialog Form */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-lg bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 text-slate-900 dark:text-white p-6 rounded-lg max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle className="text-base font-bold text-navy-900 dark:text-white">
                            {editingPotential ? 'Edit Data Potensi' : 'Tambah Potensi Desa Baru'}
                        </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSave} className="space-y-4 text-xs">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="pot_title">Nama Potensi</Label>
                                <Input id="pot_title" value={data.title} onChange={e => setData('title', e.target.value)} required />
                                {errors.title && <span className="text-[10px] text-red-500">{errors.title}</span>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="pot_badge">Label Badge (misal: 'Pertanian')</Label>
                                <Input id="pot_badge" value={data.badge} onChange={e => setData('badge', e.target.value)} required />
                                {errors.badge && <span className="text-[10px] text-red-500">{errors.badge}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="pot_category">Kategori Utama</Label>
                                <select
                                    id="pot_category"
                                    className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                    value={data.category}
                                    onChange={e => setData('category', e.target.value as any)}
                                    required
                                >
                                    <option value="economy">Ekonomi & Agraris</option>
                                    <option value="culture">Kebudayaan & Religi</option>
                                </select>
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="pot_icon">Ikon</Label>
                                <select
                                    id="pot_icon"
                                    className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                    value={data.icon}
                                    onChange={e => setData('icon', e.target.value)}
                                    required
                                >
                                    <option value="Wheat">Wheat (Padi/Gandum)</option>
                                    <option value="Sprout">Sprout (Kakao/Tanaman)</option>
                                    <option value="Landmark">Landmark (Kantor/Pura)</option>
                                    <option value="Award">Award (Festival/Penghargaan)</option>
                                    <option value="Users">Users (Sanggar/Masyarakat)</option>
                                    <option value="Heart">Heart (Toleransi/Kasih)</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="pot_desc">Deskripsi Potensi</Label>
                            <textarea
                                id="pot_desc"
                                rows={3}
                                className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                value={data.description}
                                onChange={e => setData('description', e.target.value)}
                                required
                            />
                            {errors.description && <span className="text-[10px] text-red-500">{errors.description}</span>}
                        </div>

                        {/* Upload Gambar */}
                        <div className="space-y-2 border-t border-stone-200 dark:border-navy-800 pt-3">
                            <Label>Gambar Ilustrasi <span className="text-stone-400 font-normal">(opsional, maks. 3 MB)</span></Label>

                            {/* Preview gambar yang sudah ada (mode edit) */}
                            {editingPotential?.image_path && !imagePreview && (
                                <div className="relative w-full h-36 rounded-lg overflow-hidden border border-stone-200 dark:border-navy-800 bg-stone-50">
                                    <img
                                        src={getImageUrl(editingPotential.image_path)!}
                                        alt="Gambar saat ini"
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute top-2 left-2 bg-black/50 text-white text-[9px] px-2 py-0.5 rounded">
                                        Gambar saat ini
                                    </div>
                                </div>
                            )}

                            {/* Preview gambar baru */}
                            {imagePreview && (
                                <div className="relative w-full h-36 rounded-lg overflow-hidden border border-emerald-200 dark:border-emerald-800 bg-stone-50">
                                    <img
                                        src={imagePreview}
                                        alt="Preview"
                                        className="w-full h-full object-cover"
                                    />
                                    <button
                                        type="button"
                                        onClick={handleClearImage}
                                        className="absolute top-2 right-2 bg-black/60 hover:bg-red-600 text-white rounded-full p-1 transition-colors"
                                    >
                                        <X className="h-3.5 w-3.5" />
                                    </button>
                                    <div className="absolute top-2 left-2 bg-emerald-500/80 text-white text-[9px] px-2 py-0.5 rounded">
                                        Gambar baru
                                    </div>
                                </div>
                            )}

                            <label
                                htmlFor="pot_image"
                                className="flex items-center gap-2 p-3 border border-dashed border-stone-300 dark:border-navy-700 rounded-lg cursor-pointer hover:bg-stone-50 dark:hover:bg-navy-900 transition-colors"
                            >
                                <Upload className="h-4 w-4 text-stone-400" />
                                <span className="text-stone-500">
                                    {imagePreview ? 'Ganti gambar...' : (editingPotential?.image_path ? 'Ganti gambar saat ini...' : 'Pilih gambar...')}
                                </span>
                            </label>
                            <input
                                id="pot_image"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                            {errors.image && <span className="text-[10px] text-red-500">{errors.image}</span>}
                        </div>

                        {/* Bullet points */}
                        <div className="space-y-2 border-t border-stone-200 dark:border-navy-800 pt-3">
                            <Label>Rincian Data Pendukung (Bullet Points)</Label>
                            <div className="space-y-1">
                                {data.details.map((d: string, idx: number) => (
                                    <div key={idx} className="flex gap-2 items-center bg-stone-50 dark:bg-navy-900 p-2 rounded border border-stone-200 dark:border-navy-800">
                                        <span className="flex-1 text-[11px]">{d}</span>
                                        <button type="button" onClick={() => handleRemoveDetail(idx)} className="text-red-500 hover:text-red-700">
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Input
                                    placeholder="Tulis rincian data baru..."
                                    value={detailInput}
                                    onChange={e => setDetailInput(e.target.value)}
                                    onKeyDown={e => {
 if (e.key === 'Enter') {
 e.preventDefault(); handleAddDetail(); 
} 
}}
                                />
                                <Button type="button" onClick={handleAddDetail} className="bg-navy-700 hover:bg-navy-800 text-white rounded shrink-0 cursor-pointer">
                                    Tambah
                                </Button>
                            </div>
                        </div>

                        <DialogFooter className="pt-4 border-t border-stone-100 dark:border-navy-800/80">
                            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="rounded cursor-pointer">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                                {processing ? 'Menyimpan...' : 'Simpan Potensi'}
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

Potentials.layout = {
    breadcrumbs: [
        { title: 'Ikhtisar', href: dashboard() },
        { title: 'Potensi Wilayah', href: '/dashboard/potensi' },
    ],
};
