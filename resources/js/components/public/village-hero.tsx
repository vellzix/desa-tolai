import { Link } from '@inertiajs/react';
import { ArrowDown, Users, Map, Sprout, Award, Landmark, ChevronRight } from 'lucide-react';

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
                backgroundImage: "linear-gradient(to bottom, rgba(20, 30, 10, 0.82) 0%, rgba(10, 15, 5, 0.78) 60%, rgba(5, 8, 2, 0.88) 100%), url('/WhatsApp Image 2026-07-13 at 14.07.13.jpeg')"
            }}
        >
            {/* Subtle horizontal accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold-500 z-10" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10 pt-32 pb-20">
                {/* Two-column layout: text left, stats right on large screens */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column: Main Copy */}
                    <div className="text-left">
                        {/* Official Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-sm border border-gold-500/40 bg-gold-500/10 text-gold-400 text-[10px] font-bold uppercase tracking-[0.15em]">
                            <Landmark className="h-3 w-3" />
                            Website Resmi — Pemerintah Desa Tolai
                        </div>

                        {/* Main Heading */}
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.2] mb-6">
                            Portal Informasi
                            <span className="block text-gold-500 mt-1">Desa Tolai</span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-lg mb-4">
                            Pusat pelayanan administrasi digital dan profil wilayah Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Provinsi Sulawesi Tengah.
                        </p>

                        {/* Location Tag */}
                        <p className="text-xs text-neutral-500 mb-10 font-mono uppercase tracking-widest">
                            Kec. Torue · Kab. Parigi Moutong · Sulawesi Tengah
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3">
                            <Link
                                href="/tentang"
                                className="inline-flex items-center gap-2 bg-olive-700 hover:bg-olive-600 text-white rounded-sm font-semibold px-6 py-3 text-sm cursor-pointer transition-all duration-200 shadow-md"
                            >
                                Profil Desa
                                <ChevronRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href="/kabar"
                                className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 rounded-sm font-semibold px-6 py-3 text-sm cursor-pointer transition-all duration-200"
                            >
                                Kabar Terkini
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: Statistics */}
                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={i}
                                    className="border border-white/10 bg-white/5 backdrop-blur-sm p-5 rounded-sm"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <div className="flex h-7 w-7 items-center justify-center bg-olive-700/40 rounded-sm text-gold-400">
                                            <IconComponent className="h-4 w-4" />
                                        </div>
                                        <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">{stat.label}</span>
                                    </div>
                                    <div className="text-xl font-bold text-white leading-tight">{stat.value}</div>
                                    <div className="text-[11px] text-neutral-400 mt-1">{stat.desc}</div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom Divider + Scroll CTA */}
                <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-xs text-neutral-500">
                        <span>Beranda Resmi</span>
                        <span className="h-3 w-px bg-neutral-700" />
                        <span>Pelayanan Publik Digital</span>
                        <span className="h-3 w-px bg-neutral-700" />
                        <span>Transparansi Anggaran</span>
                    </div>
                    <Link
                        href="/tentang"
                        className="flex items-center gap-1.5 text-xs text-neutral-400 hover:text-gold-500 transition-colors cursor-pointer"
                    >
                        <ArrowDown className="h-3.5 w-3.5" />
                        Jelajahi lebih lanjut
                    </Link>
                </div>
            </div>
        </section>
    );
}
