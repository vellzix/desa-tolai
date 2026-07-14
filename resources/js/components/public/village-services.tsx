import { useState } from 'react';
import { FileText, Printer, CheckCircle, AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

type LetterType = 'domisili' | 'usaha' | 'sktm';

interface FormState {
    nik: string;
    nama: string;
    tempatLahir: string;
    tanggalLahir: string;
    gender: string;
    pekerjaan: string;
    alamat: string;
    keperluan: string;
    namaUsaha?: string; // For SKU
    jenisUsaha?: string; // For SKU
}

export default function VillageServices() {
    const [letterType, setLetterType] = useState<LetterType>('domisili');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
    
    const [formData, setFormData] = useState<FormState>({
        nik: '7208151203920003',
        nama: 'Wayan Gede Mudiarta',
        tempatLahir: 'Tolai',
        tanggalLahir: '1992-03-12',
        gender: 'Laki-laki',
        pekerjaan: 'Petani Kakao',
        alamat: 'Dusun II Banjar Astina, RT 004 / RW 002, Desa Tolai',
        keperluan: 'Syarat Pengajuan Kredit Usaha Rakyat (KUR) Mandiri',
        namaUsaha: 'Sinar Kakao Makmur',
        jenisUsaha: 'Perdagangan & Pengolahan Biji Kakao',
    });

    const letterNames: Record<LetterType, string> = {
        domisili: 'Surat Keterangan Domisili (SKD)',
        usaha: 'Surat Keterangan Usaha (SKU)',
        sktm: 'Surat Keterangan Tidak Mampu (SKTM)',
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        
        // Clear error
        if (errors[name as keyof FormState]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof FormState, string>> = {};
        
        if (!formData.nik || formData.nik.length !== 16 || !/^\d+$/.test(formData.nik)) {
            newErrors.nik = 'NIK harus berupa 16 digit angka.';
        }
        if (!formData.nama.trim()) {
            newErrors.nama = 'Nama lengkap wajib diisi.';
        }
        if (!formData.tempatLahir.trim()) {
            newErrors.tempatLahir = 'Tempat lahir wajib diisi.';
        }
        if (!formData.tanggalLahir) {
            newErrors.tanggalLahir = 'Tanggal lahir wajib diisi.';
        }
        if (!formData.pekerjaan.trim()) {
            newErrors.pekerjaan = 'Pekerjaan wajib diisi.';
        }
        if (!formData.alamat.trim()) {
            newErrors.alamat = 'Alamat lengkap wajib diisi.';
        }
        if (!formData.keperluan.trim()) {
            newErrors.keperluan = 'Keperluan surat wajib diisi.';
        }
        
        if (letterType === 'usaha') {
            if (!formData.namaUsaha?.trim()) {
                newErrors.namaUsaha = 'Nama usaha wajib diisi.';
            }
            if (!formData.jenisUsaha?.trim()) {
                newErrors.jenisUsaha = 'Jenis usaha wajib diisi.';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            setFormSubmitted(true);
        }
    };

    const handleReset = () => {
        setFormSubmitted(false);
    };

    const handlePrint = () => {
        const printContent = document.getElementById('letter-preview-document');
        if (!printContent) return;

        const printWindow = window.open('', '_blank');
        if (printWindow) {
            printWindow.document.write(`
                <html>
                    <head>
                        <title>Cetak ${letterNames[letterType]}</title>
                        <style>
                            body { font-family: 'Times New Roman', Times, serif; padding: 40px; line-height: 1.5; color: #000; }
                            .text-center { text-align: center; }
                            .text-right { text-align: right; }
                            .font-bold { font-weight: bold; }
                            .border-double { border-bottom: 4px double #000; padding-bottom: 5px; margin-bottom: 20px; }
                            .line-space { margin-bottom: 15px; }
                            table { width: 100%; margin: 15px 0; border-collapse: collapse; }
                            td { vertical-align: top; padding: 3px 0; }
                            .label-col { width: 30%; }
                            .colon-col { width: 3%; }
                            .value-col { width: 67%; }
                            .signature-block { margin-top: 50px; float: right; width: 40%; text-align: center; }
                            .signature-space { height: 70px; }
                            .qr-preview { border: 1px solid #ccc; padding: 5px; width: 70px; height: 70px; display: inline-block; margin-top: 10px; }
                        </style>
                    </head>
                    <body>
                        ${printContent.innerHTML}
                        <script>
                            window.onload = function() {
                                window.print();
                                window.close();
                            }
                        </script>
                    </body>
                </html>
            `);
            printWindow.document.close();
        }
    };

    const getFormattedDate = (dateStr: string) => {
        if (!dateStr) return '';
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateStr).toLocaleDateString('id-ID', options);
    };

    const getCurrentDateFormatted = () => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date().toLocaleDateString('id-ID', options);
    };

    return (
        <section id="services" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-[#121214] border border-neutral-200/90 dark:border-neutral-800/90 rounded-2xl shadow-md">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Layanan Mandiri Administrasi
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-sky-700 to-emerald-600 mx-auto mt-4 rounded-full" />
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                        Isi formulir di bawah ini untuk membuat dan mencetak draf dokumen resmi kependudukan secara mandiri.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Form & Selector */}
                    <div className="lg:col-span-5 bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 shadow-sm">
                        {/* Selector */}
                        <div className="mb-6">
                            <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">
                                1. Pilih Dokumen Surat
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {(['domisili', 'usaha', 'sktm'] as LetterType[]).map((type) => (
                                    <button
                                        key={type}
                                        onClick={() => {
                                            setLetterType(type);
                                            setFormSubmitted(false);
                                        }}
                                        disabled={formSubmitted}
                                        className={`px-3 py-3 text-[10px] font-bold rounded border transition-all duration-200 cursor-pointer ${
                                            letterType === type
                                                ? 'bg-sky-800 border-sky-800 text-white shadow-sm'
                                                : 'bg-neutral-50 dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 disabled:opacity-50'
                                        }`}
                                    >
                                        <FileText className="h-4 w-4 mx-auto mb-1.5" />
                                        {type === 'domisili' ? 'SK Domisili' : type === 'usaha' ? 'SK Usaha' : 'SKTM'}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="border-t border-neutral-100 dark:border-neutral-800 pt-4">
                                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-3">
                                    2. Informasi Pemohon
                                </label>
                                
                                <div className="space-y-3 text-xs">
                                    {/* NIK */}
                                    <div>
                                        <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">NIK (Nomor Induk Kependudukan)</label>
                                        <input
                                            type="text"
                                            name="nik"
                                            value={formData.nik}
                                            onChange={handleInputChange}
                                            maxLength={16}
                                            disabled={formSubmitted}
                                            className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                errors.nik ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                            }`}
                                        />
                                        {errors.nik && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.nik}</p>}
                                    </div>

                                    {/* Nama */}
                                    <div>
                                        <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">Nama Lengkap (Sesuai KTP)</label>
                                        <input
                                            type="text"
                                            name="nama"
                                            value={formData.nama}
                                            onChange={handleInputChange}
                                            disabled={formSubmitted}
                                            className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                errors.nama ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                            }`}
                                        />
                                        {errors.nama && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.nama}</p>}
                                    </div>

                                    {/* TTL Grid */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">Tempat Lahir</label>
                                            <input
                                                type="text"
                                                name="tempatLahir"
                                                value={formData.tempatLahir}
                                                onChange={handleInputChange}
                                                disabled={formSubmitted}
                                                className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                    errors.tempatLahir ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                                }`}
                                            />
                                            {errors.tempatLahir && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.tempatLahir}</p>}
                                        </div>
                                        <div>
                                            <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">Tanggal Lahir</label>
                                            <input
                                                type="date"
                                                name="tanggalLahir"
                                                value={formData.tanggalLahir}
                                                onChange={handleInputChange}
                                                disabled={formSubmitted}
                                                className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                    errors.tanggalLahir ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                                }`}
                                            />
                                            {errors.tanggalLahir && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.tanggalLahir}</p>}
                                        </div>
                                    </div>

                                    {/* Gender & Pekerjaan */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">Jenis Kelamin</label>
                                            <select
                                                name="gender"
                                                value={formData.gender}
                                                onChange={handleInputChange}
                                                disabled={formSubmitted}
                                                className="w-full px-3 py-2 rounded border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700"
                                            >
                                                <option value="Laki-laki">Laki-laki</option>
                                                <option value="Perempuan">Perempuan</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">Pekerjaan</label>
                                            <input
                                                type="text"
                                                name="pekerjaan"
                                                value={formData.pekerjaan}
                                                onChange={handleInputChange}
                                                disabled={formSubmitted}
                                                className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                    errors.pekerjaan ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                                }`}
                                            />
                                            {errors.pekerjaan && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.pekerjaan}</p>}
                                        </div>
                                    </div>

                                    {/* Alamat */}
                                    <div>
                                        <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">Alamat Domisili Tolai (RT/RW/Dusun)</label>
                                        <textarea
                                            name="alamat"
                                            value={formData.alamat}
                                            onChange={handleInputChange}
                                            disabled={formSubmitted}
                                            rows={2}
                                            className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                errors.alamat ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                            }`}
                                        />
                                        {errors.alamat && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.alamat}</p>}
                                    </div>

                                    {/* SKU Specific Fields */}
                                    {letterType === 'usaha' && (
                                        <div className="p-3 bg-slate-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded space-y-3 animate-fadeIn">
                                            <div className="text-[10px] font-extrabold text-sky-800 flex items-center gap-1">
                                                <AlertTriangle className="h-3.5 w-3.5" />
                                                <span>DATA USAHA PEMOHON</span>
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-neutral-700 dark:text-neutral-300 mb-1">Nama Usaha</label>
                                                <input
                                                    type="text"
                                                    name="namaUsaha"
                                                    value={formData.namaUsaha || ''}
                                                    onChange={handleInputChange}
                                                    disabled={formSubmitted}
                                                    className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                        errors.namaUsaha ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                                    }`}
                                                />
                                                {errors.namaUsaha && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.namaUsaha}</p>}
                                            </div>
                                            <div>
                                                <label className="block text-[10px] font-bold text-neutral-700 dark:text-neutral-300 mb-1">Jenis / Sektor Usaha</label>
                                                <input
                                                    type="text"
                                                    name="jenisUsaha"
                                                    value={formData.jenisUsaha || ''}
                                                    onChange={handleInputChange}
                                                    disabled={formSubmitted}
                                                    className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                        errors.jenisUsaha ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                                    }`}
                                                />
                                                {errors.jenisUsaha && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.jenisUsaha}</p>}
                                            </div>
                                        </div>
                                    )}

                                    {/* Keperluan */}
                                    <div>
                                        <label className="block font-bold text-neutral-700 dark:text-neutral-300 mb-1">Keperluan Surat (Tujuan Penggunaan)</label>
                                        <input
                                            type="text"
                                            name="keperluan"
                                            value={formData.keperluan}
                                            onChange={handleInputChange}
                                            disabled={formSubmitted}
                                            className={`w-full px-3 py-2 rounded border bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-sky-700/40 focus:border-sky-700 ${
                                                errors.keperluan ? 'border-red-500' : 'border-neutral-200 dark:border-neutral-800'
                                            }`}
                                        />
                                        {errors.keperluan && <p className="text-[10px] text-red-500 font-medium mt-1">{errors.keperluan}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="pt-2">
                                {!formSubmitted ? (
                                    <Button
                                        type="submit"
                                        className="w-full bg-sky-800 hover:bg-sky-900 text-white rounded flex items-center justify-center gap-1.5 py-2.5 font-bold cursor-pointer transition-colors"
                                    >
                                        <RefreshCw className="h-4 w-4" />
                                        Buat Draf Surat
                                    </Button>
                                ) : (
                                    <div className="flex gap-2">
                                        <Button
                                            type="button"
                                            onClick={handleReset}
                                            className="w-1/3 bg-neutral-200 hover:bg-neutral-300 text-neutral-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white rounded py-2.5 font-bold cursor-pointer transition-colors"
                                        >
                                            Edit Data
                                        </Button>
                                        <Button
                                            type="button"
                                            onClick={handlePrint}
                                            className="w-2/3 bg-sky-800 hover:bg-sky-900 text-white rounded flex items-center justify-center gap-1.5 py-2.5 font-bold cursor-pointer transition-all duration-200 shadow-sm"
                                        >
                                            <Printer className="h-4 w-4" />
                                            Cetak Surat / PDF
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Live Document Preview */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center justify-between mb-3.5 px-1">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5">
                                <span className={`h-2 w-2 rounded-full ${formSubmitted ? 'bg-sky-850' : 'bg-slate-400 animate-pulse'}`} />
                                {formSubmitted ? 'Draf Siap Dicetak' : 'Pratinjau Surat Resmi'}
                            </span>
                            {formSubmitted && (
                                <span className="text-[9px] font-bold text-sky-800 dark:text-sky-400 flex items-center gap-1 bg-sky-50 dark:bg-sky-950/20 px-2 py-0.5 rounded border border-sky-800/10">
                                    <CheckCircle className="h-3 w-3" />
                                    Data Tervalidasi
                                </span>
                            )}
                        </div>

                        {/* Paper Sheet Container */}
                        <div className="bg-white text-neutral-900 border border-neutral-300 dark:border-neutral-800 rounded-lg p-8 sm:p-10 shadow min-h-[680px] flex flex-col justify-between overflow-x-auto relative">
                            {/* Watermark for non-submitted state */}
                            {!formSubmitted && (
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0">
                                    <div className="transform rotate-[-30deg] border-2 border-dashed border-neutral-200 px-6 py-4 rounded text-neutral-300/60 text-4xl font-extrabold tracking-widest uppercase">
                                        CONTOH DRAF
                                    </div>
                                </div>
                            )}

                            {/* Letter Content Wrapper */}
                            <div id="letter-preview-document" className="relative z-10 font-serif leading-relaxed text-black text-xs sm:text-sm">
                                {/* Letter Head (KOP SURAT) */}
                                <div className="text-center border-double border-b-4 border-black pb-3 mb-6">
                                    <h4 className="font-bold text-sm tracking-wide leading-tight uppercase">PEMERINTAH KABUPATEN PARIGI MOUTONG</h4>
                                    <h4 className="font-bold text-sm tracking-wide leading-tight uppercase">KECAMATAN TORUE</h4>
                                    <h3 className="font-bold text-base tracking-widest leading-none mt-1 uppercase text-neutral-950">KANTOR KEPALA DESA TOLAI</h3>
                                    <p className="text-[9px] font-sans italic mt-1.5 text-neutral-600">Alamat: Jl. Trans Sulawesi No. 12, Desa Tolai, Kec. Torue, Kab. Parigi Moutong, Sulawesi Tengah 94473</p>
                                </div>

                                {/* Title & Number */}
                                <div className="text-center mb-6">
                                    <h4 className="font-bold underline text-sm uppercase">{letterNames[letterType]}</h4>
                                    <p className="font-sans text-[10px]">Nomor: 140 / {letterType === 'domisili' ? '085' : letterType === 'usaha' ? '112' : '067'} / KADES-TL / VII / 2026</p>
                                </div>

                                {/* Body - Opening */}
                                <p className="mb-4 text-justify">
                                    Yang bertanda tangan di bawah ini Kepala Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Provinsi Sulawesi Tengah, menerangkan dengan sebenarnya bahwa:
                                </p>

                                {/* Body - Biodata Table */}
                                <table className="w-full my-4 ml-4">
                                    <tbody>
                                        <tr>
                                            <td className="w-[30%] font-bold">1. Nama Lengkap</td>
                                            <td className="w-[3%]">:</td>
                                            <td className="w-[67%] font-bold uppercase">{formData.nama || '-'}</td>
                                        </tr>
                                        <tr>
                                            <td>2. NIK</td>
                                            <td>:</td>
                                            <td>{formData.nik || '-'}</td>
                                        </tr>
                                        <tr>
                                            <td>3. Tempat / Tgl. Lahir</td>
                                            <td>:</td>
                                            <td>{formData.tempatLahir || '-'}, {getFormattedDate(formData.tanggalLahir)}</td>
                                        </tr>
                                        <tr>
                                            <td>4. Jenis Kelamin</td>
                                            <td>:</td>
                                            <td>{formData.gender}</td>
                                        </tr>
                                        <tr>
                                            <td>5. Pekerjaan</td>
                                            <td>:</td>
                                            <td>{formData.pekerjaan || '-'}</td>
                                        </tr>
                                        <tr>
                                            <td>6. Alamat Lengkap</td>
                                            <td>:</td>
                                            <td className="text-justify">{formData.alamat || '-'}</td>
                                        </tr>
                                    </tbody>
                                </table>

                                {/* Body - Specific Content */}
                                {letterType === 'domisili' && (
                                    <p className="mb-4 text-justify">
                                        Nama tersebut di atas adalah benar warga yang berdomisili menetap di Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong. Surat keterangan ini dikeluarkan sebagai data pendukung/persyaratan untuk: <strong>{formData.keperluan || '-'}</strong>.
                                    </p>
                                )}

                                {letterType === 'usaha' && (
                                    <div className="space-y-3 mb-4">
                                        <p className="text-justify">
                                            Bahwa nama tersebut di atas benar merupakan penduduk Desa Tolai yang memiliki usaha aktif sebagai berikut:
                                        </p>
                                        <table className="w-full ml-4">
                                            <tbody>
                                                <tr>
                                                    <td className="w-[30%] font-bold">Nama Usaha</td>
                                                    <td className="w-[3%]">:</td>
                                                    <td className="w-[67%] font-bold">{formData.namaUsaha || '-'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Jenis / Sektor Usaha</td>
                                                    <td>:</td>
                                                    <td>{formData.jenisUsaha || '-'}</td>
                                                </tr>
                                                <tr>
                                                    <td>Lokasi Usaha</td>
                                                    <td>:</td>
                                                    <td>Desa Tolai, Kec. Torue, Parigi Moutong</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p className="text-justify">
                                            Surat Keterangan Usaha (SKU) ini dibuat untuk melengkapi administrasi dalam rangka: <strong>{formData.keperluan || '-'}</strong>.
                                        </p>
                                    </div>
                                )}

                                {letterType === 'sktm' && (
                                    <p className="mb-4 text-justify">
                                        Berdasarkan catatan kependudukan dan peninjauan kami di lapangan, nama tersebut di atas memang benar tergolong dalam keluarga kurang mampu/ekonomi prasejahtera di Desa Tolai. Surat Keterangan Tidak Mampu (SKTM) ini diberikan untuk dipergunakan sebagai: <strong>{formData.keperluan || '-'}</strong>.
                                    </p>
                                )}

                                {/* Body - Closing */}
                                <p className="mb-6 text-justify">
                                    Demikian surat keterangan ini dibuat dengan sebenar-benarnya untuk dapat dipergunakan sebagaimana mestinya dan pihak berkepentingan dapat memakluminya.
                                </p>

                                {/* Signatures and Verification */}
                                <div className="mt-8 flex justify-between items-end">
                                    {/* QR Verification (Modern Government Stamp) */}
                                    <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
                                        <div className="border border-neutral-300 p-1.5 rounded bg-neutral-50 shadow-inner flex items-center justify-center w-20 h-20">
                                            {/* Simulated QR Code using CSS grid */}
                                            <div className="grid grid-cols-5 gap-0.5 w-full h-full opacity-80">
                                                {Array.from({ length: 25 }).map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`rounded-[1px] ${
                                                            (i * 7 + 3) % 5 === 0 || (i > 3 && i < 8) || i % 6 === 0 || i === 0 || i === 4 || i === 20 || i === 24
                                                                ? 'bg-black'
                                                                : 'bg-transparent'
                                                        }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <span className="text-[8px] font-sans text-neutral-500 mt-1 uppercase tracking-wide">VERIFIKASI DIGITAL KADES</span>
                                    </div>

                                    {/* Formal Signature block */}
                                    <div className="text-center w-[200px]">
                                        <p>Tolai, {getCurrentDateFormatted()}</p>
                                        <p className="font-bold mt-1">KEPALA DESA TOLAI</p>
                                        {/* Signature space */}
                                        <div className="h-16 flex items-center justify-center relative select-none">
                                            {formSubmitted && (
                                                <div className="absolute font-sans border border-sky-800/30 text-sky-800/60 uppercase text-[9px] px-2 py-0.5 rounded tracking-widest font-extrabold rotate-[-5deg]">
                                                    TERTANDA DIGITAL
                                                </div>
                                            )}
                                        </div>
                                        <p className="font-bold underline uppercase">I MADE GEDE DIPAYANA</p>
                                        <p className="text-[9px] font-sans text-neutral-500">NIP. 19760512 200803 1 004</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
