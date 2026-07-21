import { useState } from 'react';
import { BookOpen, Compass, Target, MessageSquare, History, MapPin, Clock } from 'lucide-react';

export default function VillageAbout({ profile }: { profile?: any }) {
    const [activeTab, setActiveTab] = useState<'welcome' | 'history' | 'vision'>('welcome');

    const defaultProfile = {
        welcome_title: 'Portal Informasi Desa Tolai',
        welcome_text: "Selamat datang di website resmi Desa Tolai. Sebagai salah satu desa agraris multikultural terbesar di Kabupaten Parigi Moutong, kami berkomitmen untuk mewujudkan tata kelola pemerintahan desa yang bersih, transparan, dan berorientasi melayani masyarakat secara profesional.\n\nMelalui platform ini, kami berupaya mengintegrasikan pelayanan administrasi publik untuk mempermudah warga serta mempublikasikan potensi ekonomi desa. Mari kita bersama-sama mempererat tali persaudaraan dan keharmonisan demi kemajuan Desa Tolai.",
        welcome_kades_name: 'I Made Gede Dipayana',
        welcome_kades_photo: '/storage/perangkat-desa/I MADE GEDE DIPAYANA_KADES.jpeg',
        history_text: "Desa Tolai merupakan hasil pemekaran dari Desa Torue yang resmi berdiri pada 2 Januari 1969. Awalnya, wilayah ini dihuni oleh masyarakat pendatang dari berbagai suku seperti Besoa, Napu, Badak, Kulawi, Poso, Rampi, dan Mori, yang membuka kawasan hutan menjadi lahan pertanian dan permukiman.\n\nKepala Desa Pertama adalah Marius Tumakaka yang memimpin sejak tahun 1969 hingga 1978. Pada masa kepemimpinannya, Desa Tolai berkembang melalui program transmigrasi dari Bali yang turut mendorong pertumbuhan permukiman dan sektor pertanian.\n\nSaat ini, Desa Tolai terus berkembang sebagai desa yang berorientasi pada peningkatan pelayanan publik, pembangunan infrastruktur, pemberdayaan masyarakat, serta pengembangan potensi pertanian. Dengan semangat gotong royong, pemerintah desa berkomitmen mewujudkan desa yang maju, mandiri, dan sejahtera.",
        vision: 'Terwujudnya Desa Tolai yang Maju, Transparan, Profesional, dan Harmonis dalam Pelayanan Publik serta Berdaya Saing Tinggi di Bidang Pertanian Modern.',
        missions: [
            'Meningkatkan efisiensi tata kelola administrasi desa berbasis digital.',
            'Optimalisasi penyediaan pupuk dan irigasi subak pertanian modern.',
            'Mendorong kegiatan pemuda Karang Taruna dan pembinaan sanggar seni adat.',
            'Memelihara stabilitas toleransi kerukunan antarumat beragama di masyarakat.'
        ],
        phone: '+62 822-9111-3320',
        email: 'kontak@desatolai.go.id',
        address: 'Jl. Trans Sulawesi No. 12, Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah 94473',
        timings: 'Senin – Jumat, 08.00 – 15.00 WITA',
    };

    const activeProfile = profile || defaultProfile;

    const tabs = [
        { key: 'welcome' as const, label: 'Sambutan', sub: 'Kepala Desa', icon: MessageSquare },
        { key: 'history' as const, label: 'Sejarah', sub: 'Asal-usul Desa', icon: History },
        { key: 'vision' as const, label: 'Visi & Misi', sub: 'Arah Pembangunan', icon: Target },
    ];

    // Ensure missions is array
    const missions = Array.isArray(activeProfile.missions) 
        ? activeProfile.missions 
        : (typeof activeProfile.missions === 'string' ? JSON.parse(activeProfile.missions) : defaultProfile.missions);

    return (
        <section id="about" className="py-10 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-12 bg-white dark:bg-navy-950 border border-stone-200 dark:border-navy-800 sm:rounded-xl shadow-sm">

                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-6 border-b border-stone-200 dark:border-navy-800">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-4 w-1 bg-navy-700 rounded-full" />
                            <span className="text-[11px] font-bold text-navy-700 dark:text-gold-500 uppercase tracking-widest">Profil Desa</span>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 dark:text-white tracking-tight">
                            Selayang Pandang
                        </h2>
                        <p className="mt-1.5 text-sm text-stone-500 dark:text-stone-400 max-w-xl">
                            Sejarah, falsafah pembangunan, dan komitmen pelayanan administrasi publik Desa Tolai.
                        </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 shrink-0">
                        <Clock className="h-3.5 w-3.5 text-navy-600" />
                        <span>{activeProfile.timings || defaultProfile.timings}</span>
                    </div>
                </div>

                {/* Main Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Tab Menu */}
                    <div className="lg:col-span-3 flex flex-row lg:flex-col gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                        {tabs.map(tab => {
                            const Icon = tab.icon;
                            const active = activeTab === tab.key;
                            return (
                                <button
                                    key={tab.key}
                                    onClick={() => setActiveTab(tab.key)}
                                    className={`flex items-center gap-3 px-4 py-3.5 text-sm font-medium text-left transition-all duration-200 cursor-pointer shrink-0 lg:shrink border ${
                                        active
                                            ? 'bg-navy-700 border-navy-700 text-white'
                                            : 'bg-transparent border-stone-200 dark:border-navy-800 text-stone-600 dark:text-stone-400 hover:bg-stone-50 dark:hover:bg-navy-900'
                                    }`}
                                >
                                    <Icon className={`h-4 w-4 shrink-0 ${active ? 'text-gold-300' : 'text-navy-600 dark:text-stone-500'}`} />
                                    <div>
                                        <div className="font-semibold text-sm leading-tight">{tab.label}</div>
                                        <div className={`text-[10px] mt-0.5 ${active ? 'text-navy-200' : 'text-stone-400'}`}>{tab.sub}</div>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Tab Panels */}
                    <div className="lg:col-span-9 bg-stone-50 dark:bg-navy-900/50 border border-stone-200 dark:border-navy-800 p-6 sm:p-8 min-h-[380px]">

                        {activeTab === 'welcome' && (
                            <div className="space-y-6">
                                <div className="flex flex-col sm:flex-row gap-5 items-stretch pb-6 border-b border-stone-200 dark:border-navy-800">
                                    {/* Kades Photo — portrait */}
                                    <div className="shrink-0">
                                        <div className="h-44 w-32 sm:h-52 sm:w-36 overflow-hidden border border-navy-200 dark:border-navy-700 shadow-sm bg-stone-100">
                                            <img
                                                src={activeProfile.welcome_kades_photo || defaultProfile.welcome_kades_photo}
                                                alt={`${activeProfile.welcome_kades_name} - Kepala Desa Tolai`}
                                                className="h-full w-full object-cover object-top"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-1">
                                            <div className="h-3.5 w-0.5 bg-navy-700 rounded-full" />
                                            <span className="text-[10px] font-bold text-navy-700 dark:text-gold-500 uppercase tracking-widest">Pimpinan Desa</span>
                                        </div>
                                        <h4 className="text-base font-bold text-navy-900 dark:text-white">{activeProfile.welcome_kades_name}</h4>
                                        <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">Kepala Desa Tolai</p>
                                        <div className="flex items-center gap-1.5 mt-2">
                                            <MapPin className="h-3 w-3 text-navy-600" />
                                            <span className="text-xs text-stone-500">Desa Tolai, Kec. Torue, Parigi Moutong</span>
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="border-l-4 border-navy-700 pl-5 text-stone-600 dark:text-stone-300 text-sm leading-relaxed whitespace-pre-line">
                                    <p className="mb-3 font-semibold text-navy-900 dark:text-stone-200">
                                        "Om Swastyastu, Assalamu'alaikum Warahmatullahi Wabarakatuh, Salam Sejahtera untuk kita semua."
                                    </p>
                                    <p>
                                        {activeProfile.welcome_text}
                                    </p>
                                    <footer className="mt-4 text-xs text-stone-400 not-italic">— {activeProfile.welcome_kades_name}, Kepala Desa Tolai</footer>
                                </blockquote>
                            </div>
                        )}

                        {activeTab === 'history' && (
                            <div className="space-y-5">
                                <div className="flex items-center gap-2 mb-4">
                                    <BookOpen className="h-4 w-4 text-navy-700 dark:text-gold-500" />
                                    <span className="font-semibold text-navy-900 dark:text-white text-sm">Sejarah & Asal-usul Desa Tolai</span>
                                </div>
                                <div className="space-y-4 text-sm leading-relaxed text-stone-600 dark:text-stone-400 text-justify whitespace-pre-line">
                                    {activeProfile.history_text}
                                </div>

                                <div className="mt-6 pt-5 border-t border-stone-200 dark:border-navy-800">
                                    <h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-4">Milestones Perkembangan Desa</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                        {[
                                            { year: '1962', title: 'Pembukaan Lahan', desc: 'Penempatan kelompok transmigran perintis asal Pulau Bali.' },
                                            { year: '1985', title: 'Sentra Pertanian', desc: 'Pembangunan irigasi terpadu sawah padi dan perkebunan kakao.' },
                                            { year: '2021', title: 'Kepemimpinan Baru', desc: 'Pelantikan Kades I Made Gede Dipayana (26 September 2021).' },
                                        ].map(m => (
                                            <div key={m.year} className="p-4 bg-white dark:bg-navy-900 border border-stone-200 dark:border-navy-800">
                                                <span className="text-lg font-bold text-navy-700 dark:text-gold-500">{m.year}</span>
                                                <p className="text-xs font-semibold text-navy-900 dark:text-white mt-1">{m.title}</p>
                                                <p className="text-[11px] text-stone-500 mt-0.5 leading-relaxed">{m.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'vision' && (
                            <div className="space-y-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-3">
                                        <Compass className="h-4 w-4 text-navy-700 dark:text-gold-500" />
                                        <span className="font-semibold text-navy-900 dark:text-white text-sm">Visi Desa Tolai</span>
                                    </div>
                                    <div className="bg-navy-50 dark:bg-navy-900/40 border border-navy-200 dark:border-navy-800 p-5">
                                        <p className="text-sm text-navy-800 dark:text-stone-300 italic leading-relaxed text-justify">
                                            "{activeProfile.vision}"
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-stone-200 dark:border-navy-800">
                                    <div className="flex items-center gap-2 mb-4">
                                        <Target className="h-4 w-4 text-navy-700 dark:text-gold-500" />
                                        <span className="font-semibold text-navy-900 dark:text-white text-sm">Misi Utama Desa</span>
                                    </div>
                                    <ul className="space-y-2.5">
                                        {missions.map((misi: string, idx: number) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <span className="flex h-5 w-5 items-center justify-center shrink-0 bg-navy-700 text-white text-[10px] font-bold mt-0.5">
                                                    {idx + 1}
                                                </span>
                                                <span className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">{misi}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {/* Footer Info */}
                        <div className="mt-8 pt-4 border-t border-stone-200 dark:border-navy-800 flex items-center gap-2 text-xs text-stone-400">
                            <img src="/Lambang_Kabupaten_Parigi_Moutong.png" className="h-4 w-auto object-contain shrink-0" alt="Logo" />
                            <span>Kantor Desa Tolai · Jam Layanan: {activeProfile.timings || defaultProfile.timings}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
