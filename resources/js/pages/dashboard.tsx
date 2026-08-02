import { Head, useForm, router } from '@inertiajs/react';
import { 
    Building, 
    Users, 
    Newspaper, 
    Sprout, 
    Image as ImageIcon, 
    Plus, 
    Trash2, 
    Edit3, 
    Save, 
    ChevronRight,
    ShieldCheck,
    UserPlus
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { dashboard } from '@/routes';

interface DashboardProps {
    profile: any;
    officials: any[];
    news: any[];
    potentials: any[];
    galleries: any[];
    admins: any[];
}

export default function Dashboard({ profile, officials, news, potentials, galleries, admins }: DashboardProps) {
    const [activeTab, setActiveTab] = useState<'profile' | 'officials' | 'news' | 'potentials' | 'gallery' | 'admins'>('profile');

    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-slate-50 dark:bg-navy-950/20 min-h-screen text-slate-800 dark:text-slate-200">
                {/* Header */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">Panel Administrasi</h1>
                        <p className="text-xs text-stone-500 mt-1">Kelola konten dan informasi publik website resmi Desa Tolai.</p>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap gap-2 border-b border-stone-200 dark:border-navy-800 pb-2">
                    <button
                        onClick={() => setActiveTab('profile')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${
                            activeTab === 'profile'
                                ? 'bg-navy-700 text-white'
                                : 'bg-white dark:bg-navy-900 border border-stone-200 dark:border-navy-800 hover:bg-stone-100 dark:hover:bg-navy-800'
                        }`}
                    >
                        <Building className="h-4 w-4" />
                        Profil Desa
                    </button>
                    <button
                        onClick={() => setActiveTab('officials')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${
                            activeTab === 'officials'
                                ? 'bg-navy-700 text-white'
                                : 'bg-white dark:bg-navy-900 border border-stone-200 dark:border-navy-800 hover:bg-stone-100 dark:hover:bg-navy-800'
                        }`}
                    >
                        <Users className="h-4 w-4" />
                        Aparatur Desa
                    </button>
                    <button
                        onClick={() => setActiveTab('news')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${
                            activeTab === 'news'
                                ? 'bg-navy-700 text-white'
                                : 'bg-white dark:bg-navy-900 border border-stone-200 dark:border-navy-800 hover:bg-stone-100 dark:hover:bg-navy-800'
                        }`}
                    >
                        <Newspaper className="h-4 w-4" />
                        Kabar Desa
                    </button>
                    <button
                        onClick={() => setActiveTab('potentials')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${
                            activeTab === 'potentials'
                                ? 'bg-navy-700 text-white'
                                : 'bg-white dark:bg-navy-900 border border-stone-200 dark:border-navy-800 hover:bg-stone-100 dark:hover:bg-navy-800'
                        }`}
                    >
                        <Sprout className="h-4 w-4" />
                        Potensi Wilayah
                    </button>
                    <button
                        onClick={() => setActiveTab('gallery')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${
                            activeTab === 'gallery'
                                ? 'bg-navy-700 text-white'
                                : 'bg-white dark:bg-navy-900 border border-stone-200 dark:border-navy-800 hover:bg-stone-100 dark:hover:bg-navy-800'
                        }`}
                    >
                        <ImageIcon className="h-4 w-4" />
                        Galeri Dokumentasi
                    </button>
                    <button
                        onClick={() => setActiveTab('admins')}
                        className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded transition-colors cursor-pointer ${
                            activeTab === 'admins'
                                ? 'bg-red-700 text-white'
                                : 'bg-white dark:bg-navy-900 border border-stone-200 dark:border-navy-800 hover:bg-stone-100 dark:hover:bg-navy-800'
                        }`}
                    >
                        <ShieldCheck className="h-4 w-4" />
                        Kelola Admin
                    </button>
                </div>

                {/* Tab Contents */}
                <div className="flex-1 bg-white dark:bg-navy-900/40 border border-stone-200 dark:border-navy-800 p-6 rounded-lg shadow-sm">
                    {activeTab === 'profile' && <ProfileManager profile={profile} />}
                    {activeTab === 'officials' && <OfficialsManager officials={officials} />}
                    {activeTab === 'news' && <NewsManager news={news} />}
                    {activeTab === 'potentials' && <PotentialsManager potentials={potentials} />}
                    {activeTab === 'gallery' && <GalleryManager galleries={galleries} />}
                    {activeTab === 'admins' && <AdminsManager admins={admins} />}
                </div>
            </div>
        </>
    );
}

Dashboard.layout = {
    breadcrumbs: [
        {
            title: 'Dashboard',
            href: dashboard(),
        },
    ],
};

/* ── 1. PROFILE MANAGER COMPONENT ── */
function ProfileManager({ profile }: { profile: any }) {
    const defaultMissions = profile?.missions ? (Array.isArray(profile.missions) ? profile.missions : JSON.parse(profile.missions)) : [];
    
    const { data, setData, post, processing, errors } = useForm({
        welcome_title: profile?.welcome_title || 'Portal Informasi Desa Tolai',
        welcome_text: profile?.welcome_text || '',
        welcome_kades_name: profile?.welcome_kades_name || 'I Made Gede Dipayana',
        welcome_kades_photo_file: null as any,
        history_text: profile?.history_text || '',
        vision: profile?.vision || '',
        missions: defaultMissions,
        phone: profile?.phone || '',
        email: profile?.email || '',
        address: profile?.address || '',
        timings: profile?.timings || 'Senin – Jumat, 08.00 – 15.00 WITA',
    });

    const [newMission, setNewMission] = useState('');

    const handleAddMission = () => {
        if (!newMission.trim()) {
return;
}

        setData('missions', [...data.missions, newMission.trim()]);
        setNewMission('');
    };

    const handleRemoveMission = (index: number) => {
        setData('missions', data.missions.filter((_, idx) => idx !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Since welcome_kades_photo_file is a file, we submit via POST
        post('/dashboard/profile');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
            <h2 className="text-lg font-bold text-navy-900 dark:text-white pb-2 border-b border-stone-200 dark:border-navy-800">
                Profil & Informasi Kontak Desa
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Sambutan & Identitas */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-navy-800 dark:text-gold-400">Sambutan Kepala Desa</h3>
                    
                    <div className="space-y-1">
                        <Label htmlFor="welcome_title">Judul Sambutan/Portal</Label>
                        <Input 
                            id="welcome_title" 
                            value={data.welcome_title} 
                            onChange={e => setData('welcome_title', e.target.value)} 
                        />
                        {errors.welcome_title && <span className="text-[10px] text-red-500">{errors.welcome_title}</span>}
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="welcome_kades_name">Nama Kepala Desa</Label>
                        <Input 
                            id="welcome_kades_name" 
                            value={data.welcome_kades_name} 
                            onChange={e => setData('welcome_kades_name', e.target.value)} 
                        />
                        {errors.welcome_kades_name && <span className="text-[10px] text-red-500">{errors.welcome_kades_name}</span>}
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="welcome_kades_photo_file">Ganti Foto Kepala Desa (Max 2MB)</Label>
                        <div className="flex gap-4 items-center">
                            {profile?.welcome_kades_photo && (
                                <img src={profile.welcome_kades_photo} className="h-14 w-10 object-cover border border-stone-300" alt="Current" />
                            )}
                            <Input 
                                id="welcome_kades_photo_file" 
                                type="file" 
                                onChange={e => setData('welcome_kades_photo_file', e.target.files?.[0] as any)} 
                            />
                        </div>
                        {errors.welcome_kades_photo_file && <span className="text-[10px] text-red-500">{errors.welcome_kades_photo_file}</span>}
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="welcome_text">Naskah Sambutan</Label>
                        <textarea
                            id="welcome_text"
                            rows={5}
                            className="w-full text-sm p-3 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-600"
                            value={data.welcome_text}
                            onChange={e => setData('welcome_text', e.target.value)}
                        />
                        {errors.welcome_text && <span className="text-[10px] text-red-500">{errors.welcome_text}</span>}
                    </div>
                </div>

                {/* Sejarah & Kontak */}
                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-navy-800 dark:text-gold-400">Hubungi & Jam Operasional</h3>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <Label htmlFor="phone">No. Telepon / Layanan</Label>
                            <Input 
                                id="phone" 
                                value={data.phone} 
                                onChange={e => setData('phone', e.target.value)} 
                            />
                        </div>
                        <div className="space-y-1">
                            <Label htmlFor="email">Email Desa</Label>
                            <Input 
                                id="email" 
                                type="email"
                                value={data.email} 
                                onChange={e => setData('email', e.target.value)} 
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="timings">Hari & Jam Kerja Pelayanan</Label>
                        <Input 
                            id="timings" 
                            value={data.timings} 
                            onChange={e => setData('timings', e.target.value)} 
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="address">Alamat Kantor Desa</Label>
                        <textarea
                            id="address"
                            rows={2}
                            className="w-full text-sm p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-600"
                            value={data.address}
                            onChange={e => setData('address', e.target.value)}
                        />
                    </div>

                    <div className="space-y-1">
                        <Label htmlFor="history_text">Sejarah Asal-Usul Desa</Label>
                        <textarea
                            id="history_text"
                            rows={5}
                            className="w-full text-sm p-3 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-600"
                            value={data.history_text}
                            onChange={e => setData('history_text', e.target.value)}
                        />
                        {errors.history_text && <span className="text-[10px] text-red-500">{errors.history_text}</span>}
                    </div>
                </div>
            </div>

            {/* Visi & Misi */}
            <div className="space-y-4 pt-4 border-t border-stone-200 dark:border-navy-800">
                <h3 className="text-sm font-semibold text-navy-800 dark:text-gold-400">Visi & Misi Pembangunan</h3>
                
                <div className="space-y-1">
                    <Label htmlFor="vision">Visi Desa</Label>
                    <textarea
                        id="vision"
                        rows={2}
                        className="w-full text-sm p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none focus:ring-1 focus:ring-navy-600"
                        value={data.vision}
                        onChange={e => setData('vision', e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Daftar Misi Desa</Label>
                    <div className="space-y-2">
                        {data.missions.map((misi: string, index: number) => (
                            <div key={index} className="flex gap-3 items-center bg-stone-50 dark:bg-navy-950/40 p-2.5 border border-stone-200 dark:border-navy-800">
                                <span className="text-xs font-bold text-navy-700 dark:text-gold-500">{index + 1}</span>
                                <span className="text-xs flex-1">{misi}</span>
                                <button
                                    type="button"
                                    onClick={() => handleRemoveMission(index)}
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex gap-2 mt-2">
                        <Input 
                            placeholder="Tulis butir misi baru..." 
                            value={newMission} 
                            onChange={e => setNewMission(e.target.value)}
                        />
                        <Button 
                            type="button" 
                            onClick={handleAddMission}
                            className="bg-navy-700 hover:bg-navy-800 text-white rounded shrink-0 cursor-pointer"
                        >
                            Tambah Misi
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-stone-200 dark:border-navy-800">
                <Button 
                    type="submit" 
                    disabled={processing}
                    className="bg-navy-700 hover:bg-navy-800 text-white px-6 font-semibold rounded cursor-pointer"
                >
                    <Save className="h-4 w-4 mr-2" />
                    Simpan Profil Desa
                </Button>
            </div>
        </form>
    );
}

/* ── 2. OFFICIALS MANAGER COMPONENT ── */
function OfficialsManager({ officials }: { officials: any[] }) {
    const [isAddOpen, setIsAddOpen] = useState(false);
    const [editingOfficial, setEditingOfficial] = useState<any | null>(null);

    const { data, setData, post, processing, reset } = useForm({
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
        if (!newDuty.trim()) {
return;
}

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
        <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-navy-800">
                <h2 className="text-lg font-bold text-navy-900 dark:text-white">
                    Kelola Aparatur Desa (Struktur Organisasi)
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
        </div>
    );
}

/* ── 3. NEWS MANAGER COMPONENT ── */
function NewsManager({ news }: { news: any[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [editingNews, setEditingNews] = useState<any | null>(null);

    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        category: 'berita',
        date: '',
        excerpt: '',
        news_image_file: null as any,
        content: '',
        tags: [] as string[],
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
        setData({
            title: item.title,
            category: item.category,
            date: item.date,
            excerpt: item.excerpt,
            news_image_file: null,
            content: item.content || '',
            tags: parsedTags,
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
                                <Label htmlFor="news_image_file">Foto / Gambar Berita (Max 3MB, Opsional)</Label>
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
        </div>
    );
}

/* ── 4. POTENTIALS MANAGER COMPONENT ── */
function PotentialsManager({ potentials }: { potentials: any[] }) {
    const [isOpen, setIsOpen] = useState(false);
    const [editingPotential, setEditingPotential] = useState<any | null>(null);

    const { data, setData, post, put, processing, reset } = useForm({
        title: '',
        badge: '',
        description: '',
        details: [] as string[],
        category: 'economy',
        icon: 'Wheat',
    });

    const [detailInput, setDetailInput] = useState('');

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
        });
        setIsOpen(true);
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();

        if (editingPotential) {
            put(`/dashboard/potentials/${editingPotential.id}`, {
                onSuccess: () => {
                    setIsOpen(false);
                    reset();
                }
            });
        } else {
            post('/dashboard/potentials', {
                onSuccess: () => {
                    setIsOpen(false);
                    reset();
                }
            });
        }
    };

    const handleDelete = (id: number) => {
        if (confirm('Apakah Anda yakin ingin menghapus potensi desa ini?')) {
            router.delete(`/dashboard/potentials/${id}`);
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between pb-2 border-b border-stone-200 dark:border-navy-800">
                <h2 className="text-lg font-bold text-navy-900 dark:text-white">
                    Kelola Sektor Potensi (Pertanian, Wisata & Budaya)
                </h2>
                <Button onClick={handleOpenAdd} className="bg-navy-700 hover:bg-navy-800 text-white rounded cursor-pointer">
                    <Plus className="h-4 w-4 mr-1.5" /> Tambah Potensi
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {potentials.map((p) => {
                    const details = Array.isArray(p.details) ? p.details : JSON.parse(p.details || '[]');

                    return (
                        <div key={p.id} className="bg-stone-50 dark:bg-navy-950/20 border border-stone-200 dark:border-navy-800 p-4 rounded-lg flex flex-col justify-between">
                            <div>
                                <div className="flex items-center justify-between gap-2 mb-2">
                                    <span className="px-2 py-0.5 rounded bg-navy-100 text-navy-800 text-[9px] font-bold uppercase tracking-wider">{p.badge}</span>
                                    <span className="text-[9px] text-stone-400 capitalize">{p.category === 'economy' ? 'Ekonomi' : 'Budaya'}</span>
                                </div>
                                <h3 className="text-sm font-bold text-navy-900 dark:text-white">{p.title}</h3>
                                <p className="text-xs text-stone-500 mt-1 line-clamp-3 leading-relaxed">{p.description}</p>
                                
                                <ul className="mt-3 space-y-1 text-[10px] text-stone-400">
                                    {details.map((d: string, idx: number) => (
                                        <li key={idx} className="flex gap-1 items-center">
                                            <ChevronRight className="h-3 w-3 text-navy-500" />
                                            <span className="truncate">{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-2 border-t border-stone-200 dark:border-navy-800/60 pt-3 mt-4">
                                <Button variant="outline" size="sm" onClick={() => handleOpenEdit(p)} className="flex-1 rounded h-7 text-[10px] cursor-pointer">
                                    Edit
                                </Button>
                                <Button variant="destructive" size="sm" onClick={() => handleDelete(p.id)} className="rounded h-7 text-[10px] cursor-pointer">
                                    Hapus
                                </Button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Potential Dialog */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="max-w-lg bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 text-slate-900 dark:text-white p-6 rounded-lg">
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
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="pot_badge">Label/Badge Kategori (misal: 'Pertanian')</Label>
                                <Input id="pot_badge" value={data.badge} onChange={e => setData('badge', e.target.value)} required />
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
                                <Label htmlFor="pot_icon">Ikon Lucide (misal: 'Wheat', 'Sprout', 'Heart', 'Award')</Label>
                                <select 
                                    id="pot_icon" 
                                    className="w-full text-xs p-2.5 border border-stone-300 rounded dark:bg-navy-950 dark:border-navy-800 focus:outline-none"
                                    value={data.icon} 
                                    onChange={e => setData('icon', e.target.value)}
                                    required
                                >
                                    <option value="Wheat">Wheat (Gandum/Padi)</option>
                                    <option value="Sprout">Sprout (Tunas Kakao/Tanaman)</option>
                                    <option value="Landmark">Landmark (Kantor/Pura/Masjid)</option>
                                    <option value="Award">Award (Penghargaan/Festival)</option>
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
                        </div>

                        <div className="space-y-2 border-t border-stone-200 dark:border-navy-800 pt-3">
                            <Label>Rincian Data Pendukung (Bullet Points)</Label>
                            <div className="space-y-1">
                                {data.details.map((d: string, idx: number) => (
                                    <div key={idx} className="flex gap-2 items-center bg-stone-50 dark:bg-navy-900 p-2 border border-stone-200 dark:border-navy-800">
                                        <span className="flex-1 text-[11px]">{d}</span>
                                        <button type="button" onClick={() => handleRemoveDetail(idx)} className="text-red-500 hover:text-red-700">
                                            <Trash2 className="h-3.5 w-3.5" />
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-2">
                                <Input placeholder="Tulis data rincian baru..." value={detailInput} onChange={e => setDetailInput(e.target.value)} />
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
                                Simpan Potensi
                            </Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

/* ── 5. GALLERY MANAGER COMPONENT ── */
function GalleryManager({ galleries }: { galleries: any[] }) {
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
                                <Trash2 className="h-3 w-3 mr-1" /> Haps Foto
                            </Button>
                        </div>
                    </div>
                ))}
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
        </div>
    );
}

/* ── 6. ADMINS MANAGER COMPONENT ── */
function AdminsManager({ admins }: { admins: any[] }) {
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
        </div>
    );
}
