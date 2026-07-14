import { Link } from '@inertiajs/react';
import { Landmark, Mail, Phone, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function VillageFooter() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Beranda', href: '/' },
        { label: 'Tentang & Sejarah', href: '/tentang' },
        { label: 'Potensi & Budaya', href: '/potensi' },
        { label: 'Layanan Mandiri', href: '/layanan' },
        { label: 'Kabar Desa', href: '/kabar' },
        { label: 'Galeri & Peta', href: '/galeri' },
    ];

    const services = [
        { label: 'SK Domisili (SKD)' },
        { label: 'SK Usaha (SKU)' },
        { label: 'SK Tidak Mampu (SKTM)' },
        { label: 'Pelayanan Administrasi Umum' },
    ];

    const organizations = [
        { name: 'BPD Desa Tolai' },
        { name: 'PKK Desa Tolai' },
        { name: 'Karang Taruna "Astina Karya"' },
        { name: 'Kelompok Subak Merta Sari' },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="bg-neutral-950 text-neutral-400 pt-16 pb-8 border-t border-neutral-900">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Top Section: Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
                    {/* Brand column */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-700 to-emerald-600 text-white shadow-sm">
                                <Landmark className="h-5.5 w-5.5" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-base font-bold tracking-tight text-white">
                                    Pemerintah Desa Tolai
                                </span>
                                <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-widest leading-none">
                                    Kabupaten Parigi Moutong
                                </span>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-500 leading-relaxed text-justify">
                            Website profil resmi kependudukan dan tata pamong Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah.
                        </p>
                        {/* Contact details */}
                        <div className="space-y-2 pt-2 text-xs">
                            <div className="flex items-start gap-2.5">
                                <MapPin className="h-4 w-4 text-sky-500 shrink-0 mt-0.5" />
                                <span>Jl. Trans Sulawesi No. 12, Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah 94473</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Phone className="h-4 w-4 text-sky-500 shrink-0" />
                                <span>+62 822-9111-3320</span>
                            </div>
                            <div className="flex items-center gap-2.5">
                                <Mail className="h-4 w-4 text-sky-500 shrink-0" />
                                <span>kontak@desatolai.go.id</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick links column */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-sky-700 pl-2">
                            Tautan Cepat
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors cursor-pointer text-left text-neutral-400"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services column */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-sky-700 pl-2">
                            Layanan Surat
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            {services.map((service) => (
                                <li key={service.label} className="flex items-center gap-1.5 text-neutral-400">
                                    <span className="h-1 w-1 bg-neutral-800 rounded-full" />
                                    <span>{service.label}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-2">
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-sky-500 bg-sky-500/5 px-2.5 py-1 rounded border border-sky-900/30">
                                <ShieldCheck className="h-3.5 w-3.5" />
                                Layanan Terverifikasi SSL
                            </span>
                        </div>
                    </div>

                    {/* Institutions column */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest border-l-2 border-sky-700 pl-2">
                            Lembaga Desa
                        </h4>
                        <ul className="space-y-2.5 text-xs">
                            {organizations.map((org) => (
                                <li key={org.name} className="flex items-center justify-between text-neutral-400 hover:text-white transition-colors">
                                    <span>{org.name}</span>
                                    <ExternalLink className="h-3 w-3 text-neutral-800 shrink-0" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Divider & Copyright */}
                <div className="border-t border-neutral-900 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
                    <p className="text-center md:text-left">
                        &copy; {currentYear} Pemerintah Desa Tolai, Parigi Moutong. Hak Cipta Dilindungi Undang-Undang.
                    </p>
                    <p className="flex items-center gap-1 text-center md:text-right">
                        <span>Dibuat dengan</span>
                        <Heart className="h-3 w-3 text-slate-600 fill-current" />
                        <span>untuk ketertiban & kesejahteraan masyarakat.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
