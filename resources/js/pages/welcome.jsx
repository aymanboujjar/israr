import AppLayout from '@/layouts/app-layout';
import { dashboard, login, register } from '@/routes';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage().props;

    return (
        <AppLayout>
            <div>
                <h1>salam</h1>
            </div>
        </AppLayout>
    );
}
