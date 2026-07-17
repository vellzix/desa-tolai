import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import VillagePotentials from '@/components/public/village-potentials';

interface PotentialsPageProps {
    potentials: any[];
}

export default function PotentialsPage({ potentials }: PotentialsPageProps) {
    return (
        <PublicLayout>
            <Head>
                <title>Potensi & Budaya - Desa Tolai</title>
                <meta name="description" content="Eksplorasi potensi pertanian sawah irigasi subak, perkebunan kakao cengkih, serta kekayaan kebudayaan Hindu Bali dan toleransi antarumat beragama di Desa Tolai." />
            </Head>

            <div className="pt-24 pb-16">
                <VillagePotentials potentials={potentials} />
            </div>
        </PublicLayout>
    );
}
