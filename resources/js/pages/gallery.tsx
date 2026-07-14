import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import VillageGallery from '@/components/public/village-gallery';

export default function GalleryPage() {
    return (
        <PublicLayout>
            <Head>
                <title>Galeri & Peta Wilayah - Desa Tolai</title>
                <meta name="description" content="Kumpulan dokumentasi foto kegiatan pembangunan, festival budaya, serta peta geografis wilayah administratif Desa Tolai." />
            </Head>

            <div className="pt-24 pb-16">
                <VillageGallery />
            </div>
        </PublicLayout>
    );
}
