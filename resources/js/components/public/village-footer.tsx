import { Link } from '@inertiajs/react';
import { Landmark, Mail, Phone, MapPin, ExternalLink, Heart, Shield } from 'lucide-react';

export default function VillageFooter() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Beranda', href: '/' },
        { label: 'Tentang & Sejarah', href: '/tentang' },
        { label: 'Potensi & Budaya', href: '/potensi' },
        { label: 'Kabar Desa', href: '/kabar' },
        { label: 'Galeri & Peta', href: '/galeri' },
    ];

    const organizations = [
        { name: 'BPD Desa Tolai' },
        { name: 'PKK Desa Tolai' },
        { name: 'Karang Taruna "Astina Karya"' },
        { name: 'Kelompok Subak Merta Sari' },
    ];

    return (
        <footer className="bg-neutral-950 text-neutral-400 border-t border-neutral-900">
            {/* Government Identity Strip */}
            <div className="bg-olive-900/40 border-b border-olive-900/30 py-4 px-4">
                <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-olive-700 text-white">
                            <Landmark className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="text-white text-sm font-bold">Pemerintah Desa Tolai</p>
                            <p className="text-olive-300 text-[11px]">Kecamatan Torue · Kabupaten Parigi Moutong · Sulawesi Tengah</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-olive-300">
                        <Shield className="h-3.5 w-3.5" />
                        <span>Website Resmi Pemerintah Desa</span>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-10">
                    
                    {/* Contact column */}
                    <div className="lg:col-span-5 space-y-4">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest pb-2 border-b border-neutral-800">
                            Kontak & Alamat
                        </h4>
                        <p className="text-xs text-neutral-500 leading-relaxed">
                            Website profil resmi kependudukan dan tata pamong Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah.
                        </p>
                        <div className="space-y-2.5 text-xs">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-3.5 w-3.5 text-gold-500 shrink-0 mt-0.5" />
                                <span className="leading-relaxed">Jl. Trans Sulawesi No. 12, Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong, Sulawesi Tengah 94473</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                                <span>+62 822-9111-3320</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="h-3.5 w-3.5 text-gold-500 shrink-0" />
                                <span>kontak@desatolai.go.id</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick links column */}
                    <div className="lg:col-span-3 space-y-4">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest pb-2 border-b border-neutral-800">
                            Navigasi
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                                    >
                                        <span className="h-px w-2 bg-olive-700 rounded-full" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Institutions column */}
                    <div className="lg:col-span-4 space-y-4">
                        <h4 className="text-white text-xs font-bold uppercase tracking-widest pb-2 border-b border-neutral-800">
                            Lembaga Desa
                        </h4>
                        <ul className="space-y-2 text-xs">
                            {organizations.map((org) => (
                                <li key={org.name} className="flex items-center justify-between text-neutral-400 hover:text-white transition-colors">
                                    <span className="flex items-center gap-1.5">
                                        <span className="h-px w-2 bg-olive-700 rounded-full" />
                                        {org.name}
                                    </span>
                                    <ExternalLink className="h-3 w-3 text-neutral-700 shrink-0" />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-neutral-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-neutral-600">
                    <p>
                        &copy; {currentYear} Pemerintah Desa Tolai, Parigi Moutong. Hak Cipta Dilindungi.
                    </p>
                    <p className="flex items-center gap-1.5">
                        <span>Dibuat dengan</span>
                        <Heart className="h-3 w-3 text-neutral-700 fill-current" />
                        <span>untuk ketertiban & kesejahteraan masyarakat.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
