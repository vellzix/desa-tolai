import { Link } from '@inertiajs/react';
import { ArrowDown, Users, Map, Award, Landmark, Sprout } from 'lucide-react';

export default function VillageHero() {
    const stats = [
        { label: 'Total Penduduk', value: '6.842', icon: Users, desc: 'Jiwa terdaftar', color: 'bg-white/10 border-white/15 text-white' },
        { label: 'Luas Wilayah', value: '14,8 km²', icon: Map, desc: 'Kecamatan Torue', color: 'bg-white/10 border-white/15 text-white' },
        { label: 'Komoditas Utama', value: 'Beras & Kakao', icon: Sprout, desc: 'Sektor Pertanian', color: 'bg-white/10 border-white/15 text-white' },
        { label: 'Kerukunan Budaya', value: 'Harmonis', icon: Award, desc: 'Bhinneka Tunggal Ika', color: 'bg-white/10 border-white/15 text-white' },
    ];

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/WhatsApp Image 2026-07-13 at 14.07.13.jpeg')" }}
        >
            {/* Dark Mask Overlay for Premium Look & High Text Contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1329]/80 via-slate-900/60 to-slate-950/70 -z-10" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-6 rounded-md border border-white/20 bg-white/10 text-sky-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-xs">
                    <Landmark className="h-3.5 w-3.5" />
                    Web Profil Resmi Pemerintahan Desa Tolai
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.15] drop-shadow-md">
                    Portal Informasi Pemerintahan & Kemasyarakatan{' '}
                    <span className="bg-gradient-to-r from-sky-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                        Desa Tolai
                    </span>
                </h1>

                {/* Subtitle */}
                <p className="mt-6 text-base sm:text-lg text-neutral-200 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                    Pusat pelayanan administrasi digital dan profil wilayah Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Provinsi Sulawesi Tengah.
                </p>

                {/* CTA Buttons */}
                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <Link
                        href="/layanan"
                        className="inline-flex items-center justify-center bg-sky-600 hover:bg-sky-700 text-white border border-sky-500/20 rounded-lg font-semibold shadow-md px-8 py-3 text-sm cursor-pointer transition-all duration-200"
                    >
                        Layanan Surat Mandiri
                    </Link>
                    <Link
                        href="/tentang"
                        className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 hover:text-white rounded-lg font-semibold px-8 py-3 text-sm cursor-pointer backdrop-blur-xs transition-all duration-200"
                    >
                        Pelajari Profil Desa
                    </Link>
                </div>

                {/* Statistics Grid */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {stats.map((stat, i) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={i}
                                className="group relative rounded-lg border border-white/10 bg-[#0f172a]/45 backdrop-blur-md p-5 text-left transition-all duration-300 hover:translate-y-[-2px] hover:bg-[#0f172a]/60"
                            >
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-sky-200 shadow-inner mb-4">
                                    <IconComponent className="h-4.5 w-4.5" />
                                </div>
                                <div className="text-xl font-bold text-white leading-tight">
                                    {stat.value}
                                </div>
                                <div className="text-xs font-bold text-sky-100 mt-1 uppercase tracking-wider">
                                    {stat.label}
                                </div>
                                <div className="text-[11px] text-neutral-300 mt-0.5">
                                    {stat.desc}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Scroll Down Indicator */}
                <Link
                    href="/tentang"
                    className="mt-16 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 text-white hover:text-sky-300 hover:border-sky-300 transition-colors cursor-pointer"
                >
                    <ArrowDown className="h-4 w-4" />
                </Link>
            </div>
        </section>
    );
}
