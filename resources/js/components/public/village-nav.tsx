import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useAppearance } from '@/hooks/use-appearance';
import { Menu, X, Sun, Moon, ShieldCheck, ChevronRight, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { login, dashboard } from '@/routes';

interface NavItem {
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { label: 'Beranda', href: '/' },
    { label: 'Tentang & Sejarah', href: '/tentang' },
    { label: 'Potensi & Budaya', href: '/potensi' },
    { label: 'Kabar Desa', href: '/kabar' },
    { label: 'Galeri & Peta', href: '/galeri' },
];

export default function VillageNav() {
    const { auth } = usePage().props;
    const { url } = usePage();
    const { appearance, updateAppearance, resolvedAppearance } = useAppearance();
    const [isOpen, setIsOpen] = useState(false);

    const isActive = (itemHref: string) => {
        if (itemHref === '/') return url === '/' || url === '';
        return url.startsWith(itemHref);
    };

    return (
        <header className="fixed top-0 z-50 w-full shadow-md">

            {/* ── Government Top Bar ── */}
            <div className="bg-navy-800 dark:bg-navy-950 border-b border-navy-700/40 py-1.5 hidden md:block">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                    <div className="flex items-center gap-5 text-[11px] text-navy-200">
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3 opacity-60" />
                            Layanan: Senin – Jumat, 08.00 – 15.00 WITA
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone className="h-3 w-3 opacity-60" />
                            +62 822-9111-3320
                        </span>
                    </div>
                    <span className="text-[11px] text-navy-300">
                        Kecamatan Torue · Kabupaten Parigi Moutong · Sulawesi Tengah
                    </span>
                </div>
            </div>

            {/* ── Main Navigation ── */}
            <div className="bg-white dark:bg-navy-950 border-b border-stone-200 dark:border-navy-800">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-16">

                    {/* Brand / Logo */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-transparent shrink-0">
                            <img 
                                src="/Lambang_Kabupaten_Parigi_Moutong.png" 
                                alt="Logo Parigi Moutong" 
                                className="h-9 w-auto object-contain group-hover:scale-105 transition-transform"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-navy-900 dark:text-white leading-tight tracking-tight">
                                Pemerintah Desa Tolai
                            </span>
                            <span className="text-[10px] text-navy-600 dark:text-navy-300 uppercase tracking-widest leading-none font-medium">
                                Kab. Parigi Moutong
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Nav Links */}
                    <nav className="hidden md:flex items-center">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`px-4 py-5 text-sm font-medium transition-all duration-150 cursor-pointer border-b-2 ${
                                        active
                                            ? 'text-navy-700 dark:text-gold-400 border-navy-700 dark:border-gold-500 font-semibold'
                                            : 'text-stone-600 dark:text-stone-300 border-transparent hover:text-navy-700 dark:hover:text-white'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden md:flex items-center gap-2">
                        {/* Theme Toggle */}
                        <div className="flex items-center rounded border border-stone-200 dark:border-navy-700 overflow-hidden">
                            <button onClick={() => updateAppearance('light')}
                                className={`p-1.5 transition-colors cursor-pointer ${appearance === 'light' ? 'bg-navy-700 text-white' : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'}`}
                                title="Light Mode">
                                <Sun className="h-3.5 w-3.5" />
                            </button>
                            <button onClick={() => updateAppearance('dark')}
                                className={`p-1.5 transition-colors cursor-pointer ${appearance === 'dark' ? 'bg-navy-700 text-white' : 'text-stone-400 hover:text-stone-600 dark:hover:text-stone-300'}`}
                                title="Dark Mode">
                                <Moon className="h-3.5 w-3.5" />
                            </button>
                        </div>

                        {auth.user ? (
                            <Link href={dashboard()}>
                                <Button size="sm" className="bg-navy-700 hover:bg-navy-800 text-white rounded text-xs px-4 gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5" /> Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <Link href={login()}>
                                <Button size="sm" variant="outline" className="rounded border-stone-300 dark:border-navy-600 text-stone-600 dark:text-stone-300 text-xs gap-1">
                                    Login Staff <ChevronRight className="h-3.5 w-3.5" />
                                </Button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="flex md:hidden items-center gap-2">
                        <button onClick={() => updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded border border-stone-200 dark:border-navy-700 text-stone-500 dark:text-stone-400">
                            {resolvedAppearance === 'dark' ? <Sun className="h-4 w-4 text-gold-400" /> : <Moon className="h-4 w-4" />}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded border border-stone-200 dark:border-navy-700 text-stone-500 dark:text-stone-400">
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden bg-white dark:bg-navy-950 border-b border-stone-200 dark:border-navy-800 shadow-lg">
                    <div className="px-4 py-2 bg-navy-800 text-navy-200 text-[11px]">
                        Pemerintah Desa Tolai · Kab. Parigi Moutong
                    </div>
                    <div className="px-4 py-3 space-y-0.5">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)}
                                    className={`flex items-center px-3 py-2.5 text-sm font-medium rounded transition-colors cursor-pointer ${
                                        active
                                            ? 'bg-navy-50 text-navy-800 dark:bg-navy-900 dark:text-gold-400 border-l-2 border-navy-700'
                                            : 'text-stone-700 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-navy-800/50'
                                    }`}>
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="pt-3 border-t border-stone-200 dark:border-navy-800 mt-2">
                            {auth.user ? (
                                <Link href={dashboard()} className="w-full" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-navy-700 hover:bg-navy-800 text-white rounded gap-1.5 text-sm">
                                        <ShieldCheck className="h-4 w-4" /> Masuk Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <Link href={login()} className="w-full" onClick={() => setIsOpen(false)}>
                                    <Button variant="outline" className="w-full rounded gap-1 text-sm">
                                        Login Staff <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
