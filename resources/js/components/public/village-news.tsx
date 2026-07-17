import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Calendar, Tag, ArrowRight, Search, Eye, Megaphone, Newspaper, Milestone } from 'lucide-react';

interface NewsItem {
    id: number;
    title: string;
    category: 'berita' | 'pengumuman' | 'agenda';
    date: string;
    excerpt: string;
    image_path?: string;
    content?: string;
    tags: string[];
    views: number;
    bgGradient: string;
}

export default function VillageNews({ news = [] }: { news?: any[] }) {
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'berita' | 'pengumuman' | 'agenda'>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const defaultNews: NewsItem[] = [
        {
            id: 1,
            title: 'Persiapan Pawai Ogoh-Ogoh Nyepi Caka 1948 di Desa Tolai Capai 80%',
            category: 'agenda',
            date: '10 Juli 2026',
            excerpt: 'Panitia perayaan Hari Raya Nyepi Desa Tolai mengonfirmasi pelaksanaan pawai Ogoh-Ogoh yang dipusatkan di perempatan utama Trans Sulawesi Banjar Astina...',
            image_path: 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=600&auto=format&fit=crop',
            content: "Panitia perayaan Hari Raya Nyepi Desa Tolai mengonfirmasi pelaksanaan pawai Ogoh-Ogoh yang dipusatkan di perempatan utama Trans Sulawesi Banjar Astina.\n\nPersiapan ini mencakup pembuatan ogoh-ogoh oleh para pemuda banjar, pengamanan rute oleh pecalang dan pihak kepolisian, serta koordinasi dengan pemerintah daerah. Kegiatan ini diharapkan dapat berjalan dengan tertib dan khidmat.",
            tags: ['Budaya', 'Festival', 'Nyepi'],
            views: 428,
            bgGradient: 'from-slate-500/5 to-slate-600/5',
        },
        {
            id: 2,
            title: 'Panen Raya Padi Organik Banjar Astina Alami Peningkatan Produktivitas',
            category: 'berita',
            date: '08 Juli 2026',
            excerpt: 'Kelompok Tani Subak Merta Sari Desa Tolai melaporkan kenaikan volume hasil panen padi organik berkat implementasi sistem irigasi hemat air terpadu...',
            image_path: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop',
            content: "Kelompok Tani Subak Merta Sari Desa Tolai melaporkan kenaikan volume hasil panen padi organik berkat implementasi sistem irigasi hemat air terpadu.\n\nPeningkatan produktivitas ini mencapai 15% dibandingkan tahun lalu. Penggunaan pupuk organik dan tata kelola air subak yang teratur dinilai menjadi kunci utama keberhasilan panen raya musim ini.",
            tags: ['Pertanian', 'Lumbung Padi', 'Ekonomi'],
            views: 312,
            bgGradient: 'from-slate-500/5 to-slate-600/5',
        },
        {
            id: 3,
            title: 'Jadwal Pemeriksaan Kesehatan Gratis Posyandu Balita dan Lansia Serentak',
            category: 'pengumuman',
            date: '05 Juli 2026',
            excerpt: 'Pemerintah Desa Tolai bersama kader PKK mengumumkan jadwal pelaksanaan Posyandu bulanan untuk Balita dan Lansia di masing-masing Pos Dusun...',
            image_path: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop',
            content: "Pemerintah Desa Tolai bersama kader PKK mengumumkan jadwal pelaksanaan Posyandu bulanan untuk Balita dan Lansia di masing-masing Pos Dusun.\n\nLayanan gratis meliputi penimbangan berat badan, pemeriksaan tensi darah, pemberian makanan tambahan (PMT), serta konsultasi kesehatan umum. Diharapkan seluruh warga dapat berpartisipasi aktif.",
            tags: ['Kesehatan', 'Posyandu', 'Keluarga'],
            views: 189,
            bgGradient: 'from-slate-500/5 to-slate-600/5',
        },
        {
            id: 4,
            title: 'Warga Lintas Agama Gotong Royong Penataan Sarana Sosial Lingkungan',
            category: 'berita',
            date: '02 Juli 2026',
            excerpt: 'Menyambut HUT Kemerdekaan, warga lintas agama Desa Tolai bergotong royong melakukan pembersihan dan penataan jalan poros desa demi kenyamanan berkendara...',
            image_path: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
            content: "Menyambut HUT Kemerdekaan, warga lintas agama Desa Tolai bergotong royong melakukan pembersihan dan penataan jalan poros desa demi kenyamanan berkendara.\n\nKerja bakti ini diikuti oleh ratusan pemuda dari berbagai latar belakang keyakinan, mencerminkan tingginya nilai toleransi dan kebersamaan di Desa Tolai.",
            tags: ['Sosial', 'Gotong Royong', 'Toleransi'],
            views: 254,
            bgGradient: 'from-slate-500/5 to-slate-600/5',
        },
        {
            id: 5,
            title: 'Musyawarah Rencana Pembangunan Desa (Musrenbangdes) Tolai Tahun Anggaran 2027',
            category: 'agenda',
            date: '28 Juni 2026',
            excerpt: 'Seluruh perwakilan warga, BPD, dan tokoh masyarakat diundang menghadiri Musrenbangdes guna merumuskan program prioritas pembangunan fisik dan ekonomi...',
            image_path: 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=600&auto=format&fit=crop',
            content: "Seluruh perwakilan warga, BPD, dan tokoh masyarakat diundang menghadiri Musrenbangdes guna merumuskan program prioritas pembangunan fisik dan ekonomi.\n\nRencana pembangunan tahun depan akan menitikberatkan pada perbaikan jalan usaha tani, pengadaan alat pertanian modern, dan peningkatan kualitas poskesdes.",
            tags: ['Musyawarah', 'Pembangunan', 'Anggaran'],
            views: 195,
            bgGradient: 'from-slate-500/5 to-slate-600/5',
        },
        {
            id: 6,
            title: 'Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) Tahap II Sukses Disalurkan',
            category: 'pengumuman',
            date: '25 Juni 2026',
            excerpt: 'Pemerintah Desa Tolai telah merampungkan penyaluran bantuan tunai langsung tahap kedua kepada Keluarga Penerima Manfaat (KPM) prasejahtera...',
            image_path: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop',
            content: "Pemerintah Desa Tolai telah merampungkan penyaluran bantuan tunai langsung tahap kedua kepada Keluarga Penerima Manfaat (KPM) prasejahtera.\n\nSebanyak 85 KPM telah menerima bantuan secara tunai di Balai Desa dengan tertib. Bantuan ini diharapkan dapat meringankan beban ekonomi keluarga penerima manfaat.",
            tags: ['Bantuan', 'Bansos', 'Pemerintah'],
            views: 298,
            bgGradient: 'from-slate-500/5 to-slate-600/5',
        },
    ];

    const activeNews = news.length > 0 ? news.map((item) => {
        const parsedTags = Array.isArray(item.tags) 
            ? item.tags 
            : (typeof item.tags === 'string' ? JSON.parse(item.tags) : []);
        return {
            id: item.id,
            title: item.title,
            category: item.category,
            date: item.date,
            excerpt: item.excerpt,
            image_path: item.image_path,
            content: item.content || item.excerpt,
            tags: parsedTags,
            views: item.views,
            bgGradient: 'from-slate-500/5 to-slate-600/5',
        };
    }) : defaultNews;

    const filteredNews = activeNews.filter((item) => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const categoryIcons = {
        all: Milestone,
        berita: Newspaper,
        pengumuman: Megaphone,
        agenda: Calendar,
    };

    return (
        <section id="news" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-neutral-950 border border-stone-200 dark:border-navy-800 rounded-none sm:rounded-xl shadow-sm">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 pb-6 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-1 bg-navy-700 rounded-full" />
                            <span className="text-[11px] font-bold text-navy-700 dark:text-gold-500 uppercase tracking-widest">Informasi & Pengumuman</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white tracking-tight">
                            Kabar & Kegiatan Desa
                        </h2>
                        <p className="mt-1.5 text-sm text-neutral-500 dark:text-stone-400">
                            Pantau berita pembangunan, pengumuman administratif, serta kalender agenda Desa Tolai.
                        </p>
                    </div>
                </div>

                {/* Filter and Search Bar */}
                <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10 max-w-5xl mx-auto">
                    {/* Category Buttons */}
                    <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-none">
                        {(['all', 'berita', 'pengumuman', 'agenda'] as const).map((cat) => {
                            const Icon = categoryIcons[cat];
                            return (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded border transition-all cursor-pointer shrink-0 ${
                                        selectedCategory === cat
                                            ? 'bg-navy-700 border-navy-700 text-white shadow-sm'
                                            : 'bg-neutral-50 dark:bg-neutral-900 border-stone-200 dark:border-navy-800 text-neutral-600 dark:text-stone-400 hover:bg-neutral-100 dark:hover:bg-neutral-800'
                                    }`}
                                >
                                    <Icon className="h-3.5 w-3.5" />
                                    <span className="capitalize">{cat === 'all' ? 'Semua Kabar' : cat}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400" />
                        <input
                            type="text"
                            placeholder="Cari kabar desa..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full text-xs pl-10 pr-4 py-2 border border-stone-200 dark:border-navy-800 rounded bg-neutral-50 dark:bg-neutral-900 text-neutral-950 dark:text-white focus:outline-none focus:ring-1 focus:ring-blue-800/40 focus:border-blue-800"
                        />
                    </div>
                </div>

                {/* News Grid */}
                {filteredNews.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {filteredNews.map((item) => {
                            return (
                                <article
                                    key={item.id}
                                    className="group flex flex-col justify-between overflow-hidden rounded-lg border border-stone-200 dark:border-navy-800 bg-[#fafafa] dark:bg-navy-950/30 transition-all duration-200 hover:shadow-sm hover:bg-white dark:hover:bg-navy-950"
                                >
                                    {/* News Card Image Header */}
                                    {item.image_path && (
                                        <Link 
                                            href={`/kabar/${item.id}`}
                                            className="w-full aspect-[16/10] overflow-hidden border-b border-stone-200 dark:border-navy-800 bg-stone-100 dark:bg-navy-900 block"
                                        >
                                            <img 
                                                src={item.image_path} 
                                                alt={item.title} 
                                                className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                                            />
                                        </Link>
                                    )}

                                    <div className="p-5 flex flex-col flex-1 justify-between">
                                        <div>
                                            {/* Category Badge & Date */}
                                            <div className="flex items-center justify-between mb-3.5">
                                                <span
                                                    className={`text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded border ${
                                                        item.category === 'berita'
                                                            ? 'bg-neutral-100 border-stone-200 text-neutral-800 dark:bg-neutral-800 dark:border-neutral-700 dark:text-stone-300'
                                                            : item.category === 'pengumuman'
                                                            ? 'bg-navy-50/50 border-navy-700/10 text-navy-700 dark:bg-navy-950/20 dark:border-olive-900/30 dark:text-gold-500'
                                                            : 'bg-neutral-50 border-stone-200 text-neutral-700 dark:bg-neutral-900 dark:border-navy-800 dark:text-stone-400'
                                                    }`}
                                                >
                                                    {item.category}
                                                </span>
                                                <span className="flex items-center gap-1 text-[10px] text-neutral-400 font-medium">
                                                    <Calendar className="h-3 w-3" />
                                                    {item.date}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <Link href={`/kabar/${item.id}`}>
                                                <h3 className="text-sm font-bold text-navy-900 dark:text-white leading-snug group-hover:text-navy-700 dark:group-hover:text-gold-500 transition-colors mb-2.5 hover:underline">
                                                    {item.title}
                                                </h3>
                                            </Link>

                                            {/* Excerpt */}
                                            <p className="text-[11px] text-neutral-600 dark:text-stone-400 leading-relaxed mb-4 text-justify line-clamp-3">
                                                {item.excerpt}
                                            </p>
                                        </div>

                                        {/* Footer details */}
                                        <div className="border-t border-stone-200 dark:border-navy-800 pt-4 mt-auto">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {item.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="flex items-center gap-0.5 text-[9px] font-semibold bg-neutral-200/50 dark:bg-neutral-800 text-neutral-600 dark:text-stone-400 px-2 py-0.5 rounded"
                                                    >
                                                        <Tag className="h-2.5 w-2.5" />
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Interactive link */}
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="flex items-center gap-1 text-neutral-400 font-medium">
                                                    <Eye className="h-3.5 w-3.5" />
                                                    {item.views} dibaca
                                                </span>
                                                <Link 
                                                    href={`/kabar/${item.id}`}
                                                    className="flex items-center gap-0.5 text-navy-700 dark:text-gold-500 font-bold hover:underline cursor-pointer"
                                                >
                                                    Baca Detail
                                                    <ArrowRight className="h-3 w-3" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="text-center py-12 bg-neutral-50 dark:bg-navy-950/50 border border-stone-200 dark:border-navy-800 rounded max-w-5xl mx-auto">
                        <Megaphone className="h-10 w-10 text-neutral-400 mx-auto mb-3" />
                        <p className="text-sm font-semibold text-neutral-700 dark:text-stone-300">Tidak ada kabar desa ditemukan</p>
                    </div>
                )}
            </div>
        </section>
    );
}
