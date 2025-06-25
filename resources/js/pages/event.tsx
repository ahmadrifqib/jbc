import MainLayout from '@/layouts/main-layout';
import Header from '@/layouts/pages/header';
import { Head } from '@inertiajs/react';

export default function Event() {
    return (
        <>
            {/* Head */}
            <Head title="Event" />

            <MainLayout>
                {/* header */}
                <Header title="Event" />

                {/* content */}
                <div className="h-screen w-full"></div>
            </MainLayout>
        </>
    );
}
