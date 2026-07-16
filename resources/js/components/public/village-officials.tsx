import { useState } from 'react';
import { Landmark, Star, BookOpen, ShieldCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Official {
    name: string;
    role: string;
    nip?: string;
    photoLabel: string;
    description: string;
    duty: string[];
    color: string;
}

export default function VillageOfficials() {
    const [selectedOfficial, setSelectedOfficial] = useState<Official | null>(null);

    const officials: Official[] = [
        {
            name: 'I Made Gede Dipayana',
            role: 'Kepala Desa Tolai',
            nip: '19760512 200803 1 004',
            photoLabel: 'IMGD',
            description: 'Memimpin penyelenggaraan pemerintahan desa, membina ketertiban umum kemasyarakatan, serta menetapkan kebijakan strategis pembangunan Desa Tolai sejak dilantik pada tanggal 26 September 2021.',
            duty: [
                'Memimpin Penyelenggaraan Pemerintahan Desa',
                'Pengambil Keputusan Anggaran & APBDes',
                'Pembinaan Hubungan Harmonis Adat & Agama',
                'Pemberdayaan Kelembagaan Kemasyarakatan'
            ],
            color: 'bg-olive-800',
        },
        {
            name: 'I Gede Agus Sukayasa',
            role: 'Sekretaris Desa (Sekdes)',
            photoLabel: 'IGAS',
            description: 'Membantu Kepala Desa dalam mengoordinasikan administrasi umum, penyusunan draf anggaran kerja tahunan, serta pengawasan kinerja staf pelayanan.',
            duty: [
                'Penyusunan Peraturan Desa & Laporan Kinerja',
                'Koordinasi Operasional Aparatur Pelaksana',
                'Manajemen Kearsipan & Administrasi Umum',
                'Fasilitator Hubungan Antar Lembaga Desa'
            ],
            color: 'bg-moss-700',
        },
        {
            name: 'Afandi Ahmad. A',
            role: 'Kepala Seksi Pemerintahan',
            photoLabel: 'AAA',
            description: 'Mengelola administrasi kependudukan warga, urusan sengketa pertanahan desa, pembinaan ketenteraman, ketertiban umum lingkungan, serta fasilitasi musyawarah dusun.',
            duty: [
                'Verifikasi & Validasi Administrasi Kependudukan',
                'Fasilitasi Mediasi Pertanahan & Sengketa Batas',
                'Koordinasi Satuan Perlindungan Masyarakat (Linmas)',
                'Pembinaan Penegakan Peraturan Desa (Perdes)'
            ],
            color: 'bg-moss-700',
        },
        {
            name: 'Ida Kade Bagus Merdana',
            role: 'Kepala Seksi Kesejahteraan',
            photoLabel: 'IKBM',
            description: 'Melaksanakan urusan pembangunan sarana prasarana perdesaan, pembinaan bidang keagamaan, kepemudaan, olahraga, serta pemberdayaan sosial masyarakat adat.',
            duty: [
                'Koordinasi Bantuan Sosial & Data Terpadu (DTKS)',
                'Pemberdayaan Masyarakat Kelompok Tani',
                'Fasilitasi Pembinaan Seni & Sanggar Adat Bali/Lokal',
                'Pemeliharaan Infrastruktur Sosial Desa'
            ],
            color: 'bg-moss-700',
        },
        {
            name: 'I Ketut Wedastra',
            role: 'Kepala Seksi Pelayanan',
            photoLabel: 'IKW',
            description: 'Mengurus pelayanan sosial kemasyarakatan, penyuluhan kesehatan masyarakat terpadu, pembinaan posyandu, posbindu, serta koordinasi layanan jaminan sosial.',
            duty: [
                'Pengelolaan Program Posyandu Kesehatan Ibu & Anak',
                'Fasilitasi Pengurusan BPJS Kesehatan/KIS Warga',
                'Pembinaan Lembaga Adat & Pemberdayaan Perempuan',
                'Penyuluhan Program Kesehatan Lingkungan Desa'
            ],
            color: 'bg-moss-700',
        },
        {
            name: 'I Nyoman Agus Yudianto',
            role: 'Kepala Urusan Umum & TU',
            photoLabel: 'INAY',
            description: 'Mengoordinasikan pelayanan persuratan dinas desa, tata usaha kearsipan, pengelolaan aset dan inventaris desa, pelayanan humas protokoler, serta operasional kantor.',
            duty: [
                'Pelayanan Administrasi Surat Keluar & Masuk',
                'Pengelolaan Inventaris & Aset Kekayaan Desa',
                'Penyediaan Sarana Prasarana Operasional Kantor',
                'Dokumentasi & Publikasi Humas Kegiatan Resmi'
            ],
            color: 'bg-moss-700',
        },
        {
            name: 'I Made Ardika',
            role: 'Kepala Urusan Keuangan',
            photoLabel: 'IMA',
            description: 'Mengelola penatausahaan keuangan desa, administrasi rekening kas desa, pembayaran belanja program APBDes, pembukuan keuangan, serta pelaporan pajak desa.',
            duty: [
                'Penyusunan Laporan Pertanggungjawaban (SPJ) Keuangan',
                'Pengelolaan Buku Kas Umum & Rekening Bank Desa',
                'Administrasi Pembayaran Belanja Modal & Insentif',
                'Penyetoran Pajak PPN/PPH atas Transaksi Desa'
            ],
            color: 'bg-moss-700',
        },
        {
            name: 'I Wayan Aget',
            role: 'Kepala Urusan Perencanaan',
            photoLabel: 'IWA',
            description: 'Mengoordinasikan penyusunan dokumen perencanaan pembangunan desa (RPJMDes, RKPDes), serta menyusun draf anggaran pendapatan belanja desa (APBDes).',
            duty: [
                'Penyusunan RPJMDes & RKPDes Tahunan',
                'Penyusunan Draf APBDes & Perubahan Anggaran',
                'Evaluasi & Monitoring Realisasi Pembangunan',
                'Penyusunan Laporan Keterangan LPPD/LKPJ Desa'
            ],
            color: 'bg-moss-700',
        }
    ];

    return (
        <section id="officials" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-none sm:rounded-xl shadow-sm">
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-1 bg-olive-700 rounded-full" />
                            <span className="text-[11px] font-bold text-olive-700 dark:text-gold-500 uppercase tracking-widest">Struktur Organisasi</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                            Aparatur Pemerintah Desa
                        </h2>
                        <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400">
                            Jajaran perangkat pelaksana pelayanan publik administrasi Desa Tolai.
                        </p>
                    </div>
                    <div className="text-xs text-neutral-400 shrink-0 flex items-center gap-1.5">
                        <Landmark className="h-3.5 w-3.5 text-olive-700" />
                        <span>Periode Jabatan 2021–2027</span>
                    </div>
                </div>

                {/* Officials Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {officials.map((official, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedOfficial(official)}
                            className="group flex flex-col items-center text-center p-4 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg cursor-pointer hover:border-olive-300 dark:hover:border-olive-800 hover:shadow-sm transition-all duration-200"
                        >
                            {/* Avatar */}
                            <div className={`h-14 w-14 rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 ${official.color} text-white flex items-center justify-center font-bold text-sm shadow-sm mb-3`}>
                                {official.photoLabel}
                            </div>

                            {/* Name & Role */}
                            <h4 className="text-[11px] font-bold text-neutral-900 dark:text-white line-clamp-2 leading-snug">
                                {official.name}
                            </h4>
                            <p className="text-[10px] text-olive-700 dark:text-gold-500 font-semibold mt-1 leading-tight">
                                {official.role}
                            </p>

                            {/* Tap for detail text */}
                            <span className="text-[10px] text-neutral-400 mt-3 flex items-center gap-1 group-hover:text-olive-700 transition-colors">
                                <BookOpen className="h-3 w-3" />
                                Lihat tugas
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Official Detail Modal */}
            {selectedOfficial && (
                <Dialog open={!!selectedOfficial} onOpenChange={(open) => !open && setSelectedOfficial(null)}>
                    <DialogContent className="max-w-md bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 text-neutral-900 dark:text-white rounded-lg shadow-xl p-6">
                        <DialogHeader className="flex flex-col items-center text-center">
                            {/* Avatar representation */}
                            <div className={`h-20 w-20 rounded-full overflow-hidden border border-neutral-200 ${selectedOfficial.color} text-white flex items-center justify-center font-bold text-xl shadow-md mb-4`}>
                                {selectedOfficial.photoLabel}
                            </div>

                            <DialogTitle className="text-base font-bold text-neutral-950 dark:text-white leading-tight">
                                {selectedOfficial.name}
                            </DialogTitle>
                            <DialogDescription className="text-xs font-bold text-olive-700 dark:text-gold-500 uppercase tracking-widest mt-1">
                                {selectedOfficial.role}
                            </DialogDescription>
                            {selectedOfficial.nip && (
                                <p className="text-[10px] text-neutral-400 font-sans mt-0.5">NIP: {selectedOfficial.nip}</p>
                            )}
                        </DialogHeader>

                        {/* Bio & Duties */}
                        <div className="mt-6 space-y-4 text-xs">
                            <div>
                                <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-1 flex items-center gap-1">
                                    <Star className="h-3.5 w-3.5 text-gold-500" />
                                    Deskripsi Jabatan
                                </h5>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                                    {selectedOfficial.description}
                                </p>
                            </div>

                            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
                                <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1">
                                    <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
                                    Tanggung Jawab Utama
                                </h5>
                                <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-300">
                                    {selectedOfficial.duty.map((task, idx) => (
                                        <li key={idx} className="flex items-start gap-1.5">
                                            <span className="h-1.5 w-1.5 bg-olive-700 rounded-full mt-1.5 shrink-0" />
                                            <span>{task}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </section>
    );
}
