import { Head, useForm, router } from '@inertiajs/react';
import { Plus, Trash2, Edit3 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { dashboard } from '@/routes';

interface NewsProps {
    news: any[];
}

export default function News({ news }: NewsProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [editingNews, setEditingNews] = useState<any | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        category: 'berita',
        date: '',
        excerpt: '',
        news_image_file: null as any,
        additional_images_files: [] as File[],
        content: '',
        tags: [] as string[],
        existing_additional_images: [] as string[],
    });

    const [tagInput, setTagInput] = useState('');

    const handleAddTag = () => {
        if (!tagInput.trim()) {
            return;
        }

        if (!data.tags.includes(tagInput.trim())) {
            setData('tags', [...data.tags, tagInput.trim()]);
        }

        setTagInput('');
    };

    const handleRemoveTag = (t: string) => {
        setData('tags', data.tags.filter(tag => tag !== t));
    };

    const handleOpenAdd = () => {
        reset();
        setEditingNews(null);
        setIsOpen(true);
    };

    const handleOpenEdit = (item: any) => {
        setEditingNews(item);
        const parsedTags = Array.isArray(item.tags) ? item.tags : JSON.parse(item.tags || '[]');
        const parsedAdditionalImages = Array.isArray(item.additional_images) ? item.additional_images : JSON.parse(item.additional_images || '[]');
        setData({
            title: item.title,
            category: item.category,
            date: item.date,
            excerpt: item.excerpt,
            news_image_file: null,
            additional_images_files: [],
            content: item.content || '',
            tags: parsedTags,
            existing_additional_images: parsedAdditionalImages,
        });
        setIsOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingNews) {
            post(`/dashboard/news/${editingNews.id}`, {
                onSuccess: () => {
                    setIsOpen(false);
                    reset();
                }
            });
        } else {
            post('/dashboard/news', {
                onSuccess: () => {
                    setIsOpen(false);
                    reset();
                }
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus kabar desa ini?')) {
            router.delete(`/dashboard/news/${id}`);
        }
    };

    return (
        <>
            <Head title="Kabar & Berita" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-slate-50 dark:bg-navy-950/20 min-h-screen text-slate-800 dark:text-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">Kabar & Berita</h1>
                        <p className="text-xs text-stone-500 mt-1">Kelola berita, pengumuman, dan agenda kegiatan desa.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-navy-900/40 border border-stone-200 dark:border-navy-800 p-6 rounded-lg shadow-sm">
                    <div className="space-y-6">
                        <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-navy-800">
                            <h2 className="text-lg font-bold text-navy-900 dark:text-white">
                                Kelola Kabar, Pengumuman & Agenda Desa
                            </h2>
                            <Button onClick={handleOpenAdd} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                                <Plus className="h-4 w-4 mr-1.5" /> Tulis Kabar
                            </Button>
                        </div>

                        {/* List Table */}
                        <div className="overflow-x-auto border border-stone-200 dark:border-navy-800 rounded-lg">
                            <table className="w-full text-left border-collapse text-xs">
                                <thead>
                                    <tr className="bg-stone-50 dark:bg-navy-950/40 text-stone-600 dark:text-stone-400 font-bold border-b border-stone-200 dark:border-navy-800">
                                        <th className="p-3">Tanggal</th>
                                        <th className="p-3">Judul Berita</th>
                                        <th className="p-3">Kategori</th>
                                        <th className="p-3">Tags</th>
                                        <th className="p-3 text-right">Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-stone-200 dark:divide-navy-800/60">
                                    {news.map((item) => {
                                        const tags = Array.isArray(item.tags) ? item.tags : JSON.parse(item.tags || '[]');

                                        return (
                                            <tr key={item.id} className="hover:bg-stone-50/50 dark:hover:bg-navy-950/10">
                                                <td className="p-3 whitespace-nowrap text-stone-500">{item.date}</td>
                                                <td className="p-3 font-semibold text-navy-900 dark:text-white max-w-sm truncate">{item.title}</td>
                                                <td className="p-3">
                                                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                                                        item.category === 'berita' 
                                                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' 
                                                            : item.category === 'pengumuman' 
                                                            ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400' 
                                                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400'
                                                    }`}>
                                                        {item.category}
                                                    </span>
                                                </td>
                                                <td className="p-3">
                                                    <div className="flex flex-wrap gap-1">
                                                        {tags.map((tag: string, index: number) => (
                                                            <span key={index} className="px-1.5 py-0.5 bg-stone-100 dark:bg-navy-950 text-stone-500 rounded text-[9px]">{tag}</span>
                                                        ))}
                                                    </div>
                                                </td>
                                                <td className="p-3 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <Button variant="outline" size="sm" onClick={() => handleOpenEdit(item)} className="rounded h-7 text-[10px] cursor-pointer">
                                                            <Edit3 className="h-3 w-3 mr-0.5" /> Edit
                                                        </Button>
                                                        <Button variant="destructive" size="sm" onClick={() => handleDelete(item.id)} className="rounded h-7 text-[10px] cursor-pointer">
                                                            <Trash2 className="h-3 w-3 mr-0.5" /> Hapus
                                                        </Button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* News Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-2xl bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 text-slate-900 dark:text-white max-h-[90vh] overflow-y-auto p-6 rounded-lg">
                    <DialogHeader>
                        <DialogTitle className="text-base font-bold text-navy-900 dark:text-white">
                            {editingNews ? 'Edit Kabar/Berita Desa' : 'Tulis Kabar Desa Baru'}
                        </DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSave} className="space-y-4 text-xs">
                        <div className="space-y-1">
                            <Label htmlFor="news_title">Judul Berita/Pengumuman</Label>
                            <Input id="news_title" value={data.title} onChange={e => setData('title', e.target.value)} required />
                            {errors.title && <span className="text-[10px] text-red-500">{errors.title}</span>}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="news_category">Kategori</Label>
                                <select 
                                    id="news_category" 
                                    className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                    value={data.category} 
                                    onChange={e => setData('category', e.target.value as any)}
                                    required
                                >
                                    <option value="berita">Berita</option>
                                    <option value="pengumuman">Pengumuman</option>
                                    <option value="agenda">Agenda Kegiatan</option>
                                </select>
                                {errors.category && <span className="text-[10px] text-red-500">{errors.category}</span>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="news_date">Tanggal Publikasi (Format Bebas, misal: '15 Juli 2026')</Label>
                                <Input id="news_date" value={data.date} onChange={e => setData('date', e.target.value)} required />
                                {errors.date && <span className="text-[10px] text-red-500">{errors.date}</span>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1">
                                <Label htmlFor="news_excerpt">Ringkasan Singkat (Excerpt)</Label>
                                <textarea
                                    id="news_excerpt"
                                    rows={2}
                                    className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                    value={data.excerpt}
                                    onChange={e => setData('excerpt', e.target.value)}
                                    required
                                />
                                {errors.excerpt && <span className="text-[10px] text-red-500">{errors.excerpt}</span>}
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="news_image_file">Gambar Utama Berita (Max 3MB, Opsional)</Label>
                                <div className="flex gap-3 items-center">
                                    {editingNews?.image_path && (
                                        <img src={editingNews.image_path} className="h-12 w-16 object-cover border" alt="Thumbnail" />
                                    )}
                                    <Input 
                                        id="news_image_file" 
                                        type="file" 
                                        onChange={e => setData('news_image_file', e.target.files?.[0] as any)} 
                                    />
                                </div>
                                {errors.news_image_file && <span className="text-[10px] text-red-500">{errors.news_image_file}</span>}
                            </div>
                        </div>

                        <div className="space-y-1">
                            <Label htmlFor="additional_images_files">Gambar Tambahan / Pendukung (Bisa Pilih Banyak, Max 3MB/file, Opsional)</Label>
                            <Input 
                                id="additional_images_files" 
                                type="file" 
                                multiple 
                                onChange={e => {
                                    const files = Array.from(e.target.files || []);
                                    setData('additional_images_files', files as any);
                                }} 
                            />
                            {errors.additional_images_files && <span className="text-[10px] text-red-500">{errors.additional_images_files}</span>}
                        </div>

                        {/* Preview and Remove Existing Additional Images */}
                        {data.existing_additional_images && data.existing_additional_images.length > 0 && (
                            <div className="space-y-2 border-t border-stone-200 dark:border-navy-800 pt-3">
                                <Label className="font-semibold text-navy-900 dark:text-white">Gambar Pendukung Saat Ini (Klik ikon sampah untuk menghapus)</Label>
                                <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                                    {data.existing_additional_images.map((imgUrl, idx) => (
                                        <div key={idx} className="relative aspect-[4/3] rounded border border-stone-200 dark:border-navy-800 overflow-hidden group">
                                            <img src={imgUrl} className="w-full h-full object-cover" alt={`Additional ${idx}`} />
                                            <button 
                                                type="button" 
                                                onClick={() => {
                                                    setData('existing_additional_images', data.existing_additional_images.filter(img => img !== imgUrl));
                                                }}
                                                className="absolute inset-0 bg-black/60 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                                            >
                                                <Trash2 className="h-5 w-5 text-red-400" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="space-y-1">
                            <Label htmlFor="news_content">Konten Lengkap Berita</Label>
                            <textarea
                                id="news_content"
                                rows={6}
                                className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                value={data.content}
                                onChange={e => setData('content', e.target.value)}
                            />
                            {errors.content && <span className="text-[10px] text-red-500">{errors.content}</span>}
                        </div>

                        <div className="space-y-2 border-t border-stone-200 dark:border-navy-800 pt-3">
                            <Label>Tags / Kata Kunci</Label>
                            <div className="flex flex-wrap gap-1.5 mb-2">
                                {data.tags.map((tag, idx) => (
                                    <span key={idx} className="inline-flex items-center gap-1 px-2 py-0.5 bg-stone-100 dark:bg-navy-900 text-stone-600 rounded">
                                        {tag}
                                        <button type="button" onClick={() => handleRemoveTag(tag)} className="text-red-500 font-bold hover:text-red-700">×</button>
                                    </span>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Input placeholder="Tulis tag baru..." value={tagInput} onChange={e => setTagInput(e.target.value)} />
                                <Button type="button" onClick={handleAddTag} className="bg-navy-700 hover:bg-navy-800 text-white rounded shrink-0 cursor-pointer">
                                    Tambah Tag
                                </Button>
                            </div>
                        </div>

                        <DialogFooter className="pt-4 border-t border-stone-100 dark:border-navy-800/80">
                            <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="rounded cursor-pointer">
                                Batal
                            </Button>
                            <Button type="submit" disabled={processing} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                                Simpan Kabar
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    );
}

News.layout = {
    breadcrumbs: [
        {
            title: 'Ikhtisar',
            href: dashboard(),
        },
        {
            title: 'Kabar & Berita',
            href: '/dashboard/kabar',
        },
    ],
};
