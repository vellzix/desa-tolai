import { MapPin, ExternalLink, ShieldAlert, Navigation } from 'lucide-react';
import React from 'react';

export default function VillageMap() {
    const borders = [
        { direction: 'Utara', description: 'Berbatasan dengan Teluk Tomini / Desa Purwosari' },
        { direction: 'Timur', description: 'Berbatasan dengan Desa Torue' },
        { direction: 'Selatan', description: 'Berbatasan dengan Pegunungan / Hutan Lindung' },
        { direction: 'Barat', description: 'Berbatasan dengan Desa Astina' },
    ];

    return (
        <section id="map-section" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 rounded-xl shadow-sm">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-6 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-1 bg-navy-700 rounded-full" />
                            <span className="text-[11px] font-bold text-navy-700 dark:text-gold-500 uppercase tracking-widest">
                                Batas Wilayah & Lokasi
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white tracking-tight">
                            Peta Geografis Desa Tolai
                        </h2>
                        <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">
                            Peta interaktif letak astronomis dan batas wilayah administratif Pemerintah Desa Tolai.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Column: Geographic details */}
                    <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                        <div>
                            <div className="flex items-center gap-2 mb-4">
                                <Navigation className="h-5 w-5 text-navy-700 dark:text-gold-500" />
                                <h3 className="text-base font-bold text-navy-900 dark:text-white">Batas Administratif</h3>
                            </div>
                            <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed mb-4">
                                Secara geografis, wilayah administrasi Desa Tolai memiliki batas-batas langsung dengan desa tetangga dan bentang alam Teluk Tomini sebagai berikut:
                            </p>
                            <div className="space-y-2.5">
                                {borders.map((b) => (
                                    <div key={b.direction} className="flex items-start gap-3 p-3 bg-stone-50 dark:bg-navy-900/40 border border-stone-100 dark:border-navy-900 rounded-lg">
                                        <span className="inline-flex items-center justify-center px-2 py-0.5 bg-navy-700 dark:bg-navy-800 text-gold-400 text-[9px] font-bold uppercase tracking-wider rounded w-16 text-center shrink-0">
                                            {b.direction}
                                        </span>
                                        <span className="text-xs text-stone-600 dark:text-stone-300 leading-tight">
                                            {b.description}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="p-4 bg-navy-50/50 dark:bg-navy-900/20 border border-navy-100 dark:border-navy-900/60 rounded-xl space-y-2">
                            <h4 className="text-xs font-bold text-navy-900 dark:text-white flex items-center gap-1.5">
                                <ShieldAlert className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                                Info Geografis
                            </h4>
                            <p className="text-[11px] text-stone-500 dark:text-stone-400 leading-relaxed">
                                Kantor Desa Tolai terletak di Kecamatan Torue, Kabupaten Parigi Moutong, Provinsi Sulawesi Tengah. Aksesibilitas terletak tepat di jalur lalu lintas Trans Sulawesi yang strategis untuk mobilitas ekonomi.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Geographic Map */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div className="relative border border-neutral-300 dark:border-navy-800 rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-900 flex-1 min-h-[380px] shadow-inner flex flex-col justify-between">
                            {/* Map Iframe */}
                            <iframe
                                title="Peta Beranda Desa Tolai"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=120.2899%2C-1.0402%2C120.3899%2C-0.9502&amp;layer=mapnik&amp;marker=-0.9951793%2C120.3399018"
                                className="w-full h-full border-none absolute inset-0 opacity-90"
                                loading="lazy"
                            />
                            
                            {/* Map Floating Info Header */}
                            <div className="relative z-10 p-3.5 m-3 bg-white/95 dark:bg-neutral-900/95 border border-stone-200 dark:border-navy-800 rounded shadow-md max-w-[260px] self-start">
                                <h4 className="text-xs font-bold text-neutral-950 dark:text-neutral-50 flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5 text-red-700 shrink-0" />
                                    Kantor Desa Tolai
                                </h4>
                                <p className="text-[10px] text-neutral-500 dark:text-stone-400 mt-1 leading-normal">
                                    Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah, Indonesia.
                                </p>
                            </div>

                            {/* Map Footer Link */}
                            <div className="relative z-10 p-3 m-3 bg-white/95 dark:bg-neutral-900/95 border border-stone-200 dark:border-navy-800 rounded shadow-md self-end flex items-center justify-between gap-4">
                                <span className="text-[10px] text-neutral-500 dark:text-stone-400 font-semibold uppercase tracking-wider">Kantor Desa Tolai</span>
                                <a
                                    href="https://maps.app.goo.gl/84o6fT1Hw8KjMkhW9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-[10px] font-bold text-navy-700 dark:text-gold-500 hover:underline"
                                >
                                    Buka Google Maps
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
