import { useState } from 'react';
import { Sprout, Wheat, Heart, Eye, Users, ChevronRight, Award } from 'lucide-react';

const LogoKabupatenIcon = ({ className }: { className?: string }) => (
    <img src="/Lambang_Kabupaten_Parigi_Moutong.png" className={`${className} object-contain`} alt="Logo" />
);

interface CardItem {
    title: string;
    description: string;
    badge: string;
    details: string[];
    bgGradient: string;
    icon: any;
}

const iconMap: Record<string, any> = {
    Wheat,
    Sprout,
    Landmark: LogoKabupatenIcon,
    Award,
    Users,
    Heart,
};

export default function VillagePotentials({ potentials = [] }: { potentials?: any[] }) {
    const [selectedPotential, setSelectedPotential] = useState<number | null>(null);

    const defaultEconomy: CardItem[] = [
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
            icon: LogoKabupatenIcon,
        },
    ];

    const defaultCulture: CardItem[] = [
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

    let economyPotentials = defaultEconomy;
    let culturePotentials = defaultCulture;

    if (potentials && potentials.length > 0) {
        const mappedPotentials = potentials.map(p => {
            const parsedDetails = Array.isArray(p.details) 
                ? p.details 
                : (typeof p.details === 'string' ? JSON.parse(p.details) : []);
            return {
                title: p.title,
                badge: p.badge,
                description: p.description,
                details: parsedDetails,
                bgGradient: 'from-slate-500/5 to-slate-600/5 dark:from-slate-900/10 dark:to-slate-900/10',
                icon: iconMap[p.icon] || Wheat,
                category: p.category
            };
        });
        economyPotentials = mappedPotentials.filter(p => p.category === 'economy');
        culturePotentials = mappedPotentials.filter(p => p.category === 'culture');
    }

    return (
        <section id="potentials" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-neutral-950 border border-stone-200 dark:border-navy-800 rounded-none sm:rounded-xl shadow-sm">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-6 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-1 bg-navy-700 rounded-full" />
                            <span className="text-[11px] font-bold text-navy-700 dark:text-gold-500 uppercase tracking-widest">Ekonomi & Budaya</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white tracking-tight">
                            Potensi Wilayah & Kebudayaan
                        </h2>
                        <p className="mt-1.5 text-sm text-neutral-500 dark:text-stone-400">
                            Penopang ekonomi persawahan subur serta kekayaan keragaman adat budaya kemasyarakatan Desa Tolai.
                        </p>
                    </div>
                </div>

                {/* Subtitle - Perekonomian & Agraris */}
                <div className="mb-10">
                    <h3 className="text-lg font-bold text-navy-900 dark:text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-navy-700 dark:bg-gold-500" />
                        Komoditas & Sektor Perekonomian
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-stone-400 mt-1">Sektor agraris utama penunjang kemakmuran warga.</p>
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
                                className={`group relative rounded-lg border border-stone-200 dark:border-navy-800 bg-stone-50 dark:bg-navy-950/40 p-6 text-left cursor-pointer transition-all duration-200 hover:shadow-sm ${
                                    isExpanded ? 'ring-2 ring-navy-600 dark:ring-gold-500 bg-white dark:bg-navy-950' : ''
                                }`}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 shadow-inner mb-5">
                                    <IconComponent className="h-5 w-5 text-navy-700 dark:text-gold-500" />
                                </div>

                                <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-neutral-200/50 dark:bg-neutral-800 text-neutral-600 dark:text-stone-400 mb-3">
                                    {item.badge}
                                </span>

                                <h4 className="text-base font-bold text-navy-900 dark:text-white leading-tight mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-xs text-neutral-600 dark:text-stone-400 leading-relaxed mb-4 text-justify">
                                    {item.description}
                                </p>

                                <div className={`space-y-2 border-t border-stone-200 dark:border-navy-800 pt-4 overflow-hidden transition-all duration-300 ${
                                    isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    {item.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-stone-400">
                                            <ChevronRight className="h-3.5 w-3.5 text-blue-800 shrink-0" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-navy-700 dark:text-gold-500">
                                    <Eye className="h-3.5 w-3.5" />
                                    <span>{isExpanded ? 'Sembunyikan rincian' : 'Lihat data potensi'}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Subtitle - Adat & Kebudayaan */}
                <div className="mb-10">
                    <h3 className="text-lg font-bold text-navy-900 dark:text-white flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-navy-600" />
                        Adat Istiadat & Toleransi Sosial
                    </h3>
                    <p className="text-xs text-neutral-500 dark:text-stone-400 mt-1">Keharmonisan kehidupan kemasyarakatan multikultural Desa Tolai.</p>
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
                                className={`group relative rounded-lg border border-stone-200 dark:border-navy-800 bg-stone-50 dark:bg-navy-950/40 p-6 text-left cursor-pointer transition-all duration-200 hover:shadow-sm ${
                                    isExpanded ? 'ring-2 ring-navy-600 dark:ring-gold-500 bg-white dark:bg-navy-950' : ''
                                }`}
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-slate-200 shadow-inner mb-5">
                                    <IconComponent className="h-5 w-5 text-navy-700 dark:text-gold-500" />
                                </div>

                                <span className="inline-block px-2.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-neutral-200/50 dark:bg-neutral-800 text-neutral-600 dark:text-stone-400 mb-3">
                                    {item.badge}
                                </span>

                                <h4 className="text-base font-bold text-navy-900 dark:text-white leading-tight mb-2">
                                    {item.title}
                                </h4>

                                <p className="text-xs text-neutral-600 dark:text-stone-400 leading-relaxed mb-4 text-justify">
                                    {item.description}
                                </p>

                                <div className={`space-y-2 border-t border-stone-200 dark:border-navy-800 pt-4 overflow-hidden transition-all duration-300 ${
                                    isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    {item.details.map((detail, idx) => (
                                        <div key={idx} className="flex items-center gap-2 text-xs text-neutral-600 dark:text-stone-400">
                                            <ChevronRight className="h-3.5 w-3.5 text-navy-700 shrink-0" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-navy-700 dark:text-gold-500">
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
