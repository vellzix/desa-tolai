import { Sun, Moon, Monitor } from 'lucide-react';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { useAppearance } from '@/hooks/use-appearance';
import type { BreadcrumbItem as BreadcrumbItemType } from '@/types';

export function AppSidebarHeader({
    breadcrumbs = [],
}: {
    breadcrumbs?: BreadcrumbItemType[];
}) {
    const { appearance, updateAppearance } = useAppearance();

    return (
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b border-sidebar-border/50 px-6 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 md:px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Breadcrumbs breadcrumbs={breadcrumbs} />
            </div>

            {/* Theme Toggle (Light / Dark / System) */}
            <div className="flex items-center gap-1 p-1 bg-stone-100 dark:bg-neutral-800 rounded-lg border border-stone-200 dark:border-neutral-700">
                <button
                    type="button"
                    onClick={() => updateAppearance('light')}
                    title="Light Mode"
                    className={`p-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                        appearance === 'light'
                            ? 'bg-white text-navy-900 shadow-sm dark:bg-neutral-700 dark:text-white'
                            : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'
                    }`}
                >
                    <Sun className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline text-[11px]">Terang</span>
                </button>
                <button
                    type="button"
                    onClick={() => updateAppearance('dark')}
                    title="Dark Mode"
                    className={`p-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                        appearance === 'dark'
                            ? 'bg-navy-900 text-white shadow-sm dark:bg-neutral-700 dark:text-white'
                            : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'
                    }`}
                >
                    <Moon className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline text-[11px]">Gelap</span>
                </button>
                <button
                    type="button"
                    onClick={() => updateAppearance('system')}
                    title="System Default"
                    className={`p-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1 ${
                        appearance === 'system'
                            ? 'bg-white text-navy-900 shadow-sm dark:bg-neutral-700 dark:text-white'
                            : 'text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white'
                    }`}
                >
                    <Monitor className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline text-[11px]">Sistem</span>
                </button>
            </div>
        </header>
    );
}
