import MainLayout from '@/layouts/main-layout';
import Header from '@/layouts/pages/header';
import { Head } from '@inertiajs/react';

export default function Support() {
    return (
        <>
            {/* Head */}
            <Head title="Event" />

            <MainLayout>
                {/* header */}
                <Header title="Support" />

                {/* content */}
                <div className="h-screen w-full"></div>
            </MainLayout>
        </>
    );
}
