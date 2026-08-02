import { Star, ShieldCheck, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

interface Official {
    name: string;
    role: string;
    nip?: string;
    photoFile?: string;
    photoLabel: string;
    description: string;
    duty: string[];
    color: string;
}

function OfficialPhoto({ official, className }: { official: Official; className?: string }) {
    return official.photoFile ? (
        <img
            src={official.photoFile}
            alt={official.name}
            className={`w-full h-full object-cover object-top ${className ?? ''}`}
        />
    ) : (
        <div className={`w-full h-full ${official.color} text-white flex items-center justify-center font-bold text-xl ${className ?? ''}`}>
            {official.photoLabel}
        </div>
    );
}

export default function VillageOfficials({ officials = [] }: { officials?: Official[] }) {
    const [selectedOfficial, setSelectedOfficial] = useState<Official | null>(null);

    const defaultOfficials: Official[] = [
        {
            name: 'I Made Gede Dipayana',
            role: 'Kepala Desa Tolai',
            nip: '19760512 200803 1 004',
            photoFile: '/storage/perangkat-desa/I MADE GEDE DIPAYANA_KADES.jpeg',
            photoLabel: 'IMGD',
            description: 'Memimpin penyelenggaraan pemerintahan desa, membina ketertiban umum kemasyarakatan, serta menetapkan kebijakan strategis pembangunan Desa Tolai sejak dilantik pada tanggal 26 September 2021.',
            duty: [
                'Memimpin Penyelenggaraan Pemerintahan Desa',
                'Pengambil Keputusan Anggaran & APBDes',
                'Pembinaan Hubungan Harmonis Adat & Agama',
                'Pemberdayaan Kelembagaan Kemasyarakatan',
            ],
            color: 'bg-navy-800',
        },
        {
            name: 'I Gede Agus Sukayasa',
            role: 'Sekretaris Desa (Sekdes)',
            photoFile: '/storage/perangkat-desa/I GEDE AGUS SUKAYASA_SEKDES.jpeg',
            photoLabel: 'IGAS',
            description: 'Membantu Kepala Desa dalam mengoordinasikan administrasi umum, penyusunan draf anggaran kerja tahunan, serta pengawasan kinerja staf pelayanan.',
            duty: [
                'Penyusunan Peraturan Desa & Laporan Kinerja',
                'Koordinasi Operasional Aparatur Pelaksana',
                'Manajemen Kearsipan & Administrasi Umum',
                'Fasilitator Hubungan Antar Lembaga Desa',
            ],
            color: 'bg-navy-700',
        },
        {
            name: 'Afandi Ahmad A.',
            role: 'Kasi Pemerintahan',
            photoFile: '/storage/perangkat-desa/AFANDI AHMAD A_KAUR PEMERINTAHAN.jpeg',
            photoLabel: 'AAA',
            description: 'Mengelola administrasi kependudukan warga, urusan sengketa pertanahan desa, pembinaan ketenteraman, ketertiban umum lingkungan, serta fasilitasi musyawarah dusun.',
            duty: [
                'Verifikasi & Validasi Administrasi Kependudukan',
                'Fasilitasi Mediasi Pertanahan & Sengketa Batas',
                'Koordinasi Satuan Perlindungan Masyarakat (Linmas)',
                'Pembinaan Penegakan Peraturan Desa (Perdes)',
            ],
            color: 'bg-navy-600',
        },
        {
            name: 'Ida Bagus Kade Merdana',
            role: 'Kasi Kesejahteraan',
            photoFile: '/storage/perangkat-desa/IDA BAGUS KADE MERDANA_KAUR KESRA.jpeg',
            photoLabel: 'IBKM',
            description: 'Melaksanakan urusan pembangunan sarana prasarana perdesaan, pembinaan bidang keagamaan, kepemudaan, olahraga, serta pemberdayaan sosial masyarakat adat.',
            duty: [
                'Koordinasi Bantuan Sosial & Data Terpadu (DTKS)',
                'Pemberdayaan Masyarakat Kelompok Tani',
                'Fasilitasi Pembinaan Seni & Sanggar Adat Bali/Lokal',
                'Pemeliharaan Infrastruktur Sosial Desa',
            ],
            color: 'bg-navy-600',
        },
        {
            name: 'I Ketut Wedastra',
            role: 'Kasi Pelayanan',
            photoFile: '/storage/perangkat-desa/I KETUT WEDASTRA_KAUR PELAYANAN.jpeg',
            photoLabel: 'IKW',
            description: 'Mengurus pelayanan sosial kemasyarakatan, penyuluhan kesehatan masyarakat terpadu, pembinaan posyandu, posbindu, serta koordinasi layanan jaminan sosial.',
            duty: [
                'Pengelolaan Program Posyandu Kesehatan Ibu & Anak',
                'Fasilitasi Pengurusan BPJS Kesehatan/KIS Warga',
                'Pembinaan Lembaga Adat & Pemberdayaan Perempuan',
                'Penyuluhan Program Kesehatan Lingkungan Desa',
            ],
            color: 'bg-navy-600',
        },
        {
            name: 'Ni Wayan Ayu Handayani',
            role: 'Kaur Keuangan',
            photoFile: '/storage/perangkat-desa/WhatsApp Image 2026-07-14 at 15.24.09.jpeg',
            photoLabel: 'NWAH',
            description: 'Mengelola penatausahaan keuangan desa, administrasi rekening kas desa, pembayaran belanja program APBDes, pembukuan keuangan, serta pelaporan pajak desa.',
            duty: [
                'Penyusunan Laporan Pertanggungjawaban (SPJ) Keuangan',
                'Pengelolaan Buku Kas Umum & Rekening Bank Desa',
                'Administrasi Pembayaran Belanja Modal & Insentif',
                'Penyetoran Pajak PPN/PPH atas Transaksi Desa',
            ],
            color: 'bg-navy-600',
        },
        {
            name: 'Haris Fathul Hadi',
            role: 'Kaur Umum & TU',
            photoFile: '/storage/perangkat-desa/HARIS FATHUL HADI_KAUR UMUM.jpeg',
            photoLabel: 'HFH',
            description: 'Mengoordinasikan pelayanan persuratan dinas desa, tata usaha kearsipan, pengelolaan aset dan inventaris desa, pelayanan humas protokoler, serta operasional kantor.',
            duty: [
                'Pelayanan Administrasi Surat Keluar & Masuk',
                'Pengelolaan Inventaris & Aset Kekayaan Desa',
                'Penyediaan Sarana Prasarana Operasional Kantor',
                'Dokumentasi & Publikasi Humas Kegiatan Resmi',
            ],
            color: 'bg-navy-600',
        },
        {
            name: 'I Wayan Aget',
            role: 'Kaur Perencanaan',
            photoLabel: 'IWA',
            description: 'Mengoordinasikan penyusunan dokumen perencanaan pembangunan desa (RPJMDes, RKPDes), serta menyusun draf anggaran pendapatan belanja desa (APBDes).',
            duty: [
                'Penyusunan RPJMDes & RKPDes Tahunan',
                'Penyusunan Draf APBDes & Perubahan Anggaran',
                'Evaluasi & Monitoring Realisasi Pembangunan',
                'Penyusunan Laporan Keterangan LPPD/LKPJ Desa',
            ],
            color: 'bg-navy-600',
        },
    ];

    const activeOfficials = (officials.length > 0 ? officials : defaultOfficials).map((o: any) => ({
        ...o,
        photoFile: o.photo_file || o.photoFile,
        photoLabel: o.photo_label || o.photoLabel,
    }));

    // Split: pimpinan (top 2) and staff (rest)
    const pimpinan = activeOfficials.slice(0, 2);
    const staff = activeOfficials.slice(2);

    return (
        <section id="officials" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 rounded-xl shadow-sm">

                {/* ── Section Header ── */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-6 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-1 bg-navy-700 rounded-full" />
                            <span className="text-[11px] font-bold text-navy-700 dark:text-gold-500 uppercase tracking-widest">
                                Struktur Organisasi
                            </span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white tracking-tight">
                            Aparatur Pemerintah Desa
                        </h2>
                        <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400">
                            Jajaran perangkat pelaksana pelayanan publik administrasi Desa Tolai.
                        </p>
                    </div>
                </div>

                {/* ── Pimpinan: Kades & Sekdes — Featured Large Cards ── */}
                <div className="mb-10">
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">
                        Kepemimpinan Desa
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {pimpinan.map((official, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedOfficial(official)}
                                className="group flex flex-col bg-stone-50 dark:bg-navy-900/50 border border-stone-200 dark:border-navy-800 cursor-pointer hover:border-navy-400 dark:hover:border-navy-500 hover:shadow-xl transition-all duration-200 overflow-hidden rounded-lg"
                            >
                                {/* Foto portrait besar — 3/4 tinggi kartu */}
                                <div className="w-full aspect-[3/4] overflow-hidden bg-stone-200 dark:bg-navy-800 relative">
                                    <OfficialPhoto official={official} className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500" />
                                    {/* Gradient overlay bawah */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                                    {/* Badge jabatan di atas foto */}
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-navy-700/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest mb-1.5 rounded">
                                            {idx === 0 ? 'Kepala Desa' : 'Sekretaris Desa'}
                                        </div>
                                        <h3 className="text-base font-bold text-white leading-snug drop-shadow">
                                            {official.name}
                                        </h3>
                                    </div>
                                </div>

                                {/* Info ringkas di bawah foto */}
                                <div className="p-4 border-t border-stone-200 dark:border-navy-800">
                                    <p className="text-xs text-stone-500 dark:text-stone-400 leading-relaxed line-clamp-2">
                                        {official.description}
                                    </p>
                                    <span className="mt-3 inline-flex items-center gap-1 text-xs text-navy-600 dark:text-gold-400 font-semibold group-hover:underline">
                                        Lihat detail tugas <ChevronRight className="h-3.5 w-3.5" />
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Perangkat Desa — Portrait Card Grid ── */}
                <div>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-4">
                        Perangkat Pelaksana
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {staff.map((official, idx) => (
                            <div
                                key={idx}
                                onClick={() => setSelectedOfficial(official)}
                                className="group flex flex-col bg-stone-50 dark:bg-navy-900/50 border border-stone-200 dark:border-navy-800 cursor-pointer hover:border-navy-400 dark:hover:border-navy-500 hover:shadow-xl transition-all duration-200 overflow-hidden rounded-lg"
                            >
                                {/* Foto portrait — aspect 3/4, lebih tinggi */}
                                <div className="w-full aspect-[3/4] overflow-hidden bg-stone-200 dark:bg-navy-800 relative">
                                    <OfficialPhoto official={official} className="object-cover object-top w-full h-full group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-transparent to-transparent" />
                                </div>

                                {/* Info below photo */}
                                <div className="p-3 border-t border-stone-200 dark:border-navy-800">
                                    <h4 className="text-[12px] font-bold text-navy-900 dark:text-white leading-snug line-clamp-2 h-9">
                                        {official.name}
                                    </h4>
                                    <p className="text-[10px] text-navy-600 dark:text-gold-400 font-semibold mt-0.5 leading-tight truncate">
                                        {official.role}
                                    </p>
                                    <span className="mt-2 flex items-center gap-1 text-[10px] text-stone-400 group-hover:text-navy-600 dark:group-hover:text-gold-400 transition-colors">
                                        <ChevronRight className="h-3 w-3" />
                                        Lihat tugas
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Official Detail Modal ── */}
            {selectedOfficial && (
                <Dialog open={!!selectedOfficial} onOpenChange={(open) => !open && setSelectedOfficial(null)}>
                    <DialogContent className="max-w-lg bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 text-navy-900 dark:text-white shadow-xl p-0 overflow-hidden">

                        {/* Modal Header with large photo */}
                        <div className="flex gap-0 items-stretch">
                            {/* Large photo panel */}
                            <div className="w-44 shrink-0 bg-stone-200 dark:bg-navy-800 overflow-hidden">
                                <OfficialPhoto official={selectedOfficial} className="w-full h-full object-cover object-top" />
                            </div>

                            {/* Header info */}
                            <DialogHeader className="flex flex-col justify-end p-5 pb-4 flex-1 bg-navy-800 text-left">
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-gold-600/30 border border-gold-500/40 text-gold-300 text-[10px] font-bold uppercase tracking-widest w-fit mb-2">
                                    {selectedOfficial.role}
                                </div>
                                <DialogTitle className="text-base font-bold text-white leading-snug">
                                    {selectedOfficial.name}
                                </DialogTitle>
                                {selectedOfficial.nip && (
                                    <DialogDescription className="text-[10px] text-navy-300 mt-1">
                                        NIP: {selectedOfficial.nip}
                                    </DialogDescription>
                                )}
                                {!selectedOfficial.nip && (
                                    <DialogDescription className="text-[10px] text-navy-300 mt-1 sr-only">
                                        Aparatur Desa Tolai
                                    </DialogDescription>
                                )}
                            </DialogHeader>
                        </div>

                        {/* Modal Body */}
                        <div className="p-5 space-y-4 text-xs">
                            <div>
                                <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-2 flex items-center gap-1.5">
                                    <Star className="h-3.5 w-3.5 text-gold-500" />
                                    Deskripsi Jabatan
                                </h5>
                                <p className="text-stone-600 dark:text-stone-300 leading-relaxed text-justify">
                                    {selectedOfficial.description}
                                </p>
                            </div>
                            <div className="border-t border-stone-100 dark:border-navy-800 pt-4">
                                <h5 className="text-[10px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 mb-3 flex items-center gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5 text-gold-500" />
                                    Tanggung Jawab Utama
                                </h5>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                                    {selectedOfficial.duty.map((task, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-stone-600 dark:text-stone-300">
                                            <span className="h-1.5 w-1.5 bg-navy-700 rounded-full mt-1.5 shrink-0" />
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
