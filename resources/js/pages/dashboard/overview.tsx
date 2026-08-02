import { Head, Link, usePage } from '@inertiajs/react';
import {
    Users, Newspaper, Sprout, ImageIcon,
    ShieldCheck, Eye, ArrowRight, CalendarDays,
    TrendingUp, Building2, Globe, BarChart3
} from 'lucide-react';

interface OverviewProps {
    stats: {
        officials: number;
        news: number;
        potentials: number;
        galleries: number;
        admins: number;
        total_views: number;
    };
    recentNews: any[];
}

const statCards = (stats: OverviewProps['stats']) => [
    {
        label: 'Aparatur Desa',
        value: stats.officials,
        icon: Users,
        color: 'bg-blue-500',
        light: 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400',
        href: '/dashboard/aparatur',
    },
    {
        label: 'Kabar & Berita',
        value: stats.news,
        icon: Newspaper,
        color: 'bg-amber-500',
        light: 'bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400',
        href: '/dashboard/kabar',
    },
    {
        label: 'Potensi Wilayah',
        value: stats.potentials,
        icon: Sprout,
        color: 'bg-emerald-500',
        light: 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400',
        href: '/dashboard/potensi',
    },
    {
        label: 'Foto Galeri',
        value: stats.galleries,
        icon: ImageIcon,
        color: 'bg-violet-500',
        light: 'bg-violet-50 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400',
        href: '/dashboard/galeri',
    },
    {
        label: 'Akun Admin',
        value: stats.admins,
        icon: ShieldCheck,
        color: 'bg-rose-500',
        light: 'bg-rose-50 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400',
        href: '/dashboard/admin-akun',
    },
    {
        label: 'Total Kali Dibaca',
        value: (stats.total_views ?? 0).toLocaleString('id-ID'),
        icon: Eye,
        color: 'bg-cyan-500',
        light: 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400',
        href: '/dashboard/kabar',
    },
];

const quickActions = [
    { label: 'Tulis Berita Baru', sub: 'Tambah kabar atau pengumuman', href: '/dashboard/kabar', icon: Newspaper, color: 'text-amber-500' },
    { label: 'Tambah Aparatur', sub: 'Daftarkan perangkat desa baru', href: '/dashboard/aparatur', icon: Users, color: 'text-blue-500' },
    { label: 'Upload Foto Galeri', sub: 'Unggah dokumentasi kegiatan', href: '/dashboard/galeri', icon: ImageIcon, color: 'text-violet-500' },
    { label: 'Edit Profil Desa', sub: 'Perbarui visi, misi & kontak', href: '/dashboard/profil', icon: Building2, color: 'text-emerald-500' },
    { label: 'Tambah Potensi', sub: 'Publikasikan potensi wilayah', href: '/dashboard/potensi', icon: Sprout, color: 'text-teal-500' },
    { label: 'Kelola Admin', sub: 'Atur akun administrator', href: '/dashboard/admin-akun', icon: ShieldCheck, color: 'text-rose-500' },
];

function categoryBadge(category: string) {
    const map: Record<string, string> = {
        berita: 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300',
        pengumuman: 'bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300',
        kegiatan: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300',
    };

    return map[category] ?? 'bg-stone-100 text-stone-600 dark:bg-stone-800 dark:text-stone-300';
}

