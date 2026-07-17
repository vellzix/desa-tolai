import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import VillageAbout from '@/components/public/village-about';
import VillageOfficials from '@/components/public/village-officials';

interface AboutPageProps {
    profile: any;
    officials: any[];
}

export default function AboutPage({ profile, officials }: AboutPageProps) {
    return (
        <PublicLayout>
            <Head>
                <title>Tentang & Sejarah - Desa Tolai</title>
                <meta name="description" content="Pelajari sejarah rintisan Astina, visi misi, serta susunan aparatur pemerintahan Desa Tolai, Parigi Moutong." />
            </Head>

            <div className="pt-24 pb-16 space-y-12">
                <VillageAbout profile={profile} />
                <VillageOfficials officials={officials} />
            </div>
        </PublicLayout>
    );
}
