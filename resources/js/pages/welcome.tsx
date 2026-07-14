import { Head } from '@inertiajs/react';
import PublicLayout from '@/layouts/public-layout';
import VillageHero from '@/components/public/village-hero';

export default function Welcome() {
    return (
        <PublicLayout>
            <Head>
                <title>Desa Tolai - Parigi Moutong, Sulawesi Tengah</title>
                <meta name="description" content="Website Resmi Profil Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah. Informasi sejarah Astina, tradisi Bali, pertanian padi dan kakao, serta pelayanan administrasi surat mandiri." />
                <meta property="og:title" content="Desa Tolai - Parigi Moutong, Sulawesi Tengah" />
                <meta property="og:description" content="Website Resmi Profil Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong. Informasi sejarah Astina, tradisi Bali, pertanian padi dan kakao, serta pelayanan administrasi surat mandiri." />
                <meta property="og:type" content="website" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            </Head>

            {/* Render the Hero Landing View */}
            <VillageHero />
        </PublicLayout>
    );
}
