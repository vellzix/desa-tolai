import { Link, usePage } from '@inertiajs/react';
import { LayoutDashboard, Building2, Users, Newspaper, Sprout, ImageIcon, ShieldCheck, FolderGit2, BookOpen, Globe, MapPin } from 'lucide-react';
import AppLogo from '@/components/app-logo';
import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { dashboard } from '@/routes';
import type { NavItem } from '@/types';

const cmsNavItems: NavItem[] = [
    { title: 'Ikhtisar', href: '/dashboard', icon: LayoutDashboard },
    { title: 'Profil Desa', href: '/dashboard/profil', icon: Building2 },
    { title: 'Aparatur Desa', href: '/dashboard/aparatur', icon: Users },
    { title: 'Kepala Dusun', href: '/dashboard/kadus', icon: MapPin },
    { title: 'Kabar & Berita', href: '/dashboard/kabar', icon: Newspaper },
    { title: 'Potensi Wilayah', href: '/dashboard/potensi', icon: Sprout },
    { title: 'Galeri Dokumentasi', href: '/dashboard/galeri', icon: ImageIcon },
    { title: 'Kelola Admin', href: '/dashboard/admin-akun', icon: ShieldCheck },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Lihat Website Desa',
        href: '/',
        icon: Globe,
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={dashboard()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={cmsNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
