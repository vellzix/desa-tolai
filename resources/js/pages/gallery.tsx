import { Head } from '@inertiajs/react';
import VillageGallery from '@/components/public/village-gallery';
import PublicLayout from '@/layouts/public-layout';

interface GalleryPageProps {
    galleries: any[];
}

export default function GalleryPage({ galleries }: GalleryPageProps) {
    return (
        <PublicLayout>
            <Head>
                <title>Galeri & Peta Wilayah - Desa Tolai</title>
                <meta name="description" content="Kumpulan dokumentasi foto kegiatan pembangunan, festival budaya, serta peta geografis wilayah administratif Desa Tolai." />
            </Head>

            <div className="pt-24 pb-16">
                <VillageGallery galleries={galleries} />
            </div>
        </PublicLayout>
    );
}
