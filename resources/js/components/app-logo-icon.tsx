import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(props: ImgHTMLAttributes<HTMLImageElement>) {
    return (
        <img 
            {...props} 
            src="/Lambang_Kabupaten_Parigi_Moutong.png" 
            alt="Logo Parigi Moutong" 
            className={`${props.className || ''} object-contain`} 
        />
    );
}
