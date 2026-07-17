import { Link } from '@inertiajs/react';
import { ArrowDown, Users, Map, Sprout, Award, Landmark, ChevronRight, Calendar, FileText } from 'lucide-react';

export default function VillageHero() {
    const stats = [
        { label: 'Total Penduduk', value: '6.842', icon: Users, desc: '3 Dusun & 13 RT' },
        { label: 'Luas Wilayah', value: '14,8 km²', icon: Map, desc: 'Kecamatan Torue' },
        { label: 'Komoditas Utama', value: 'Beras & Kakao', icon: Sprout, desc: 'Sektor Pertanian' },
        { label: 'Kerukunan Budaya', value: 'Harmonis', icon: Award, desc: 'Bhinneka Tunggal Ika' },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "linear-gradient(to bottom, rgba(10, 15, 37, 0.86) 0%, rgba(8, 12, 30, 0.80) 60%, rgba(5, 9, 21, 0.90) 100%), url('/WhatsApp Image 2026-07-13 at 14.07.13.jpeg')"
            }}
        >
            {/* Gold top accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500 z-10" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-36 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* ── Left: Main Copy ── */}
                    <div>
                        {/* Official Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-7 border border-gold-600/50 bg-navy-800/60 text-gold-400 text-[10px] font-bold uppercase tracking-[0.18em]">
                            <Landmark className="h-3 w-3" />
                            Website Resmi Pemerintah Desa Tolai
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-[1.15] tracking-tight mb-5">
                            Portal Informasi
                            <span className="block text-gold-400 mt-1.5">Desa Tolai</span>
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-lg mb-3">
                            Pusat pelayanan informasi dan profil wilayah Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Provinsi Sulawesi Tengah.
                        </p>

                        {/* Location tag */}
                        <p className="text-[11px] text-stone-500 mb-10 uppercase tracking-widest font-mono">
                            Kec. Torue · Kab. Parigi Moutong · Sulawesi Tengah
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-wrap gap-3">
                            <Link href="/tentang"
                                className="inline-flex items-center gap-2 bg-navy-700 hover:bg-navy-600 text-white text-sm font-semibold px-6 py-3 transition-colors cursor-pointer shadow-lg">
                                <FileText className="h-4 w-4" />
                                Profil Desa
                            </Link>
                            <Link href="/kabar"
                                className="inline-flex items-center gap-2 border border-white/25 text-white hover:bg-white/10 text-sm font-medium px-6 py-3 transition-colors cursor-pointer">
                                <Calendar className="h-4 w-4 opacity-70" />
                                Kabar Terkini
                            </Link>
                        </div>
                    </div>

                    {/* ── Right: Statistics ── */}
                    <div className="grid grid-cols-2 gap-3">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <div key={i} className="border border-white/10 bg-navy-900/50 backdrop-blur-sm p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex h-7 w-7 items-center justify-center bg-gold-600/20 text-gold-400">
                                            <Icon className="h-4 w-4" />
                                        </div>
                                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                    <div className="text-2xl font-bold text-white leading-tight">{stat.value}</div>
                                    <div className="text-[11px] text-stone-500 mt-1">{stat.desc}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-[11px] text-stone-600">
                        <span>Portal Resmi Desa</span>
                        <span className="h-3 w-px bg-stone-700" />
                        <span>Pelayanan Publik Digital</span>
                        <span className="h-3 w-px bg-stone-700" />
                        <span>Transparansi Informasi</span>
                    </div>
                    <Link href="/tentang"
                        className="flex items-center gap-1.5 text-[11px] text-stone-500 hover:text-gold-400 transition-colors cursor-pointer">
                        <ArrowDown className="h-3.5 w-3.5" />
                        Jelajahi selengkapnya
                    </Link>
                </div>
            </div>
        </section>
    );
}
