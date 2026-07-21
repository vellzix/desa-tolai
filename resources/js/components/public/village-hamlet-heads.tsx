import React from 'react';
import { MapPin } from 'lucide-react';

interface VillageHamletHeadsProps {
    hamletHeads?: any[];
}

const romanColors: Record<string, string> = {
    I: 'bg-navy-700', II: 'bg-navy-600', III: 'bg-navy-800',
    IV: 'bg-navy-700', V: 'bg-navy-600', VI: 'bg-navy-800',
    VII: 'bg-navy-700', VIII: 'bg-navy-600', IX: 'bg-navy-800',
    X: 'bg-navy-700', XI: 'bg-navy-600',
};

export default function VillageHamletHeads({ hamletHeads = [] }: VillageHamletHeadsProps) {
    const displayData = hamletHeads.length > 0 ? hamletHeads : Array.from({ length: 11 }).map((_, i) => ({
        id: i,
        dusun_number: ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI'][i],
        name: `Kepala Dusun ${['I','II','III','IV','V','VI','VII','VIII','IX','X','XI'][i]}`,
        photo_file: null,
    }));

    return (
        <section id="hamlet-heads" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 rounded-xl shadow-sm">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-100 dark:bg-navy-900/60 text-navy-700 dark:text-navy-300 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                        <MapPin className="h-3.5 w-3.5" />
                        Struktur Kewilayahan
                    </div>
                    <h2 className="text-3xl font-bold text-navy-900 dark:text-white mb-3">
                        Kepala Dusun
                    </h2>
                    <div className="w-16 h-1 bg-gold-500 mx-auto mb-5 rounded-full" />
                    <p className="text-stone-500 dark:text-stone-400 text-sm leading-relaxed">
                        Para pimpinan wilayah di 11 Dusun yang senantiasa hadir dan melayani
                        kebutuhan warga di tingkat kewilayahan Desa Tolai.
                    </p>
                </div>

                {/* Grid Kadus */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
                    {displayData.map((head) => {
                        const photoUrl = head.photo_file
                            ? (head.photo_file.startsWith('http') ? head.photo_file : '/storage/' + head.photo_file)
                            : null;
                        const bgColor = romanColors[head.dusun_number] ?? 'bg-navy-700';

                        return (
                            <div
                                key={head.id ?? head.dusun_number}
                                className="group flex flex-col bg-white dark:bg-navy-900 border border-stone-200 dark:border-navy-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:border-gold-400 dark:hover:border-gold-600 transition-all duration-300"
                            >
                                {/* Foto — area bersih tanpa teks overlay */}
                                <div className="aspect-[3/4] relative w-full overflow-hidden bg-stone-100 dark:bg-navy-800">
                                    {photoUrl ? (
                                        <img
                                            src={photoUrl}
                                            alt={head.name}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className={`w-full h-full ${bgColor} flex flex-col items-center justify-center gap-1`}>
                                            <MapPin className="h-7 w-7 text-white/50" />
                                            <span className="font-bold text-2xl text-white/70">
                                                {head.dusun_number}
                                            </span>
                                        </div>
                                    )}

                                </div>

                                {/* Info — panel solid terpisah dari foto */}
                                <div className="p-3 border-t border-stone-100 dark:border-navy-800">
                                    {/* Badge dusun di panel solid, selalu terbaca */}
                                    <span className="inline-flex items-center px-2 py-0.5 bg-navy-700 text-gold-400 text-[9px] font-bold uppercase tracking-widest rounded mb-1.5">
                                        Dusun {head.dusun_number}
                                    </span>
                                    <p className="text-[11px] font-bold text-navy-900 dark:text-white leading-snug line-clamp-2">
                                        {head.name}
                                    </p>
                                    {head.phone && (
                                        <p className="text-[10px] text-stone-400 dark:text-stone-500 mt-0.5 truncate">
                                            {head.phone}
                                        </p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
