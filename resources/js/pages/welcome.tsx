import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import VillageHero from '@/components/public/village-hero';
import VillageAbout from '@/components/public/village-about';
import VillageOfficials from '@/components/public/village-officials';
import VillagePotentials from '@/components/public/village-potentials';
import VillageNews from '@/components/public/village-news';
import VillageHamletHeads from '@/components/public/village-hamlet-heads';

interface WelcomeProps {
    profile: any;
    officials: any[];
    potentials: any[];
    news: any[];
    hamletHeads?: any[];
}

export default function Welcome({ profile, officials, potentials, news, hamletHeads }: WelcomeProps) {
    return (
        <PublicLayout>
            <Head>
                <title>Desa Tolai - Parigi Moutong, Sulawesi Tengah</title>
                <meta name="description" content="Website Resmi Profil Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah. Informasi sejarah, tradisi, pertanian padi dan kakao, serta pelayanan administrasi desa." />
                <meta property="og:title" content="Desa Tolai - Parigi Moutong, Sulawesi Tengah" />
                <meta property="og:description" content="Website Resmi Profil Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong. Informasi sejarah, potensi pertanian, dan pelayanan administrasi desa." />
                <meta property="og:type" content="website" />
                <link rel="icon" type="image/png" href="/Lambang_Kabupaten_Parigi_Moutong.png" />
            </Head>

            {/* Hero — Landing Utama */}
            <VillageHero statsCards={profile?.stats_cards} />

            {/* Konten Profil Desa */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10 space-y-0">

                {/* Selayang Pandang */}
                <VillageAbout profile={profile} />

                {/* Aparatur Pemerintah Desa */}
                <VillageOfficials officials={officials} />
                <VillageHamletHeads hamletHeads={hamletHeads} />

                {/* Potensi Wilayah & Kebudayaan */}
                <VillagePotentials potentials={potentials} />

                {/* Kabar & Kegiatan Desa */}
                <VillageNews news={news} />

            </div>
        </PublicLayout>
    );
}
