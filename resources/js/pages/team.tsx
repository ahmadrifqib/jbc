import MainLayout from '@/layouts/main-layout';
import Header from '@/layouts/pages/header';
import { Member } from '@/types/data';
import { Head } from '@inertiajs/react';
import { useEffect, useMemo, useState } from 'react';

// const member = Members as Member[];

export default function Team() {
    const [users, setUsers] = useState<Member[]>([]);

    useEffect(() => {
        fetch('/data/member.json')
            .then((res) => res.json())
            .then((data: Member[]) => setUsers(data))
            .catch((err) => console.log(err));
    }, []);

    console.info(`Ini: ${users}`);

    const grouped = useMemo(() => {
        return users.reduce<Record<string, Member[]>>((acc, u) => {
            acc[u.organizational_structure.name] = acc[u.organizational_structure.name] || [];
            acc[u.organizational_structure.name].push(u);
            return acc;
        }, {});
    }, [users]);

    // console.info(grouped);

    const ketua = useMemo(() => {
        return users.filter((user) => user.organizational_structure.sections.some((s) => s.name === 'Ketua'));
    }, [users]);

    // const anggota = useMemo(() => {
    //     return users.filter((user) => user.organizational_structure.sections.some((s) => s.name !== 'Ketua'));
    // }, [users]);

    // console.info(users.filter((user) => user.organizational_structure.id === '1'));
    // console.info(users.filter((user) => user.organizational_structure.sections.some((s) => s.name === 'Ketua')));
    // const wakil_ketua = users.filter((user) => user.organizational_structure.sections[1] !== 'Ketua');
    // console.info(anggota.length);
    // console.info(users.length);

    return (
        <>
            {/* Head */}
            <Head title="Team" />

            <MainLayout>
                {/* header */}
                <Header title="Our Team" />

                {/* content */}
                <div className="text-zinc-900">
                    {/* leader */}
                    <div className="from-jblue-500/30 mx-auto flex flex-col items-center justify-center bg-radial-[at_25%_50%] to-zinc-50 to-30% p-10 pt-20 pb-60 md:flex-row md:px-60 md:pt-60">
                        <div className="mx-0 flex w-full items-center justify-center xl:w-1/3">
                            {ketua.map((user) => (
                                <div
                                    key={user.uuid}
                                    className="bg-jblue-500 h-125 w-80 overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] shadow-[-10px_10px_5px_-3px] shadow-zinc-900/50"
                                >
                                    <img src="https://picsum.photos/350/450" alt="picsum" />
                                    <div className="p-2 px-5 text-zinc-50">
                                        <div className="text-3xl font-bold">{user.name}</div>
                                        <span className="text-xl font-medium">{user.organizational_structure.sections[0].name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="w-full p-10 md:p-20 xl:w-2/3">
                            <div className="decoration-jblue-500 my-10 text-6xl font-semibold underline decoration-4 md:text-8xl">Ketua</div>
                            <div className="text-xl font-normal md:text-2xl">
                                Puji dan syukur kita panjatkan ke hadirat Tuhan atas anugerah-Nya yang senantiasa menyertai pelayanan kita; semoga
                                dalam pertemuan ini kita dipenuhi hikmat dan kekuatan untuk melangkah bersama mewujudkan visi-Nya dan memberkati
                                setiap jiwa yang dipercayakan kepada kita.
                            </div>
                        </div>
                    </div>

                    {/* officer / vice leader */}
                    {/* <div className="mx-auto items-center justify-center p-10 md:px-60 md:pt-20">
                        <div className="decoration-jblue-500 my-10 text-center text-6xl font-semibold underline decoration-4 md:text-8xl">
                            Officer
                        </div>
                        <div className="grid grid-cols-1 justify-items-center gap-10 p-10 md:grid-cols-2 md:p-20">
                            {Array.from({ length: 2 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="bg-jblue-500 h-125 w-80 overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] shadow-[-10px_10px_5px_-3px] shadow-zinc-900/50"
                                >
                                    <img src="https://picsum.photos/350/450" alt="picsum" />
                                    <div className="p-2 px-5 text-zinc-50">
                                        <div className="text-3xl font-bold">John Doe</div>
                                        <span className="text-xl font-medium">CEO</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

                    {/* dynamic */}
                    <div className="mx-auto items-center justify-center p-10 pb-20 md:px-30 md:pt-20">
                        {Object.entries(grouped).map(([name, list]) => (
                            <section key={name} className="mb-60">
                                <div className="decoration-jblue-500 my-10 text-center text-6xl font-semibold underline decoration-4 md:text-8xl">
                                    {name.charAt(0).toUpperCase() + name.slice(1)}
                                </div>
                                <div className="grid grid-cols-1 justify-items-center gap-10 p-10 md:grid-cols-3 md:gap-20">
                                    {list.map((user) => (
                                        <div
                                            key={user.uuid}
                                            className="bg-jblue-500 h-125 w-80 overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] shadow-[-10px_10px_5px_-3px] shadow-zinc-900/50"
                                        >
                                            <img src="https://picsum.photos/350/450" alt="picsum" />
                                            <div className="p-2 px-5 text-zinc-50">
                                                <div className="py-1 text-3xl font-bold">{user.name.split(' ').slice(0, 2).join(' ')}</div>
                                                <span className="text-base font-medium">
                                                    {user.organizational_structure.sections.map((s) => s.name.split(' ').slice(0, 2).join(' '))[0]}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
