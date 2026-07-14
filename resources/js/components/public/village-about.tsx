import { useState } from 'react';
import { BookOpen, Compass, Target, MessageSquare, Landmark, History } from 'lucide-react';

export default function VillageAbout() {
    const [activeTab, setActiveTab] = useState<'welcome' | 'history' | 'vision'>('welcome');

    return (
        <section id="about" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-[#121214] border border-neutral-200/90 dark:border-neutral-800/90 rounded-2xl shadow-md">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
                        Selayang Pandang
                    </h2>
                    <div className="h-1 w-20 bg-gradient-to-r from-sky-700 to-emerald-600 mx-auto mt-4 rounded-full" />
                    <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
                        Sejarah perjuangan perintisan desa, falsafah pembangunan, serta komitmen pelayanan administrasi publik Desa Tolai.
                    </p>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Tab Navigation Menu */}
                    <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
                        <button
                            onClick={() => setActiveTab('welcome')}
                            className={`flex items-center gap-3 px-5 py-4 text-sm font-semibold rounded-lg text-left border transition-all duration-300 cursor-pointer shrink-0 lg:shrink ${
                                activeTab === 'welcome'
                                    ? 'bg-sky-800 border-sky-800 text-white shadow-sm'
                                    : 'bg-white dark:bg-[#121214] border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                            }`}
                        >
                            <MessageSquare className="h-5 w-5" />
                            <div>
                                <div className="font-bold">Sambutan Kepala Desa</div>
                                <div className={`text-xs mt-0.5 ${activeTab === 'welcome' ? 'text-sky-100' : 'text-neutral-400'}`}>Pesan dari Pimpinan Desa</div>
                            </div>
                        </button>

                        <button
                            onClick={() => setActiveTab('history')}
                            className={`flex items-center gap-3 px-5 py-4 text-sm font-semibold rounded-lg text-left border transition-all duration-300 cursor-pointer shrink-0 lg:shrink ${
                                activeTab === 'history'
                                    ? 'bg-sky-800 border-sky-800 text-white shadow-sm'
                                    : 'bg-white dark:bg-[#121214] border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                            }`}
                        >
                            <History className="h-5 w-5" />
                            <div>
                                <div className="font-bold">Sejarah Perjuangan (Astina)</div>
                                <div className={`text-xs mt-0.5 ${activeTab === 'history' ? 'text-blue-100' : 'text-neutral-400'}`}>Asal Usul & Transmigrasi 1962</div>
                            </div>
                        </button>

                        <button
                            onClick={() => setActiveTab('vision')}
                            className={`flex items-center gap-3 px-5 py-4 text-sm font-semibold rounded-lg text-left border transition-all duration-300 cursor-pointer shrink-0 lg:shrink ${
                                activeTab === 'vision'
                                    ? 'bg-sky-800 border-sky-800 text-white shadow-sm'
                                    : 'bg-white dark:bg-[#121214] border-neutral-200 dark:border-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                            }`}
                        >
                            <Target className="h-5 w-5" />
                            <div>
                                <div className="font-bold">Visi, Misi & Falsafah</div>
                                <div className={`text-xs mt-0.5 ${activeTab === 'vision' ? 'text-blue-100' : 'text-neutral-400'}`}>Tujuan & Komitmen Desa</div>
                            </div>
                        </button>
                    </div>

                    {/* Tab Panels */}
                    <div className="lg:col-span-8 bg-white dark:bg-[#121214] border border-neutral-200 dark:border-neutral-800/80 rounded-xl p-6 sm:p-8 min-h-[400px] shadow-sm flex flex-col justify-between">
                        {activeTab === 'welcome' && (
                            <div className="space-y-6 animate-fadeIn">
                                <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
                                    {/* Photo of Kades */}
                                    <div className="relative shrink-0">
                                        <div className="h-28 w-28 rounded-full overflow-hidden border-2 border-blue-800 bg-slate-100 dark:bg-neutral-800 flex items-center justify-center text-slate-800 dark:text-slate-200 font-bold text-3xl shadow-sm">
                                            IMGD
                                        </div>
                                        <span className="absolute bottom-0 right-0 h-6 px-2.5 rounded bg-sky-800 text-[9px] text-white font-bold flex items-center justify-center border border-white dark:border-[#121214] uppercase">
                                            KADES
                                        </span>
                                    </div>
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-xl font-bold text-neutral-900 dark:text-white">I Made Gede Dipayana</h3>
                                        <p className="text-sm font-semibold text-sky-850 dark:text-sky-400">Kepala Desa Tolai</p>
                                        <p className="text-xs text-neutral-400 mt-0.5">Menjabat Sejak: 26 September 2021</p>
                                    </div>
                                </div>
                                <blockquote className="relative border-l-4 border-sky-800 pl-4 italic text-neutral-600 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                    "Om Swastyastu, Assalamu'alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk kita semua.<br/><br/>
                                    Selamat datang di website resmi Desa Tolai. Sebagai salah satu desa agraris multikultural terbesar di Kabupaten Parigi Moutong, kami berkomitmen untuk mewujudkan tata kelola pemerintahan desa yang bersih, transparan, dan berorientasi melayani masyarakat secara profesional.<br/><br/>
                                    Melalui platform ini, kami berupaya mengintegrasikan pelayanan administrasi publik untuk mempermudah warga serta mempublikasikan potensi ekonomi desa. Mari kita bersama-sama mempererat tali persaudaraan dan keharmonisan demi kemajuan Desa Tolai. Matur suksma, Terima kasih."
                                </blockquote>
                            </div>
                        )}

                        {activeTab === 'history' && (
                            <div className="space-y-6 animate-fadeIn text-xs sm:text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 text-justify">
                                <div className="flex items-center gap-2 text-sky-800 dark:text-sky-400 font-bold text-base mb-2">
                                    <BookOpen className="h-5 w-5" />
                                    <span>Sejarah Rintisan Astina</span>
                                </div>
                                <p>
                                    Sejarah Desa Tolai bermula dari program transmigrasi nasional pada <strong>tahun 1962</strong>. Rombongan warga perintis asal Pulau Bali ditempatkan untuk membuka wilayah pemukiman baru di kawasan yang awalnya merupakan hutan belantara di pesisir Teluk Tomini, Parigi Moutong, Sulawesi Tengah.
                                </p>
                                <p>
                                    Para perintis pertama menamai pemukiman ini sebagai <strong>"Astina"</strong>, yang merujuk pada kerajaan agung dalam epos Nusantara dengan harapan akan terwujudnya kemakmuran dan perdamaian. Melalui kerja keras, area hutan disulap menjadi lahan persawahan subur. Wilayah ini kemudian tumbuh menjadi pusat ekonomi di Kecamatan Torue secara resmi dengan nama Desa Tolai.
                                </p>
                                <p>
                                    Kini, Tolai diakui sebagai replika kerukunan budaya Nusantara karena memadukan adat Bali yang kental dengan adat lokal Sulawesi dalam kehidupan sosial yang harmonis dan damai.
                                </p>
                                
                                {/* Historical Milestones Timeline */}
                                <div className="mt-6 border-t border-neutral-200 dark:border-neutral-800 pt-6">
                                    <h4 className="font-bold text-neutral-900 dark:text-white text-[11px] uppercase tracking-wider mb-4">Milestones Perkembangan Desa</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        <div className="p-3.5 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">1962</span>
                                            <p className="text-xs mt-1 font-semibold text-sky-800 dark:text-sky-400">Pembukaan Lahan</p>
                                            <p className="text-[11px] text-neutral-500 mt-0.5">Penempatan kelompok transmigran perintis asal Pulau Bali.</p>
                                        </div>
                                        <div className="p-3.5 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">1985</span>
                                            <p className="text-xs mt-1 font-semibold text-sky-800 dark:text-sky-400">Sentra Pertanian</p>
                                            <p className="text-[11px] text-neutral-500 mt-0.5">Pembangunan irigasi terpadu sawah padi dan perkebunan kakao.</p>
                                        </div>
                                        <div className="p-3.5 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                                            <span className="text-xs font-bold text-neutral-900 dark:text-white">2021</span>
                                            <p className="text-xs mt-1 font-semibold text-sky-800 dark:text-sky-400">Pemerintahan Baru</p>
                                            <p className="text-[11px] text-neutral-500 mt-0.5">Pelantikan Kades I Made Gede Dipayana (26 Sept 2021) mengawali era pelayanan modern.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="space-y-6 animate-fadeIn">
                                {/* Visi */}
                                <div>
                                    <div className="flex items-center gap-2 text-sky-800 dark:text-sky-400 font-bold text-base mb-2">
                                        <Compass className="h-5 w-5" />
                                        <span>Visi Desa</span>
                                    </div>
                                    <p className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 italic text-justify leading-relaxed">
                                        "Terwujudnya Desa Tolai yang Maju, Transparan, Profesional, dan Harmonis dalam Pelayanan Publik serta Berdaya Saing Tinggi di Bidang Pertanian Modern."
                                    </p>
                                </div>

                                {/* Misi */}
                                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6">
                                    <div className="flex items-center gap-2 text-sky-800 dark:text-sky-400 font-bold text-base mb-3">
                                        <Target className="h-5 w-5" />
                                        <span>Misi Utama Desa</span>
                                    </div>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-600 dark:text-neutral-400">
                                        <li className="flex items-start gap-2">
                                            <span className="h-4.5 w-4.5 rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">1</span>
                                            <span>Meningkatkan efisiensi tata kelola administrasi desa berbasis digital.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="h-4.5 w-4.5 rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">2</span>
                                            <span>Optimalisasi penyediaan pupuk dan irigasi subak pertanian modern.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="h-4.5 w-4.5 rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">3</span>
                                            <span>Mendorong kegiatan pemuda Karang Taruna dan pembinaan sanggar seni adat.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="h-4.5 w-4.5 rounded bg-slate-100 dark:bg-neutral-800 text-slate-800 dark:text-white flex items-center justify-center shrink-0 text-[10px] font-bold mt-0.5">4</span>
                                            <span>Memelihara stabilitas toleransi kerukunan antarumat beragama di masyarakat.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        
                        {/* Interactive Government Structure Link */}
                        <div className="mt-8 border-t border-neutral-200 dark:border-neutral-800/80 pt-4 flex items-center justify-between text-xs text-neutral-400">
                            <span className="flex items-center gap-1.5">
                                <Landmark className="h-4 w-4 text-sky-800" />
                                Jam Operasional Pelayanan Kantor Desa: Senin - Jumat (08.00 - 15.00 WITA)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
