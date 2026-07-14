import { useState } from 'react';
import { Camera, MapPin, ExternalLink, Calendar, X, Eye } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface GalleryItem {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    imageUrl: string;
}

export default function VillageGallery() {
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const galleryData: GalleryItem[] = [
        {
            id: 1,
            title: 'Pawai Ogoh-Ogoh Nyepi Desa Tolai',
            description: 'Kemeriahan arak-arakan Ogoh-Ogoh yang diarak oleh pemuda Banjar Astina Desa Tolai sepanjang jalan utama Trans Sulawesi satu hari menjelang Nyepi. Kegiatan kebudayaan Bali ini menjadi agenda wisata khas yang dinanti masyarakat Parigi Moutong.',
            category: 'Budaya & Pariwisata',
            date: 'Maret 2026',
            imageUrl: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 2,
            title: 'Persawahan Irigasi Subak Tolai',
            description: 'Pemandangan bentang alam persawahan padi di Desa Tolai yang dikelola menggunakan prinsip subak semi-tradisional. Areal ini merupakan andalan ketahanan pangan daerah.',
            category: 'Pesona Alam',
            date: 'Mei 2026',
            imageUrl: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 3,
            title: 'Pura Agung Penataran Astina Tolai',
            description: 'Pura peribadatan umat Hindu yang berlokasi di Banjar Astina Desa Tolai. Arsitektur pura yang megah ini menjadi simbol toleransi dan harmoni kerukunan keagamaan desa.',
            category: 'Religi & Adat',
            date: 'Januari 2026',
            imageUrl: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 4,
            title: 'Gotong Royong Pembangunan Jalan Desa',
            description: 'Kebersamaan warga lintas suku dan agama dalam pembangunan saluran air dan jalan tani desa guna melancarkan transportasi hasil bumi.',
            category: 'Sosial Kependudukan',
            date: 'Juni 2026',
            imageUrl: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 5,
            title: 'Pesisir Pantai Teluk Tomini Tolai',
            description: 'Wilayah Desa Tolai yang bersentuhan dengan Teluk Tomini menyuguhkan pemandangan perairan tenang yang menjadi wilayah tangkap nelayan tradisional.',
            category: 'Pesona Alam',
            date: 'Februari 2026',
            imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 6,
            title: 'Penjemuran Biji Kakao Petani Lokal',
            description: 'Proses pengeringan komoditas kakao oleh warga setempat. Sektor perkebunan kakao merupakan penopang utama ekonomi rumah tangga selain persawahan.',
            category: 'Ekonomi Agraris',
            date: 'April 2026',
            imageUrl: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=600&auto=format&fit=crop',
        },
    ];

    return (
        <section id="gallery" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-[#121214] border border-neutral-200/90 dark:border-neutral-800/90 rounded-2xl shadow-md">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Galeri & Peta Wilayah
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-sky-700 to-emerald-600 mx-auto mt-4 rounded-full" />
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                        Dokumentasi visual kebudayaan, pembangunan desa, serta letak geografis wilayah administratif Desa Tolai.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Left Column: Gallery Grid */}
                    <div className="lg:col-span-7 flex flex-col justify-between">
                        <div className="flex items-center gap-2 mb-6 px-1">
                            <Camera className="h-5 w-5 text-sky-800 dark:text-sky-400" />
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Galeri Kegiatan Desa</h3>
                        </div>

                        {/* Image Grid Layout */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {galleryData.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => setSelectedImage(item)}
                                    className="group relative h-40 sm:h-44 rounded overflow-hidden cursor-pointer shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow transition-all duration-200"
                                >
                                    {/* Cover Image */}
                                    <img
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    {/* Gradient Hover Cover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 group-hover:opacity-85 transition-opacity" />

                                    {/* Text Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-3 text-white flex flex-col justify-end h-full">
                                        <span className="text-[8px] font-bold uppercase tracking-wider text-slate-300 leading-none mb-1">
                                            {item.category}
                                        </span>
                                        <h4 className="text-xs font-bold leading-tight line-clamp-2">
                                            {item.title}
                                        </h4>
                                    </div>

                                    {/* Hover Eye Icon */}
                                    <div className="absolute top-2 right-2 p-1.5 rounded bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                                        <Eye className="h-3.5 w-3.5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Geographic Map */}
                    <div className="lg:col-span-5 flex flex-col justify-between mt-10 lg:mt-0">
                        <div className="flex items-center gap-2 mb-6 px-1">
                            <MapPin className="h-5 w-5 text-sky-800 dark:text-sky-400" />
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white">Peta Administratif Desa Tolai</h3>
                        </div>

                        {/* Interactive Map Box */}
                        <div className="relative border border-neutral-300 dark:border-neutral-800 rounded overflow-hidden bg-neutral-200 dark:bg-neutral-900 flex-1 min-h-[350px] shadow-inner flex flex-col justify-between">
                            {/* Map Iframe */}
                            <iframe
                                title="Peta Lokasi Desa Tolai"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=120.3200%2C-1.0200%2C120.4200%2C-0.9300&amp;layer=mapnik&amp;marker=-0.9780%2C120.3700"
                                className="w-full h-full border-none absolute inset-0 opacity-90"
                                loading="lazy"
                            />
                            
                            {/* Map Floating Info Header */}
                            <div className="relative z-10 p-3.5 m-3 bg-white/95 dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 rounded shadow-md max-w-[260px] self-start">
                                <h4 className="text-xs font-bold text-neutral-950 dark:text-neutral-50 flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5 text-red-700 shrink-0" />
                                    Tolai, Parigi Moutong
                                </h4>
                                <p className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-1 leading-normal">
                                    Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah, Indonesia.
                                </p>
                            </div>

                            {/* Map Footer Link */}
                            <div className="relative z-10 p-3 m-3 bg-white/95 dark:bg-neutral-900/95 border border-neutral-200 dark:border-neutral-800 rounded shadow-md self-end flex items-center justify-between gap-4">
                                <span className="text-[10px] text-neutral-500 dark:text-neutral-400 font-semibold uppercase tracking-wider">Wilayah Pesisir Tomini</span>
                                <a
                                    href="https://www.openstreetmap.org/#map=13/-0.9780/120.3700"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 text-[10px] font-bold text-sky-800 dark:text-sky-400 hover:underline"
                                >
                                    Buka Peta Besar
                                    <ExternalLink className="h-3 w-3" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery Lightbox Dialog */}
            {selectedImage && (
                <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
                    <DialogContent className="max-w-2xl bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded shadow-xl overflow-hidden p-0 gap-0">
                        {/* Image Header */}
                        <div className="relative h-64 sm:h-80 w-full bg-neutral-900">
                            <img
                                src={selectedImage.imageUrl}
                                alt={selectedImage.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
                            <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-sky-800 text-white rounded">
                                {selectedImage.category}
                            </span>
                            
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Content text */}
                        <div className="p-6 sm:p-8 space-y-4">
                            <div className="flex items-center justify-between text-xs text-neutral-500">
                                <span className="flex items-center gap-1">
                                    <MapPin className="h-3.5 w-3.5 text-sky-800" />
                                    Desa Tolai, Kec. Torue
                                </span>
                                <span className="flex items-center gap-1">
                                    <Calendar className="h-3.5 w-3.5 text-sky-800" />
                                    Dokumentasi: {selectedImage.date}
                                </span>
                            </div>

                            <DialogHeader>
                                <DialogTitle className="text-base font-bold text-neutral-950 dark:text-white leading-tight">
                                    {selectedImage.title}
                                </DialogTitle>
                                <DialogDescription className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed text-justify pt-3">
                                    {selectedImage.description}
                                </DialogDescription>
                            </DialogHeader>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </section>
    );
}
