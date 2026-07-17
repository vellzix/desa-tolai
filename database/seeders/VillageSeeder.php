<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\VillageProfile;
use App\Models\VillageOfficial;
use App\Models\VillageNews;
use App\Models\VillagePotential;
use App\Models\VillageGallery;

class VillageSeeder extends Seeder
{
    public function run(): void
    {
        // 1. Village Profile Seeder
        VillageProfile::create([
            'welcome_title' => 'Portal Informasi Desa Tolai',
            'welcome_text' => 'Selamat datang di website resmi Desa Tolai. Sebagai salah satu desa agraris multikultural terbesar di Kabupaten Parigi Moutong, kami berkomitmen untuk mewujudkan tata kelola pemerintahan desa yang bersih, transparan, dan berorientasi melayani masyarakat secara profesional.',
            'welcome_kades_name' => 'I Made Gede Dipayana',
            'welcome_kades_photo' => '/storage/perangkat-desa/I MADE GEDE DIPAYANA_KADES.jpeg',
            'history_text' => "Desa Tolai merupakan hasil pemekaran dari Desa Torue yang resmi berdiri pada 2 Januari 1969. Awalnya, wilayah ini dihuni oleh masyarakat pendatang dari berbagai suku seperti Besoa, Napu, Badak, Kulawi, Poso, Rampi, dan Mori, yang membuka kawasan hutan menjadi lahan pertanian dan permukiman.\n\nKepala Desa Pertama adalah Marius Tumakaka yang memimpin sejak tahun 1969 hingga 1978. Pada masa kepemimpinannya, Desa Tolai berkembang melalui program transmigrasi dari Bali yang turut mendorong pertumbuhan permukiman dan sektor pertanian.\n\nSaat ini, Desa Tolai terus berkembang sebagai desa yang berorientasi pada peningkatan pelayanan publik, pembangunan infrastruktur, pemberdayaan masyarakat, serta pengembangan potensi pertanian. Dengan semangat gotong royong, pemerintah desa berkomitmen mewujudkan desa yang maju, mandiri, dan sejahtera.",
            'vision' => 'Terwujudnya Desa Tolai yang Maju, Transparan, Profesional, dan Harmonis dalam Pelayanan Publik serta Berdaya Saing Tinggi di Bidang Pertanian Modern.',
            'missions' => [
                'Meningkatkan efisiensi tata kelola administrasi desa berbasis digital.',
                'Optimalisasi penyediaan pupuk dan irigasi subak pertanian modern.',
                'Mendorong kegiatan pemuda Karang Taruna dan pembinaan sanggar seni adat.',
                'Memelihara stabilitas toleransi kerukunan antarumat beragama di masyarakat.'
            ],
            'phone' => '+62 822-9111-3320',
            'email' => 'kontak@desatolai.go.id',
            'address' => 'Jl. Trans Sulawesi No. 12, Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah 94473',
            'timings' => 'Senin – Jumat, 08.00 – 15.00 WITA',
        ]);

        // 2. Village Officials Seeder
        $officials = [
            [
                'name' => 'I Made Gede Dipayana',
                'role' => 'Kepala Desa Tolai',
                'nip' => '19760512 200803 1 004',
                'photo_file' => '/storage/perangkat-desa/I MADE GEDE DIPAYANA_KADES.jpeg',
                'photo_label' => 'IMGD',
                'description' => 'Memimpin penyelenggaraan pemerintahan desa, membina ketertiban umum kemasyarakatan, serta menetapkan kebijakan strategis pembangunan Desa Tolai sejak dilantik pada tanggal 26 September 2021.',
                'duty' => [
                    'Memimpin Penyelenggaraan Pemerintahan Desa',
                    'Pengambil Keputusan Anggaran & APBDes',
                    'Pembinaan Hubungan Harmonis Adat & Agama',
                    'Pemberdayaan Kelembagaan Kemasyarakatan'
                ],
                'color' => 'bg-navy-800',
                'sort_order' => 1,
            ],
            [
                'name' => 'I Gede Agus Sukayasa',
                'role' => 'Sekretaris Desa (Sekdes)',
                'nip' => null,
                'photo_file' => '/storage/perangkat-desa/I GEDE AGUS SUKAYASA_SEKDES.jpeg',
                'photo_label' => 'IGAS',
                'description' => 'Membantu Kepala Desa dalam mengoordinasikan administrasi umum, penyusunan draf anggaran kerja tahunan, serta pengawasan kinerja staf pelayanan.',
                'duty' => [
                    'Penyusunan Peraturan Desa & Laporan Kinerja',
                    'Koordinasi Operasional Aparatur Pelaksana',
                    'Manajemen Kearsipan & Administrasi Umum',
                    'Fasilitator Hubungan Antar Lembaga Desa'
                ],
                'color' => 'bg-navy-700',
                'sort_order' => 2,
            ],
            [
                'name' => 'Afandi Ahmad A.',
                'role' => 'Kasi Pemerintahan',
                'nip' => null,
                'photo_file' => '/storage/perangkat-desa/AFANDI AHMAD A_KAUR PEMERINTAHAN.jpeg',
                'photo_label' => 'AAA',
                'description' => 'Mengelola administrasi kependudukan warga, urusan sengketa pertanahan desa, pembinaan ketenteraman, ketertiban umum lingkungan, serta fasilitasi musyawarah dusun.',
                'duty' => [
                    'Verifikasi & Validasi Administrasi Kependudukan',
                    'Fasilitasi Mediasi Pertanahan & Sengketa Batas',
                    'Koordinasi Satuan Perlindungan Masyarakat (Linmas)',
                    'Pembinaan Penegakan Peraturan Desa (Perdes)'
                ],
                'color' => 'bg-navy-600',
                'sort_order' => 3,
            ],
            [
                'name' => 'Ida Bagus Kade Merdana',
                'role' => 'Kasi Kesejahteraan',
                'nip' => null,
                'photo_file' => '/storage/perangkat-desa/IDA BAGUS KADE MERDANA_KAUR KESRA.jpeg',
                'photo_label' => 'IBKM',
                'description' => 'Melaksanakan urusan pembangunan sarana prasarana perdesaan, pembinaan bidang keagamaan, kepemudaan, olahraga, serta pemberdayaan sosial masyarakat adat.',
                'duty' => [
                    'Koordinasi Bantuan Sosial & Data Terpadu (DTKS)',
                    'Pemberdayaan Masyarakat Kelompok Tani',
                    'Fasilitasi Pembinaan Seni & Sanggar Adat Bali/Lokal',
                    'Pemeliharaan Infrastruktur Sosial Desa'
                ],
                'color' => 'bg-navy-600',
                'sort_order' => 4,
            ],
            [
                'name' => 'I Ketut Wedastra',
                'role' => 'Kasi Pelayanan',
                'nip' => null,
                'photo_file' => '/storage/perangkat-desa/I KETUT WEDASTRA_KAUR PELAYANAN.jpeg',
                'photo_label' => 'IKW',
                'description' => 'Mengurus pelayanan sosial kemasyarakatan, penyuluhan kesehatan masyarakat terpadu, pembinaan posyandu, posbindu, serta koordinasi layanan jaminan sosial.',
                'duty' => [
                    'Pengelolaan Program Posyandu Kesehatan Ibu & Anak',
                    'Fasilitasi Pengurusan BPJS Kesehatan/KIS Warga',
                    'Pembinaan Lembaga Adat & Pemberdayaan Perempuan',
                    'Penyuluhan Program Kesehatan Lingkungan Desa'
                ],
                'color' => 'bg-navy-600',
                'sort_order' => 5,
            ],
            [
                'name' => 'Ni Wayan Ayu Handayani',
                'role' => 'Kaur Keuangan',
                'nip' => null,
                'photo_file' => '/storage/perangkat-desa/WhatsApp Image 2026-07-14 at 15.24.09.jpeg',
                'photo_label' => 'NWAH',
                'description' => 'Mengelola penatausahaan keuangan desa, administrasi rekening kas desa, pembayaran belanja program APBDes, pembukuan keuangan, serta pelaporan pajak desa.',
                'duty' => [
                    'Penyusunan Laporan Pertanggungjawaban (SPJ) Keuangan',
                    'Pengelolaan Buku Kas Umum & Rekening Bank Desa',
                    'Administrasi Pembayaran Belanja Modal & Insentif',
                    'Penyetoran Pajak PPN/PPH atas Transaksi Desa'
                ],
                'color' => 'bg-navy-600',
                'sort_order' => 6,
            ],
            [
                'name' => 'Haris Fathul Hadi',
                'role' => 'Kaur Umum & TU',
                'nip' => null,
                'photo_file' => '/storage/perangkat-desa/HARIS FATHUL HADI_KAUR UMUM.jpeg',
                'photo_label' => 'HFH',
                'description' => 'Mengoordinasikan pelayanan persuratan dinas desa, tata usaha kearsipan, pengelolaan aset dan inventaris desa, pelayanan humas protokoler, serta operasional kantor.',
                'duty' => [
                    'Pelayanan Administrasi Surat Keluar & Masuk',
                    'Pengelolaan Inventaris & Aset Kekayaan Desa',
                    'Penyediaan Sarana Prasarana Operasional Kantor',
                    'Dokumentasi & Publikasi Humas Kegiatan Resmi'
                ],
                'color' => 'bg-navy-600',
                'sort_order' => 7,
            ],
            [
                'name' => 'I Wayan Aget',
                'role' => 'Kaur Perencanaan',
                'nip' => null,
                'photo_file' => null,
                'photo_label' => 'IWA',
                'description' => 'Mengoordinasikan penyusunan dokumen perencanaan pembangunan desa (RPJMDes, RKPDes), serta menyusun draf anggaran pendapatan belanja desa (APBDes).',
                'duty' => [
                    'Penyusunan RPJMDes & RKPDes Tahunan',
                    'Penyusunan Draf APBDes & Perubahan Anggaran',
                    'Evaluasi & Monitoring Realisasi Pembangunan',
                    'Penyusunan Laporan Keterangan LPPD/LKPJ Desa'
                ],
                'color' => 'bg-navy-600',
                'sort_order' => 8,
            ]
        ];

        foreach ($officials as $official) {
            VillageOfficial::create($official);
        }

        // 3. Village Potentials Seeder
        $potentials = [
            [
                'title' => 'Lumbung Padi Organik',
                'badge' => 'Pertanian',
                'description' => 'Penghasil beras premium berkualitas tinggi dengan sistem irigasi subak semi-tradisional.',
                'details' => ['Luas sawah produktif > 500 hektar', 'Penerapan pupuk organik berkelanjutan', 'Distribusi lintas provinsi di Sulawesi'],
                'category' => 'economy',
                'icon' => 'Wheat',
            ],
            [
                'title' => 'Perkebunan Kakao & Cengkih',
                'badge' => 'Perkebunan',
                'description' => 'Komoditas andalan perkebunan rakyat Tolai yang mensuplai pabrik pengolahan cokelat regional.',
                'details' => ['Rata-rata panen 400 ton/tahun', 'Pembinaan petani kakao terpadu', 'Kemitraan ekspor lokal'],
                'category' => 'economy',
                'icon' => 'Sprout',
            ],
            [
                'title' => 'Perdagangan Trans Sulawesi',
                'badge' => 'Niaga & Jasa',
                'description' => 'Terletak strategis di jalur poros Trans Sulawesi menjadikannya pusat niaga teraktif di Kecamatan Torue.',
                'details' => ['Pasar Tradisional Tolai harian', 'Pusat kuliner khas Nusantara', 'Sentra kerajinan anyaman'],
                'category' => 'economy',
                'icon' => 'Landmark',
            ],
            [
                'title' => 'Pawai Ogoh-Ogoh Nyepi',
                'badge' => 'Budaya & Pariwisata',
                'description' => 'Event tahunan terbesar Parigi Moutong menampilkan replika raksasa simbol pembersihan diri.',
                'details' => ['Dihadiri ribuan wisatawan domestik', 'Melibatkan pemuda lintas agama', 'Penas kolosal malam Pangerupukan'],
                'category' => 'culture',
                'icon' => 'Award',
            ],
            [
                'title' => 'Seni Tari & Gamelan Bali',
                'badge' => 'Kesenian Tradisional',
                'description' => 'Pelestarian seni tari klasik dan tabuh gamelan Bali asli yang dikelola oleh Sanggar Seni Banjar.',
                'details' => ['Kursus gratis untuk anak-anak desa', 'Mengisi festival adat & pemerintahan', 'Kolaborasi musik etnik lokal'],
                'category' => 'culture',
                'icon' => 'Users',
            ],
            [
                'title' => 'Bhinneka Tunggal Ika',
                'badge' => 'Harmoni Keberagaman',
                'description' => 'Model toleransi kerukunan umat beragama (Islam, Hindu, Kristen) yang hidup rukun berdampingan.',
                'details' => ['Pembangunan gotong royong pura-masjid', 'Forum kerukunan pemuda desa', 'Saling jaga saat perayaan hari besar'],
                'category' => 'culture',
                'icon' => 'Heart',
            ],
        ];

        foreach ($potentials as $potential) {
            VillagePotential::create($potential);
        }

        // 4. Village News Seeder
        $news = [
            [
                'title' => 'Persiapan Pawai Ogoh-Ogoh Nyepi Caka 1948 di Desa Tolai Capai 80%',
                'category' => 'agenda',
                'date' => '10 Juli 2026',
                'excerpt' => 'Panitia perayaan Hari Raya Nyepi Desa Tolai mengonfirmasi pelaksanaan pawai Ogoh-Ogoh yang dipusatkan di perempatan utama Trans Sulawesi Banjar Astina...',
                'image_path' => 'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?q=80&w=600&auto=format&fit=crop',
                'content' => "Panitia perayaan Hari Raya Nyepi Desa Tolai mengonfirmasi pelaksanaan pawai Ogoh-Ogoh yang dipusatkan di perempatan utama Trans Sulawesi Banjar Astina.\n\nPersiapan ini mencakup pembuatan ogoh-ogoh oleh para pemuda banjar, pengamanan rute oleh pecalang dan pihak kepolisian, serta koordinasi dengan pemerintah daerah. Kegiatan ini diharapkan dapat berjalan dengan tertib dan khidmat.",
                'tags' => ['Budaya', 'Festival', 'Nyepi'],
                'views' => 428,
            ],
            [
                'title' => 'Panen Raya Padi Organik Banjar Astina Alami Peningkatan Produktivitas',
                'category' => 'berita',
                'date' => '08 Juli 2026',
                'excerpt' => 'Kelompok Tani Subak Merta Sari Desa Tolai melaporkan kenaikan volume hasil panen padi organik berkat implementasi sistem irigasi hemat air terpadu...',
                'image_path' => 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?q=80&w=600&auto=format&fit=crop',
                'content' => "Kelompok Tani Subak Merta Sari Desa Tolai melaporkan kenaikan volume hasil panen padi organik berkat implementasi sistem irigasi hemat air terpadu.\n\nPeningkatan produktivitas ini mencapai 15% dibandingkan tahun lalu. Penggunaan pupuk organik dan tata kelola air subak yang teratur dinilai menjadi kunci utama keberhasilan panen raya musim ini.",
                'tags' => ['Pertanian', 'Lumbung Padi', 'Ekonomi'],
                'views' => 312,
            ],
            [
                'title' => 'Jadwal Pemeriksaan Kesehatan Gratis Posyandu Balita dan Lansia Serentak',
                'category' => 'pengumuman',
                'date' => '05 Juli 2026',
                'excerpt' => 'Pemerintah Desa Tolai bersama kader PKK mengumumkan jadwal pelaksanaan Posyandu bulanan untuk Balita dan Lansia di masing-masing Pos Dusun...',
                'image_path' => 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop',
                'content' => "Pemerintah Desa Tolai bersama kader PKK mengumumkan jadwal pelaksanaan Posyandu bulanan untuk Balita dan Lansia di masing-masing Pos Dusun.\n\nLayanan gratis meliputi penimbangan berat badan, pemeriksaan tensi darah, pemberian makanan tambahan (PMT), serta konsultasi kesehatan umum. Diharapkan seluruh warga dapat berpartisipasi aktif.",
                'tags' => ['Kesehatan', 'Posyandu', 'Keluarga'],
                'views' => 189,
            ],
            [
                'title' => 'Warga Lintas Agama Gotong Royong Penataan Sarana Sosial Lingkungan',
                'category' => 'berita',
                'date' => '02 Juli 2026',
                'excerpt' => 'Menyambut HUT Kemerdekaan, warga lintas agama Desa Tolai bergotong royong melakukan pembersihan dan penataan jalan poros desa demi kenyamanan berkendara...',
                'image_path' => 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600&auto=format&fit=crop',
                'content' => "Menyambut HUT Kemerdekaan, warga lintas agama Desa Tolai bergotong royong melakukan pembersihan dan penataan jalan poros desa demi kenyamanan berkendara.\n\nKerja bakti ini diikuti oleh ratusan pemuda dari berbagai latar belakang keyakinan, mencerminkan tingginya nilai toleransi dan kebersamaan di Desa Tolai.",
                'tags' => ['Sosial', 'Gotong Royong', 'Toleransi'],
                'views' => 254,
            ],
            [
                'title' => 'Musyawarah Rencana Pembangunan Desa (Musrenbangdes) Tolai Tahun Anggaran 2027',
                'category' => 'agenda',
                'date' => '28 Juni 2026',
                'excerpt' => 'Seluruh perwakilan warga, BPD, dan tokoh masyarakat diundang menghadiri Musrenbangdes guna merumuskan program prioritas pembangunan fisik dan ekonomi...',
                'image_path' => 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?q=80&w=600&auto=format&fit=crop',
                'content' => "Seluruh perwakilan warga, BPD, dan tokoh masyarakat diundang menghadiri Musrenbangdes guna merumuskan program prioritas pembangunan fisik dan ekonomi.\n\nRencana pembangunan tahun depan akan menitikberatkan pada perbaikan jalan usaha tani, pengadaan alat pertanian modern, dan peningkatan kualitas poskesdes.",
                'tags' => ['Musyawarah', 'Pembangunan', 'Anggaran'],
                'views' => 195,
            ],
            [
                'title' => 'Penyaluran Bantuan Langsung Tunai Dana Desa (BLT-DD) Tahap II Sukses Disalurkan',
                'category' => 'pengumuman',
                'date' => '25 Juni 2026',
                'excerpt' => 'Pemerintah Desa Tolai telah merampungkan penyaluran bantuan tunai langsung tahap kedua kepada Keluarga Penerima Manfaat (KPM) prasejahtera...',
                'image_path' => 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&w=600&auto=format&fit=crop',
                'content' => "Pemerintah Desa Tolai telah merampungkan penyaluran bantuan tunai langsung tahap kedua kepada Keluarga Penerima Manfaat (KPM) prasejahtera.\n\nSebanyak 85 KPM telah menerima bantuan secara tunai di Balai Desa dengan tertib. Bantuan ini diharapkan dapat meringankan beban ekonomi keluarga penerima manfaat.",
                'tags' => ['Bantuan', 'Bansos', 'Pemerintah'],
                'views' => 298,
            ]
        ];

        foreach ($news as $item) {
            VillageNews::create($item);
        }

        // 5. Village Gallery Seeder
        $galleries = [
            [
                'title' => 'Kantor Desa Tolai',
                'description' => 'Pusat pelayanan administrasi dan koordinasi pemerintahan Desa Tolai.',
                'image_path' => '/storage/WhatsApp Image 2026-07-13 at 14.07.13.jpeg',
                'category' => 'fasilitas',
            ],
            [
                'title' => 'Aparatur Desa Tolai',
                'description' => 'Foto bersama jajaran perangkat Desa Tolai periode 2021-2027.',
                'image_path' => '/storage/perangkat-desa/WhatsApp Image 2026-07-14 at 15.24.16.jpeg',
                'category' => 'kegiatan',
            ]
        ];

        foreach ($galleries as $gallery) {
            VillageGallery::create($gallery);
        }
    }
}