export default function Overview({ stats, recentNews }: OverviewProps) {
    const user = usePage().props.auth.user as { name: string };
    const cards = statCards(stats);

    const now = new Date();
    const greeting = now.getHours() < 12 ? 'Selamat pagi' : now.getHours() < 17 ? 'Selamat siang' : 'Selamat sore';

    return (
        <>
            <Head title="Ikhtisar — Panel Administrasi Desa Tolai" />
            <div className="flex flex-col gap-8 p-6 min-h-screen bg-slate-50 dark:bg-neutral-950 text-slate-800 dark:text-slate-100">

                {/* ── Hero Welcome Banner ── */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900 p-7 text-white shadow-lg">
                    {/* decorative circles */}
                    <div className="pointer-events-none absolute -top-10 -right-10 h-48 w-48 rounded-full bg-white/5" />
                    <div className="pointer-events-none absolute -bottom-6 -right-4 h-28 w-28 rounded-full bg-white/5" />
                    <div className="pointer-events-none absolute top-4 right-32 h-10 w-10 rounded-full bg-amber-400/20" />

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
                        <div>
                            <p className="text-xs font-medium text-navy-200 uppercase tracking-widest mb-1">
                                Panel Administrasi · Desa Tolai
                            </p>
                            <h1 className="text-2xl font-bold leading-tight text-white">
                                {greeting}, {user?.name?.split(' ')[0] || 'Admin'}! 👋
                            </h1>
                            <p className="mt-1 text-sm text-navy-200">
                                Berikut ringkasan konten website Desa Tolai saat ini.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-4 py-3 text-sm shrink-0">
                            <CalendarDays className="h-4 w-4 text-amber-300" />
                            <span className="font-medium text-white">
                                {now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
                            </span>
                        </div>
                    </div>

                    {/* mini metric pills */}
                    <div className="mt-5 flex flex-wrap gap-2 relative z-10">
                        <div className="flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[11px] font-semibold text-white">
                            <Globe className="h-3.5 w-3.5 text-amber-300" /> Website Aktif
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[11px] font-semibold text-white">
                            <BarChart3 className="h-3.5 w-3.5 text-emerald-300" /> {(stats.total_views ?? 0).toLocaleString('id-ID')} Pembaca
                        </div>
                        <div className="flex items-center gap-1.5 bg-white/10 border border-white/10 rounded-full px-3 py-1 text-[11px] font-semibold text-white">
                            <TrendingUp className="h-3.5 w-3.5 text-blue-300" /> {stats.news} Berita Diterbitkan
                        </div>
                    </div>
                </div>

                {/* ── Stats Grid ── */}
                <div>
                    <h2 className="text-xs font-bold uppercase tracking-widest text-stone-400 mb-4">Statistik Konten</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {cards.map((card) => (
                            <Link
                                key={card.label}
                                href={card.href}
                                className="group bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 font-semibold mb-2">
                                        {card.label}
                                    </p>
                                    <p className="text-3xl font-extrabold text-slate-800 dark:text-white leading-none">
                                        {card.value}
                                    </p>
                                </div>
                                <div className={`h-14 w-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform ${card.light}`}>
                                    <card.icon className="h-7 w-7" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* ── Bottom Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

                    {/* Quick Actions */}
                    <div className="lg:col-span-2 bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-xl shadow-sm p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="h-6 w-1 rounded-full bg-amber-400" />
                            <h2 className="text-sm font-bold text-slate-800 dark:text-white">Aksi Cepat</h2>
                        </div>
                        <div className="space-y-1.5">
                            {quickActions.map((action) => (
                                <Link
                                    key={action.label}
                                    href={action.href}
                                    className="flex items-center gap-4 p-3.5 rounded-xl hover:bg-stone-50 dark:hover:bg-neutral-800 transition-colors group border border-transparent hover:border-stone-200 dark:hover:border-neutral-700"
                                >
                                    <div className={`h-10 w-10 rounded-xl bg-stone-100 dark:bg-neutral-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform ${action.color}`}>
                                        <action.icon className="h-5 w-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">
                                            {action.label}
                                        </p>
                                        <p className="text-xs text-stone-400 truncate mt-0.5">{action.sub}</p>
                                    </div>
                                    <ArrowRight className="h-4 w-4 text-stone-300 group-hover:text-stone-600 dark:group-hover:text-stone-300 shrink-0 transition-colors" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Recent News */}
                    <div className="lg:col-span-3 bg-white dark:bg-neutral-900 border border-stone-200 dark:border-neutral-800 rounded-xl shadow-sm p-5">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-1 rounded-full bg-navy-600" />
                                <h2 className="text-sm font-bold text-slate-800 dark:text-white">Kabar Terbaru</h2>
                            </div>
                            <Link
                                href="/dashboard/kabar"
                                className="text-[11px] font-semibold text-navy-600 dark:text-amber-400 hover:underline flex items-center gap-1"
                            >
                                Semua Berita <ArrowRight className="h-3 w-3" />
                            </Link>
                        </div>

                        {recentNews?.length > 0 ? (
                            <div className="space-y-2">
                                {recentNews.map((item, i) => (
                                    <div
                                        key={item.id}
                                        className="flex items-start gap-3 p-3 rounded-lg bg-stone-50 dark:bg-neutral-800/60 border border-stone-100 dark:border-neutral-800"
                                    >
                                        {/* Number */}
                                        <div className="h-6 w-6 rounded-full bg-navy-100 dark:bg-navy-900/60 flex items-center justify-center text-[10px] font-bold text-navy-700 dark:text-navy-300 shrink-0 mt-0.5">
                                            {i + 1}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[12px] font-semibold text-slate-700 dark:text-slate-200 leading-snug line-clamp-1">
                                                {item.title}
                                            </p>
                                            <div className="flex items-center gap-2 mt-1">
                                                {item.category && (
                                                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider ${categoryBadge(item.category)}`}>
                                                        {item.category}
                                                    </span>
                                                )}
                                                <span className="text-[10px] text-stone-400">{item.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 text-[11px] text-stone-400 shrink-0">
                                            <Eye className="h-3 w-3" />
                                            <span>{item.views ?? 0}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-10 text-stone-400 border border-dashed border-stone-200 dark:border-neutral-800 rounded-lg">
                                <Newspaper className="h-8 w-8 mb-2 opacity-30" />
                                <p className="text-xs">Belum ada berita yang dipublikasikan.</p>
                                <Link href="/dashboard/kabar" className="mt-2 text-xs text-navy-600 dark:text-amber-400 font-semibold hover:underline">
                                    Tulis berita pertama →
                                </Link>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Footer note ── */}
                <p className="text-center text-[10px] text-stone-400 pb-2">
                    Sistem Informasi Desa Tolai · Panel Administrasi · {now.getFullYear()}
                </p>
            </div>
        </>
    );
}
