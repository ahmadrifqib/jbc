import MainLayout from '@/layouts/main-layout';
import Header from '@/layouts/pages/header';
import { Head } from '@inertiajs/react';
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export interface Company {
    id: number;
    name: string;
    description: string;
    lat: number;
    lng: number;
    gmap_link?: string;
}

export const companies: Company[] = [
    {
        id: 1,
        name: 'Acme Corp',
        description: 'Global supplier of anvils.',
        lat: -6.2,
        lng: 106.816666,
    },
    {
        id: 2,
        name: 'Wayne Tech',
        description: 'Advanced gadget manufacturer.',
        lat: -6.21,
        lng: 106.82,
    },
    {
        id: 3,
        name: 'Stark Industries',
        description: 'Defense and clean-energy solutions.',
        lat: -6.215,
        lng: 106.825,
    },
    {
        id: 4,
        name: 'Oscorp',
        description: 'Biotech and engineering leader.',
        lat: -6.205,
        lng: 106.83,
    },
];

export default function Event() {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [selected, setSelected] = useState<Company | null>(null);

    useEffect(() => {
        fetch('/data/companies.json')
            .then((res) => res.json())
            .then((data: Company[]) => {
                setCompanies(data);
                setSelected(data[0] || null);
            })
            .catch(console.error);
    }, []);

    if (!selected) {
        return <p className="p-6">Loading map…</p>;
    }

    return (
        <>
            {/* Head */}
            <Head title="Event" />

            {/* content */}
            <MainLayout>
                {/* header */}
                <Header title="Event" />
                <div className="m-20 flex h-screen border-2">
                    {/* Sidebar */}
                    <aside className="w-1/4 overflow-auto border-r">
                        <ul>
                            {companies.map((c) => (
                                <li
                                    key={c.id}
                                    onClick={() => setSelected(c)}
                                    className={`cursor-pointer p-4 text-zinc-900 hover:bg-gray-100 ` + (c.id === selected.id ? 'bg-gray-200' : '')}
                                >
                                    {c.name}
                                </li>
                            ))}
                        </ul>
                    </aside>

                    {/* Map Pane */}
                    <main className="w-3/4">
                        <MapContainer center={[selected.lat, selected.lng]} zoom={13} className="h-full w-full">
                            <TileLayer attribution="© OpenStreetMap contributors" url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            <Marker position={[selected.lat, selected.lng]}>
                                <Popup>
                                    <strong>{selected.name}</strong>
                                    <p>{selected.description}</p>
                                    <a href={selected.gmap_link} target="_open" className="bg-jblue-300 rounded px-5 py-3 text-zinc-50">
                                        Go To Map
                                    </a>
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </main>
                </div>
            </MainLayout>
        </>
    );
}
