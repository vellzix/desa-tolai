import { Head, Link } from '@inertiajs/react';
import { Calendar, Tag, Eye, ArrowLeft } from 'lucide-react';
import PublicLayout from '@/layouts/public-layout';

interface NewsItem {
    id: number;
    title: string;
    category: 'berita' | 'pengumuman' | 'agenda';
    date: string;
    excerpt: string;
    image_path?: string;
    content: string;
    tags: string[];
    views: number;
}

interface NewsDetailPageProps {
    item: NewsItem;
}

export default function NewsDetailPage({ item }: NewsDetailPageProps) {
    const tags = Array.isArray(item.tags) 
        ? item.tags 
        : (typeof item.tags === 'string' ? JSON.parse(item.tags) : []);

    const categoryBadges = {
        berita: 'bg-blue-100 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-400',
        pengumuman: 'bg-amber-100 border-amber-200 text-amber-800 dark:bg-amber-900/30 dark:border-amber-800 dark:text-amber-400',
        agenda: 'bg-emerald-100 border-emerald-200 text-emerald-800 dark:bg-emerald-900/30 dark:border-emerald-800 dark:text-emerald-400',
    };

    const categoryLabels = {
        berita: 'Berita Desa',
        pengumuman: 'Pengumuman Resmi',
        agenda: 'Agenda Kegiatan',
    };

    return (
        <PublicLayout>
            <Head>
                <title>{`${item.title} - Kabar Desa Tolai`}</title>
                <meta name="description" content={item.excerpt} />
            </Head>

            <div className="pt-24 pb-16 min-h-screen bg-slate-50 dark:bg-navy-950/20 text-slate-800 dark:text-slate-200">
                <div className="mx-auto max-w-4xl px-4 sm:px-6">
                    {/* Back Button */}
                    <Link
                        href="/kabar"
                        className="inline-flex items-center gap-2 text-xs font-bold text-navy-700 dark:text-gold-500 hover:underline mb-6 cursor-pointer"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        Kembali ke Kabar Desa
                    </Link>

                    {/* Article Container */}
                    <article className="bg-white dark:bg-neutral-950 border border-stone-200 dark:border-navy-800 rounded-none sm:rounded-xl overflow-hidden shadow-sm">
                        {/* Optional Banner Image */}
                        {item.image_path && (
                            <div className="w-full aspect-[21/9] overflow-hidden bg-stone-100 dark:bg-navy-900 border-b border-stone-200 dark:border-navy-800">
                                <img
                                    src={item.image_path}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {/* Article Header */}
                        <div className="p-6 sm:p-10 border-b border-stone-100 dark:border-navy-800/60">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <span className={`text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded border ${categoryBadges[item.category] || categoryBadges.berita}`}>
                                    {categoryLabels[item.category] || item.category}
                                </span>
                                
                                <div className="flex items-center gap-4 text-xs text-neutral-400 font-medium">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-3.5 w-3.5" />
                                        {item.date}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Eye className="h-3.5 w-3.5" />
                                        {item.views} kali dibaca
                                    </span>
                                </div>
                            </div>

                            <h1 className="text-xl sm:text-3xl font-extrabold text-navy-900 dark:text-white leading-tight tracking-tight">
                                {item.title}
                            </h1>
                        </div>

                        {/* Article Content */}
                        <div className="p-6 sm:p-10 text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed text-justify whitespace-pre-line border-b border-stone-100 dark:border-navy-800/60">
                            {item.content || item.excerpt}
                        </div>

                        {/* Article Footer */}
                        <div className="p-6 sm:p-10 bg-stone-50/50 dark:bg-navy-950/20 flex flex-wrap items-center gap-2">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mr-2">Tags:</span>
                            {tags.map((tag: string) => (
                                <span
                                    key={tag}
                                    className="flex items-center gap-1 text-[10px] font-semibold bg-neutral-200/50 dark:bg-neutral-800 text-neutral-600 dark:text-stone-400 px-2.5 py-1 rounded"
                                >
                                    <Tag className="h-3 w-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                </div>
            </div>
        </PublicLayout>
    );
}
