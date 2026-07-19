import type { SVGAttributes } from 'react';

// Ikon bangunan/balai desa bergaya pemerintahan
export default function AppLogoIcon(props: SVGAttributes<SVGElement>) {
    return (
        <svg {...props} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Atap / Segitiga */}
            <path d="M20 2L2 13H38L20 2Z" fill="currentColor" fillOpacity="0.9" />
            {/* Badan bangunan */}
            <rect x="4" y="13" width="32" height="20" fill="currentColor" fillOpacity="0.75" />
            {/* Pintu utama */}
            <rect x="16" y="22" width="8" height="11" fill="currentColor" fillOpacity="0.4" />
            {/* Jendela kiri */}
            <rect x="7" y="17" width="6" height="5" rx="1" fill="currentColor" fillOpacity="0.4" />
            {/* Jendela kanan */}
            <rect x="27" y="17" width="6" height="5" rx="1" fill="currentColor" fillOpacity="0.4" />
            {/* Tiang kiri */}
            <rect x="8" y="13" width="2.5" height="20" fill="currentColor" fillOpacity="0.5" />
            {/* Tiang kanan */}
            <rect x="29.5" y="13" width="2.5" height="20" fill="currentColor" fillOpacity="0.5" />
            {/* Lantai dasar */}
            <rect x="0" y="33" width="40" height="3" fill="currentColor" fillOpacity="0.5" />
        </svg>
    );
}
