import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import VillageNews from '@/components/public/village-news';

interface NewsPageProps {
    news: any[];
}

export default function NewsPage({ news }: NewsPageProps) {
    return (
        <PublicLayout>
            <Head>
                <title>Kabar & Kegiatan Desa - Desa Tolai</title>
                <meta name="description" content="Kumpulan berita pembangunan desa, pengumuman resmi pemerintah, serta kalender agenda kemasyarakatan Desa Tolai." />
            </Head>

            <div className="pt-24 pb-16">
                <VillageNews news={news} />
            </div>
        </PublicLayout>
    );
}
