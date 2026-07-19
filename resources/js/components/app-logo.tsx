import AppLogoIcon from '@/components/app-logo-icon';

export default function AppLogo() {
    return (
        <>
            <div className="flex aspect-square size-8 items-center justify-center rounded-md bg-navy-700 text-white">
                <AppLogoIcon className="size-5 fill-current text-white" />
            </div>
            <div className="ml-1 grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-bold text-[13px] text-navy-900 dark:text-white">
                    Desa Tolai
                </span>
                <span className="truncate text-[10px] text-stone-500 dark:text-stone-400 font-normal">
                    Panel Administrasi
                </span>
            </div>
        </>
    );
}
