import { useState } from 'react';
import { BookOpen, Compass, Target, MessageSquare, Landmark, History, MapPin, Clock } from 'lucide-react';

export default function VillageAbout() {
    const [activeTab, setActiveTab] = useState<'welcome' | 'history' | 'vision'>('welcome');

    const tabs = [
        { key: 'welcome' as const, label: 'Sambutan', sub: 'Kepala Desa', icon: MessageSquare },
        { key: 'history' as const, label: 'Sejarah', sub: 'Asal-usul Desa', icon: History },
        { key: 'vision' as const, label: 'Visi & Misi', sub: 'Arah Pembangunan', icon: Target },
    ];

    return (
        <section id="about" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-none sm:rounded-xl shadow-sm">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-6 border-b border-neutral-200 dark:border-neutral-800">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-1 bg-olive-700 rounded-full" />
                            <span className="text-[11px] font-bold text-olive-700 dark:text-gold-500 uppercase tracking-widest">Profil Desa</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 dark:text-white tracking-tight">
                            Selayang Pandang
                        </h2>
                        <p className="mt-1.5 text-sm text-neutral-500 dark:text-neutral-400 max-w-xl">
                            Sejarah, falsafah pembangunan, dan komitmen pelayanan administrasi publik Desa Tolai.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 shrink-0">
                        <Clock className="h-3.5 w-3.5 text-olive-700" />
                        <span>Senin–Jumat · 08.00–15.00 WITA</span>
                    </div>
                </div>

                {/* Main Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Tab Navigation Menu */}
                    <div className="lg:col-span-3 flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            const active = activeTab === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-left transition-all duration-200 cursor-pointer shrink-0 lg:shrink rounded-lg border ${
                                        active
                                            ? 'bg-olive-700 border-olive-700 text-white'
                                            : 'bg-transparent border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                                    }`}
                                >
                                    <Icon className={`h-4 w-4 shrink-0 ${active ? 'text-gold-300' : 'text-olive-700 dark:text-neutral-500'}`} />
                                    <div>
                                        <div className="font-semibold text-sm leading-tight">{tab.label}</div>
                                        <div className={`text-[10px] mt-0.5 ${active ? 'text-olive-200' : 'text-neutral-400'}`}>{tab.sub}</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Panels */}
                    <div className="lg:col-span-9 bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 sm:p-8 min-h-[380px]">
                        
                        {activeTab === 'welcome' && (
                            <div className="space-y-6">
                                {/* Kades Profile */}
                                <div className="flex flex-col sm:flex-row gap-5 items-start pb-6 border-b border-neutral-200 dark:border-neutral-800">
                                    <div className="relative shrink-0">
                                        <div className="h-20 w-20 rounded-lg overflow-hidden border border-olive-200 dark:border-neutral-700 bg-olive-800 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                                            IMGD
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="h-3.5 w-0.5 bg-olive-700 rounded-full" />
                                            <span className="text-[10px] font-bold text-olive-700 dark:text-gold-500 uppercase tracking-widest">Pimpinan Desa</span>
                                        </div>
                                        <h4 className="text-base font-bold text-neutral-900 dark:text-white">I Made Gede Dipayana</h4>
                                        <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">Kepala Desa Tolai · Dilantik 26 September 2021</p>
                                        <div className="flex items-center gap-1.5 mt-2">
                                            <MapPin className="h-3 w-3 text-olive-700" />
                                            <span className="text-xs text-neutral-500">Desa Tolai, Kec. Torue, Parigi Moutong</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Quote */}
                                <blockquote className="border-l-3 border-olive-700 pl-5 text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed">
                                    <p className="mb-3 font-medium text-neutral-800 dark:text-neutral-200">
                                        "Om Swastyastu, Assalamu'alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk kita semua."
                                    </p>
                                    <p className="text-sm">
                                        Selamat datang di website resmi Desa Tolai. Sebagai salah satu desa agraris multikultural terbesar di Kabupaten Parigi Moutong, kami berkomitmen untuk mewujudkan tata kelola pemerintahan desa yang bersih, transparan, dan berorientasi melayani masyarakat secara profesional.
                                    </p>
                                    <p className="mt-3 text-sm">
                                        Melalui platform ini, kami berupaya mengintegrasikan pelayanan administrasi publik untuk mempermudah warga serta mempublikasikan potensi ekonomi desa. Mari kita bersama-sama mempererat tali persaudaraan dan keharmonisan demi kemajuan Desa Tolai.
                                    </p>
                                    <footer className="mt-4 text-xs text-neutral-400 not-italic">— I Made Gede Dipayana, Kepala Desa Tolai</footer>
                                </blockquote>
                            </div>
                        )}

                        {activeTab === 'history' && (
                            <div className="space-y-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <BookOpen className="h-4 w-4 text-olive-700 dark:text-gold-500" />
                                    <span className="font-semibold text-neutral-900 dark:text-white text-sm">Sejarah & Asal-usul Desa Tolai</span>
                                </div>
                                <div className="space-y-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400 text-justify">
                                    <p>
                                        Desa Tolai merupakan hasil pemekaran dari Desa Torue yang resmi berdiri pada <strong className="text-neutral-800 dark:text-neutral-200">2 Januari 1969</strong>. Awalnya, wilayah ini dihuni oleh masyarakat pendatang dari berbagai suku seperti Besoa, Napu, Badak, Kulawi, Poso, Rampi, dan Mori, yang membuka kawasan hutan menjadi lahan pertanian dan permukiman.
                                    </p>
                                    <p>
                                        Kepala Desa Pertama adalah <strong className="text-neutral-800 dark:text-neutral-200">Marius Tumakaka</strong> yang memimpin sejak tahun 1969 hingga 1978. Pada masa kepemimpinannya, Desa Tolai berkembang melalui program transmigrasi dari Bali yang turut mendorong pertumbuhan permukiman dan sektor pertanian.
                                    </p>
                                    <p>
                                        Saat ini, Desa Tolai terus berkembang sebagai desa yang berorientasi pada peningkatan pelayanan publik, pembangunan infrastruktur, pemberdayaan masyarakat, serta pengembangan potensi pertanian. Dengan semangat gotong royong, pemerintah desa bersama masyarakat berkomitmen mewujudkan desa Tolai yang maju, mandiri, dan sejahtera.
                                    </p>
                                </div>

                                {/* Historical Milestones */}
                                <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800">
                                    <h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-4">Milestones Perkembangan Desa</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {[
                                            { year: '1962', title: 'Pembukaan Lahan', desc: 'Penempatan kelompok transmigran perintis asal Pulau Bali.' },
                                            { year: '1985', title: 'Sentra Pertanian', desc: 'Pembangunan irigasi terpadu sawah padi dan perkebunan kakao.' },
                                            { year: '2021', title: 'Kepemimpinan Baru', desc: 'Pelantikan Kades I Made Gede Dipayana (26 September 2021).' },
                                        ].map(m => (
                                            <div key={m.year} className="p-4 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg">
                                                <span className="text-lg font-bold text-olive-700 dark:text-gold-500">{m.year}</span>
                                                <p className="text-xs font-semibold text-neutral-800 dark:text-white mt-1">{m.title}</p>
                                                <p className="text-[11px] text-neutral-500 mt-0.5 leading-relaxed">{m.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="space-y-6">
                                {/* Visi */}
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Compass className="h-4 w-4 text-olive-700 dark:text-gold-500" />
                                        <span className="font-semibold text-neutral-900 dark:text-white text-sm">Visi Desa Tolai</span>
                                    </div>
                                    <div className="bg-olive-700/5 dark:bg-olive-950/30 border border-olive-200 dark:border-olive-900/30 rounded-lg p-5">
                                        <p className="text-sm text-neutral-700 dark:text-neutral-300 italic leading-relaxed text-justify">
                                            "Terwujudnya Desa Tolai yang Maju, Transparan, Profesional, dan Harmonis dalam Pelayanan Publik serta Berdaya Saing Tinggi di Bidang Pertanian Modern."
                                        </p>
                                    </div>
                                </div>

                                {/* Misi */}
                                <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Target className="h-4 w-4 text-olive-700 dark:text-gold-500" />
                                        <span className="font-semibold text-neutral-900 dark:text-white text-sm">Misi Utama Desa</span>
                                    </div>
                                    <ul className="space-y-2.5">
                                        {[
                                            'Meningkatkan efisiensi tata kelola administrasi desa berbasis digital.',
                                            'Optimalisasi penyediaan pupuk dan irigasi subak pertanian modern.',
                                            'Mendorong kegiatan pemuda Karang Taruna dan pembinaan sanggar seni adat.',
                                            'Memelihara stabilitas toleransi kerukunan antarumat beragama di masyarakat.',
                                        ].map((misi, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="flex h-5 w-5 items-center justify-center shrink-0 bg-olive-700 text-white text-[10px] font-bold rounded-sm mt-0.5">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{misi}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Footer Info Bar */}
                        <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center gap-2 text-xs text-neutral-400">
                            <Landmark className="h-3.5 w-3.5 text-olive-700" />
                            <span>Kantor Desa Tolai · Jam Layanan: Senin – Jumat, 08.00 – 15.00 WITA</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
