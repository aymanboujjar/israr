import logo from '../../../public/assets/images/logo_black.png';
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-[var(--color-alpha)] text-[var(--color-light)] dark:bg-[var(--color-alpha)] dark:text-white">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-4  md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <img src={logo} alt="ISRAR" className="h-24 w-auto" />
                </div>
                    <span className="text-sm opacity-80">© {new Date().getFullYear()} ISRAR. All rights reserved.</span>
                <nav className="flex items-center gap-4 text-sm">
                    <Link href="#" className="opacity-80 transition-colors hover:text-[var(--color-beta)]">About</Link>
                    <Link href="#" className="opacity-80 transition-colors hover:text-[var(--color-beta)]">Contact</Link>
                    <Link href="#" className="opacity-80 transition-colors hover:text-[var(--color-beta)]">Privacy</Link>
                </nav>
            </div>
        </footer>
    );
}


