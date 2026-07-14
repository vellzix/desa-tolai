import { ReactNode } from 'react';
import VillageNav from '@/components/public/village-nav';
import VillageFooter from '@/components/public/village-footer';

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-neutral-900 dark:text-neutral-50 transition-colors duration-300 antialiased selection:bg-sky-600 selection:text-white"
            style={{ backgroundImage: "url('/WhatsApp Image 2026-07-13 at 14.07.13.jpeg')" }}
        >
            <div className="bg-slate-100/60 dark:bg-black/65 backdrop-blur-[1px] min-h-screen flex flex-col justify-between">
                {/* Public Navigation Header */}
                <VillageNav />
                
                {/* Main Content Area */}
                <main className="flex-grow">
                    {children}
                </main>
                
                {/* Public Footer */}
                <VillageFooter />
            </div>
        </div>
    );
}
