import MainLayout from '@/layouts/main-layout';
import Header from '@/layouts/pages/header';
import { Church } from '@/types/data';
import { Head } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export interface Company {
    id: number;
    name: string;
    description: string;
}

export const companies: Company[] = [
    { id: 1, name: 'Acme Corp', description: 'Global supplier of anvils.' },
    { id: 2, name: 'Wayne Tech', description: 'Advanced gadget manufacturer.' },
    { id: 3, name: 'Stark Industries', description: 'Defense and clean-energy solutions.' },
    { id: 4, name: 'Oscorp', description: 'Biotech and engineering leader.' },
];

export default function Location() {
    const [chruch, setChruch] = useState<Church[]>([]);
    const [selectedId, setSelectedId] = useState<number | null>(null);

    useEffect(() => {
        fetch('/data/church.json')
            .then((res) => res.json())
            .then((data: Church[]) => {
                setChruch(data);
                setSelectedId(data[0].id);
            })
            .catch((err) => console.log(err));
    }, []);

    if (!companies.length || selectedId === null) {
        return <p className="p-6">Loading…</p>;
    }

    const selected = chruch.find((c) => c.id === selectedId)!;

    // console.info(companies);
    // console.info(chruch.map((c) => c.name));

    return (
        <>
            {/* Head */}
            <Head title="Location" />

            {/* content */}
            <MainLayout>
                {/* header */}
                <Header title="Location" />

                <div className="m-20 flex h-screen border-2">
                    <aside className="w-1/4 overflow-auto border-r">
                        <ul>
                            {chruch.map((c) => (
                                <li
                                    key={c.id}
                                    onClick={() => setSelectedId(c.id)}
                                    className={`cursor-pointer p-4 text-zinc-900 hover:bg-gray-100` + (c.id === selectedId ? 'bg-gray-200' : '')}
                                >
                                    {c.name}
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <main className="w-3/4 overflow-auto p-6 text-gray-700">
                        <h2 className="mb-2 text-2xl">{selected.name}</h2>
                        <p className="">{selected.address}</p>
                    </main>
                </div>
            </MainLayout>
        </>
    );
}
