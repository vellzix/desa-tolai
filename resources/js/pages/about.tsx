import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import VillageAbout from '@/components/public/village-about';
import VillageOfficials from '@/components/public/village-officials';

export default function AboutPage() {
    return (
        <PublicLayout>
            <Head>
                <title>Tentang & Sejarah - Desa Tolai</title>
                <meta name="description" content="Pelajari sejarah rintisan Astina, visi misi, serta susunan aparatur pemerintahan Desa Tolai, Parigi Moutong." />
            </Head>

            <div className="pt-24 pb-16 space-y-12">
                <VillageAbout />
                <VillageOfficials />
            </div>
        </PublicLayout>
    );
}
