import { useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { useAppearance } from '@/hooks/use-appearance';
import { Menu, X, Sun, Moon, Laptop, Landmark, ShieldCheck, ChevronRight } from 'lucide-react';
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
    { label: 'Layanan Mandiri', href: '/layanan' },
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
        <header
            className="fixed top-0 z-50 w-full bg-white/95 dark:bg-[#0c0c0e]/95 border-b border-neutral-200 dark:border-neutral-800/80 backdrop-blur-md py-3 shadow-sm"
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                {/* Logo and Brand */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-sky-700 to-emerald-600 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                        <Landmark className="h-5.5 w-5.5" />
                    </div>
                    <div className="flex flex-col text-left">
                        <span className="text-base font-bold tracking-tight text-neutral-900 dark:text-neutral-50 transition-colors group-hover:text-sky-700 dark:group-hover:text-sky-400">
                            Desa Tolai
                        </span>
                        <span className="text-[10px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-widest leading-none">
                            Parigi Moutong
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1.5">
                    {navItems.map((item) => {
                        const active = isActive(item.href);
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`px-3.5 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                                    active
                                        ? 'bg-sky-50 text-sky-850 dark:bg-sky-950/40 dark:text-sky-400'
                                        : 'text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60'
                                }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Actions */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Theme Toggle */}
                    <div className="flex items-center gap-1 rounded-lg border border-neutral-200 dark:border-neutral-800 p-0.5 bg-neutral-50 dark:bg-neutral-900/50">
                        <button
                            onClick={() => updateAppearance('light')}
                            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                                appearance === 'light'
                                    ? 'bg-white text-sky-750 shadow-sm dark:bg-neutral-800'
                                    : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
                            }`}
                            title="Light Mode"
                        >
                            <Sun className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => updateAppearance('dark')}
                            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                                appearance === 'dark'
                                    ? 'bg-white text-sky-750 shadow-sm dark:bg-neutral-800'
                                    : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
                            }`}
                            title="Dark Mode"
                        >
                            <Moon className="h-4 w-4" />
                        </button>
                        <button
                            onClick={() => updateAppearance('system')}
                            className={`p-1.5 rounded-md transition-colors cursor-pointer ${
                                appearance === 'system'
                                    ? 'bg-white text-sky-750 shadow-sm dark:bg-neutral-800'
                                    : 'text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300'
                            }`}
                            title="System Default"
                        >
                            <Laptop className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Portal Admin CTA */}
                    {auth.user ? (
                        <Link href={dashboard()}>
                            <Button size="sm" className="bg-sky-800 hover:bg-sky-900 text-white rounded-lg flex items-center gap-1.5 px-4 shadow-sm hover:shadow-md cursor-pointer transition-all duration-200 font-semibold">
                                <ShieldCheck className="h-4 w-4" />
                                Dashboard
                            </Button>
                        </Link>
                    ) : (
                        <Link href={login()}>
                            <Button size="sm" variant="outline" className="rounded-lg border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 flex items-center gap-1 cursor-pointer font-semibold">
                                Login Staff
                                <ChevronRight className="h-3.5 w-3.5" />
                            </Button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="flex md:hidden items-center gap-3">
                    {/* Theme Toggle (Mobile) */}
                    <button
                        onClick={() => updateAppearance(resolvedAppearance === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-lg border border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-900/50"
                    >
                        {resolvedAppearance === 'dark' ? <Sun className="h-4 w-4 text-sky-500" /> : <Moon className="h-4 w-4 text-sky-750" />}
                    </button>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900/50"
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            {isOpen && (
                <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0c0c0e]/95 backdrop-blur-lg transition-all duration-300 ease-in-out">
                    <div className="space-y-1 px-4 py-4 sm:px-6">
                        {navItems.map((item) => {
                            const active = isActive(item.href);
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block w-full text-left px-4 py-2.5 text-base font-bold rounded-lg transition-colors cursor-pointer ${
                                        active
                                            ? 'bg-sky-50 text-sky-850 dark:bg-sky-950/40 dark:text-sky-400'
                                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/40'
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-col gap-2">
                            {auth.user ? (
                                <Link href={dashboard()} className="w-full" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full bg-sky-800 hover:bg-sky-900 text-white rounded-lg flex items-center justify-center gap-1.5">
                                        <ShieldCheck className="h-4.5 w-4.5" />
                                        Masuk Dashboard
                                    </Button>
                                </Link>
                            ) : (
                                <Link href={login()} className="w-full" onClick={() => setIsOpen(false)}>
                                    <Button variant="outline" className="w-full border-neutral-300 dark:border-neutral-700 rounded-lg flex items-center justify-center gap-1">
                                        Login Staff Administrasi
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
