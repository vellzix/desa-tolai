import { useState } from 'react';
import { Sprout, Wheat, Landmark, Heart, Eye, Users, ChevronRight, Award } from 'lucide-react';

interface CardItem {
    title: string;
    description: string;
    badge: string;
    details: string[];
    bgGradient: string;
    icon: any;
}

export default function VillagePotentials() {
    const [selectedPotential, setSelectedPotential] = useState<number | null>(null);

    const economyPotentials: CardItem[] = [
        {
            title: 'Lumbung Padi Organik',
            badge: 'Pertanian',
            description: 'Penghasil beras premium berkualitas tinggi dengan sistem irigasi subak semi-tradisional.',
            details: ['Luas sawah produktif > 500 hektar', 'Penerapan pupuk organik berkelanjutan', 'Distribusi lintas provinsi di Sulawesi'],
            bgGradient: 'from-slate-500/5 to-slate-600/5 dark:from-slate-900/10 dark:to-slate-900/10',
            icon: Wheat,
        },
        {
            title: 'Perkebunan Kakao & Cengkih',
            badge: 'Perkebunan',
            description: 'Komoditas andalan perkebunan rakyat Tolai yang mensuplai pabrik pengolahan cokelat regional.',
            details: ['Rata-rata panen 400 ton/tahun', 'Pembinaan petani kakao terpadu', 'Kemitraan ekspor lokal'],
            bgGradient: 'from-slate-500/5 to-slate-600/5 dark:from-slate-900/10 dark:to-slate-900/10',
            icon: Sprout,
        },
        {
            title: 'Perdagangan Trans Sulawesi',
            badge: 'Niaga & Jasa',
            description: 'Terletak strategis di jalur poros Trans Sulawesi menjadikannya pusat niaga teraktif di Kecamatan Torue.',
            details: ['Pasar Tradisional Tolai harian', 'Pusat kuliner khas Nusantara', 'Sentra kerajinan anyaman'],
            bgGradient: 'from-slate-500/5 to-slate-600/5 dark:from-slate-900/10 dark:to-slate-900/10',
            icon: Landmark,
        },
    ];

    const culturePotentials: CardItem[] = [
        {
            title: 'Pawai Ogoh-Ogoh Nyepi',
            badge: 'Budaya & Pariwisata',
            description: 'Event tahunan terbesar Parigi Moutong menampilkan replika raksasa simbol pembersihan diri.',
            details: ['Dihadiri ribuan wisatawan domestik', 'Melibatkan pemuda lintas agama', 'Penas kolosal malam Pangerupukan'],
            bgGradient: 'from-slate-500/5 to-slate-600/5 dark:from-slate-900/10 dark:to-slate-900/10',
            icon: Award,
        },
        {
            title: 'Seni Tari & Gamelan Bali',
            badge: 'Kesenian Tradisional',
            description: 'Pelestarian seni tari klasik dan tabuh gamelan Bali asli yang dikelola oleh Sanggar Seni Banjar.',
            details: ['Kursus gratis untuk anak-anak desa', 'Mengisi festival adat & pemerintahan', 'Kolaborasi musik etnik lokal'],
            bgGradient: 'from-slate-500/5 to-slate-600/5 dark:from-slate-900/10 dark:to-slate-900/10',
            icon: Users,
        },
        {
            title: 'Bhinneka Tunggal Ika',
            badge: 'Harmoni Keberagaman',
            description: 'Model toleransi kerukunan umat beragama (Islam, Hindu, Kristen) yang hidup rukun berdampingan.',
            details: ['Pembangunan gotong royong pura-masjid', 'Forum kerukunan pemuda desa', 'Saling jaga saat perayaan hari besar'],
            bgGradient: 'from-slate-500/5 to-slate-600/5 dark:from-slate-900/10 dark:to-slate-900/10',
            icon: Heart,
        },
    ];

    return (
        <section id="potentials" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-[#121214] border border-neutral-200/90 dark:border-neutral-800/90 rounded-2xl shadow-md">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Potensi Wilayah & Kebudayaan
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-sky-700 to-emerald-600 mx-auto mt-4 rounded-full" />
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                        Penopang ekonomi persawahan subur serta kekayaan keragaman adat budaya kemasyarakatan Desa Tolai.
                    </p>
                </div>

                {/* Subtitle - Perekonomian & Agraris */}
                <div className="mb-10">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-sky-700 dark:bg-sky-500" />
                        Komoditas & Sektor Perekonomian
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Sektor agraris utama penunjang kemakmuran warga.</p>
                </div>

                {/* Economy Potential Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {economyPotentials.map((item, index) => {
                        const IconComponent = item.icon;
                        const isExpanded = selectedPotential === index;
                        return (
                            <div
                                key={index}
                                onClick={() => setSelectedPotential(isExpanded ? null : index)}
                                className={`group relative rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-[#121214]/40 p-6 text-left cursor-pointer transition-all duration-200 hover:shadow-sm ${
                                    isExpanded ? 'ring-2 ring-sky-700 dark:ring-sky-500 bg-white dark:bg-[#121214]' : ''
                                }`}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 shadow-inner mb-5">
                                    <IconComponent className="h-5 w-5 text-sky-800 dark:text-sky-400" />
                                </div>

                                <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-neutral-200/50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-3">
                                    {item.badge}
                                </span>

                                <h4 className="text-base font-bold text-neutral-900 dark:text-white leading-tight mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 text-justify">
                                    {item.description}
                                </p>

                                <div className={`space-y-2 border-t border-neutral-200 dark:border-neutral-800/80 pt-4 overflow-hidden transition-all duration-300 ${
                                    isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    {item.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                                            <ChevronRight className="h-3.5 w-3.5 text-blue-800 shrink-0" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-sky-800 dark:text-sky-400">
                                    <Eye className="h-3.5 w-3.5" />
                                    <span>{isExpanded ? 'Sembunyikan rincian' : 'Lihat data potensi'}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Subtitle - Adat & Kebudayaan */}
                <div className="mb-10">
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-slate-500" />
                        Adat Istiadat & Toleransi Sosial
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Keharmonisan kehidupan kemasyarakatan multikultural Desa Tolai.</p>
                </div>

                {/* Culture Potential Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {culturePotentials.map((item, index) => {
                        const IconComponent = item.icon;
                        const globalIndex = index + 10;
                        const isExpanded = selectedPotential === globalIndex;
                        return (
                            <div
                                key={globalIndex}
                                onClick={() => setSelectedPotential(isExpanded ? null : globalIndex)}
                                className={`group relative rounded-lg border border-neutral-200 dark:border-neutral-800 bg-neutral-50/40 dark:bg-[#121214]/40 p-6 text-left cursor-pointer transition-all duration-200 hover:shadow-sm ${
                                    isExpanded ? 'ring-2 ring-sky-700 dark:ring-sky-500 bg-white dark:bg-[#121214]' : ''
                                }`}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 shadow-inner mb-5">
                                    <IconComponent className="h-5 w-5 text-sky-800 dark:text-sky-400" />
                                </div>

                                <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-neutral-200/50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-3">
                                    {item.badge}
                                </span>

                                <h4 className="text-base font-bold text-neutral-900 dark:text-white leading-tight mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4 text-justify">
                                    {item.description}
                                </p>

                                <div className={`space-y-2 border-t border-neutral-200 dark:border-neutral-800/80 pt-4 overflow-hidden transition-all duration-300 ${
                                    isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    {item.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                                            <ChevronRight className="h-3.5 w-3.5 text-blue-800 shrink-0" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-sky-800 dark:text-sky-400">
                                    <Eye className="h-3.5 w-3.5" />
                                    <span>{isExpanded ? 'Sembunyikan rincian' : 'Lihat keunikan adat'}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
