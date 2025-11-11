import { useAppearance } from '@/hooks/use-appearance';
import { Moon, Sun } from 'lucide-react';

export default function AppearanceToggle() {
    const { appearance, updateAppearance } = useAppearance();

    const isDark = appearance === 'dark';
    const toggle = () => updateAppearance(isDark ? 'light' : 'dark');

    return (
        <button
            type="button"
            onClick={toggle}
            title={isDark ? 'Switch to Light' : 'Switch to Dark'}
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--color-light)] hover:text-[var(--color-beta)] dark:text-white"
        >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
    );
}


