import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useAppearance } from '@/hooks/use-appearance';
import { Menu, X, Sun, Moon, Landmark, ShieldCheck, ChevronRight, Phone, Clock } from 'lucide-react';
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
        if (itemHref === '/') {
            return url === '/' || url === '';
        }
        return url.startsWith(itemHref);
    };

    return (
        <header className="fixed top-0 z-50 w-full shadow-md">
            {/* Top Government Bar */}
            <div className="bg-olive-800 dark:bg-olive-950 text-white py-1.5 px-4 border-b border-olive-700/50 hidden md:block">
                <div className="mx-auto max-w-7xl flex items-center justify-between">
                    <div className="flex items-center gap-5 text-[11px] text-olive-200">
                        <span className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3 opacity-70" />
                            Jam Layanan: Senin–Jumat, 08.00–15.00 WITA
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone className="h-3 w-3 opacity-70" />
                            +62 822-9111-3320
                        </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-olive-200">
                        <span>Pemerintah Desa Tolai, Kecamatan Torue, Kabupaten Parigi Moutong</span>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="bg-white/97 dark:bg-neutral-950/97 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3">
                    {/* Logo and Brand */}
                    <Link href="/" className="flex items-center gap-3 group shrink-0">
                        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-olive-700 text-white shadow-sm">
                            <Landmark className="h-5.5 w-5.5" />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-tight">
                                Pemerintah Desa Tolai
                            </span>
                            <span className="text-[10px] font-medium text-olive-700 dark:text-olive-400 uppercase tracking-widest leading-none">
                                Kab. Parigi Moutong — Sulawesi Tengah
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-0.5">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className={`px-3.5 py-2 text-sm font-medium transition-all duration-200 cursor-pointer border-b-2 ${
                                        active
                                            ? 'text-olive-700 dark:text-gold-500 border-olive-700 dark:border-gold-500'
                                            : 'text-neutral-600 dark:text-neutral-300 border-transparent hover:text-olive-700 dark:hover:text-gold-500 hover:border-olive-300 dark:hover:border-gold-700'
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
                        <div className="flex items-center rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/60 overflow-hidden">
                            <button
                                onClick={() => updateAppearance('light')}
                                className={`p-1.5 transition-colors cursor-pointer ${
                                    appearance === 'light'
                                        ? 'bg-olive-700 text-white'
                                        : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
                                }`}
                                title="Light Mode"
                            >
                                <Sun className="h-3.5 w-3.5" />
                            </button>
                            <button
                                onClick={() => updateAppearance('dark')}
                                className={`p-1.5 transition-colors cursor-pointer ${
                                    appearance === 'dark'
                                        ? 'bg-olive-700 text-white'
                                        : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
                                }`}
                                title="Dark Mode"
                            >
                                <Moon className="h-3.5 w-3.5" />
                            </button>
                        </div>

                        {/* Portal Admin CTA */}
                        {auth.user ? (
                            <Link href={dashboard()}>
                                <Button size="sm" className="bg-olive-700 hover:bg-olive-800 text-white rounded-md flex items-center gap-1.5 px-4 text-xs font-semibold cursor-pointer">
                                    <ShieldCheck className="h-3.5 w-3.5" />
                                    Dashboard
                                </Button>
                            </Link>
                        ) : (
                            <Link href={login()}>
                                <Button size="sm" variant="outline" className="rounded-md border-neutral-300 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1 cursor-pointer text-xs font-medium">
                                    Login Staff
                                    <ChevronRight className="h-3.5 w-3.5" />
                                </Button>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            onClick={() => updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark')}
                            className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                            {resolvedAppearance === 'dark' ? <Sun className="h-4 w-4 text-gold-500" /> : <Moon className="h-4 w-4" />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-md border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-lg">
                    <div className="px-4 py-3 bg-olive-800/10 dark:bg-olive-950/30 border-b border-neutral-100 dark:border-neutral-800 text-xs text-neutral-600 dark:text-neutral-400">
                        Pemerintah Desa Tolai · Kab. Parigi Moutong
                    </div>
                    <div className="space-y-0.5 px-4 py-3">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-md transition-colors cursor-pointer ${
                                        active
                                            ? 'bg-olive-50 text-olive-800 dark:bg-olive-950/40 dark:text-gold-500 border-l-2 border-olive-700'
                                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/40'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 mt-2">
                            {auth.user ? (
                                <Link href={dashboard()} className="w-full" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-olive-700 hover:bg-olive-800 text-white rounded-md flex items-center justify-center gap-1.5 text-sm">
                                        <ShieldCheck className="h-4 w-4" />
                                        Masuk Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <Link href={login()} className="w-full" onClick={() => setIsOpen(false)}>
                                    <Button variant="outline" className="w-full rounded-md flex items-center justify-center gap-1 text-sm">
                                        Login Staff
                                        <ChevronRight className="h-4 w-4" />
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
