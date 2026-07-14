import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import VillageServices from '@/components/public/village-services';

export default function ServicesPage() {
    return (
        <PublicLayout>
            <Head>
                <title>Layanan Surat Mandiri - Desa Tolai</title>
                <meta name="description" content="Pelayanan mandiri pembuatan draf dokumen resmi kependudukan seperti SK Domisili, SKU, dan SKTM secara mandiri dan cepat di Desa Tolai." />
            </Head>

            <div className="pt-24 pb-16">
                <VillageServices />
            </div>
        </PublicLayout>
    );
}
