import { ReactNode } from 'react';
import VillageNav from '@/components/public/village-nav';
import VillageFooter from '@/components/public/village-footer';

interface PublicLayoutProps {
    children: ReactNode;
}

export default function PublicLayout({ children }: PublicLayoutProps) {
    return (
        <div 
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-neutral-900 dark:text-neutral-50 transition-colors duration-300 antialiased selection:bg-gold-500 selection:text-white"
            style={{ 
                backgroundImage: "linear-gradient(to bottom, rgba(40, 48, 25, 0.3), rgba(15, 15, 15, 0.4)), url('/WhatsApp Image 2026-07-13 at 14.07.13.jpeg')" 
            }}
        >
            <div className="bg-cream-50/60 dark:bg-neutral-950/85 min-h-screen flex flex-col justify-between">
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
