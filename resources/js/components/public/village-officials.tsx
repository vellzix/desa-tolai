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
            color: 'from-sky-800 to-slate-900',
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
            color: 'from-slate-700 to-slate-900',
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
            color: 'from-slate-700 to-slate-900',
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
            color: 'from-slate-700 to-slate-900',
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
            color: 'from-slate-700 to-slate-900',
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
            color: 'from-slate-700 to-slate-900',
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
            color: 'from-slate-700 to-slate-900',
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
            color: 'from-slate-700 to-slate-900',
        }
    ];

    return (
        <section id="officials" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-[#121214] border border-neutral-200/90 dark:border-neutral-800/90 rounded-2xl shadow-md">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Aparatur Pemerintah Desa
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-sky-700 to-emerald-600 mx-auto mt-4 rounded-full" />
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                        Jajaran perangkat pelaksana pelayanan publik administrasi Desa Tolai.
                    </p>
                </div>

                {/* Officials Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {officials.map((official, idx) => (
                        <div
                            key={idx}
                            onClick={() => setSelectedOfficial(official)}
                            className="group flex flex-col items-center text-center p-5 bg-neutral-50/40 dark:bg-[#121214]/40 border border-neutral-200 dark:border-neutral-800 rounded-lg cursor-pointer hover:shadow-sm transition-all duration-200"
                        >
                            {/* Avatar */}
                            <div className={`h-16 w-16 rounded-full overflow-hidden border border-neutral-200 dark:border-neutral-700 bg-gradient-to-tr ${official.color} text-white flex items-center justify-center font-bold text-base shadow-sm mb-4`}>
                                {official.photoLabel}
                            </div>

                            {/* Name & Role */}
                            <h4 className="text-[11px] font-extrabold text-neutral-950 dark:text-white line-clamp-2 leading-snug">
                                {official.name}
                            </h4>
                            <p className="text-[9px] font-bold text-sky-800 dark:text-sky-400 uppercase tracking-wider mt-1">
                                {official.role}
                            </p>

                            {/* Tap for detail text */}
                            <span className="text-[9px] text-neutral-400 mt-4 group-hover:underline flex items-center gap-0.5">
                                <BookOpen className="h-3 w-3" />
                                Rincian tugas
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
                            <div className={`h-20 w-20 rounded-full overflow-hidden border border-neutral-200 bg-gradient-to-tr ${selectedOfficial.color} text-white flex items-center justify-center font-bold text-xl shadow-md mb-4`}>
                                {selectedOfficial.photoLabel}
                            </div>

                            <DialogTitle className="text-base font-bold text-neutral-950 dark:text-white leading-tight">
                                {selectedOfficial.name}
                            </DialogTitle>
                            <DialogDescription className="text-xs font-bold text-sky-800 dark:text-sky-400 uppercase tracking-widest mt-1">
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
                                    <Star className="h-3.5 w-3.5 text-sky-800" />
                                    Deskripsi Jabatan
                                </h5>
                                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-justify">
                                    {selectedOfficial.description}
                                </p>
                            </div>

                            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
                                <h5 className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1">
                                    <ShieldCheck className="h-3.5 w-3.5 text-sky-800" />
                                    Tanggung Jawab Utama
                                </h5>
                                <ul className="space-y-1.5 text-neutral-600 dark:text-neutral-300">
                                    {selectedOfficial.duty.map((task, idx) => (
                                        <li key={idx} className="flex items-start gap-1.5">
                                            <span className="h-1.5 w-1.5 bg-sky-800 rounded-full mt-1.5 shrink-0" />
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
