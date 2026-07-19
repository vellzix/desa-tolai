import { useState } from 'react';
import { Head, useForm, router } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Trash2, Save } from 'lucide-react';
import { dashboard } from '@/routes';

interface ProfileProps {
    profile: any;
}

export default function Profile({ profile }: ProfileProps) {
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
        if (!newMission.trim()) return;
        setData('missions', [...data.missions, newMission.trim()]);
        setNewMission('');
    };

    const handleRemoveMission = (index: number) => {
        setData('missions', data.missions.filter((_, idx) => idx !== index));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/dashboard/profile');
    };

    return (
        <>
            <Head title="Profil Desa" />
            <div className="flex h-full flex-1 flex-col gap-6 p-6 bg-slate-50 dark:bg-navy-950/20 min-h-screen text-slate-800 dark:text-slate-200">
                <div className="flex items-center justify-between pb-4 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-navy-900 dark:text-white">Profil Desa</h1>
                        <p className="text-xs text-stone-500 mt-1">Kelola informasi profil, visi misi, dan kontak Desa Tolai.</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-navy-900/40 border border-stone-200 dark:border-navy-800 p-6 rounded-lg shadow-sm">
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
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
                </div>
            </div>
        </>
    );
}

Profile.layout = {
    breadcrumbs: [
        {
            title: 'Ikhtisar',
            href: dashboard(),
        },
        {
            title: 'Profil Desa',
            href: '/dashboard/profil',
        },
    ],
};
