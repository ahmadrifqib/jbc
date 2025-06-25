import MainLayout from '@/layouts/main-layout';
import Header from '@/layouts/pages/header';
import { Head } from '@inertiajs/react';

export default function About() {
    return (
        <>
            {/* Head */}
            <Head title="Event" />

            <MainLayout>
                {/* header */}
                <Header title="Our Team" />

                {/* content */}
                <div className="text-zinc-900">
                    {/* leader */}
                    <div className="mx-auto flex flex-col items-center justify-center bg-radial-[at_25%_50%] from-orange-500/40 to-orange-50 to-30% p-10 pt-20 md:flex-row md:px-60 md:pt-60">
                        <div className="mx-0 flex w-full items-center justify-center xl:w-1/3">
                            <div className="h-125 w-80 overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] bg-orange-500">
                                <img src="https://picsum.photos/350/450" alt="picsum" />
                                <div className="p-2 px-5 text-zinc-50">
                                    <div className="text-3xl font-bold">John Doe</div>
                                    <span className="text-xl font-medium">CEO</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-10 md:p-20 xl:w-2/3">
                            <div className="my-10 text-6xl font-semibold underline decoration-orange-500 decoration-4 md:text-8xl">Leader</div>
                            <div className="text-xl font-normal md:text-2xl">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi eveniet, amet molestias veniam asperiores id
                                fuga cumque ipsum dolor voluptate repellat minus sit facere labore sapiente voluptatibus sint culpa.
                            </div>
                        </div>
                    </div>

                    {/* officer / vice leader */}
                    <div className="mx-auto items-center justify-center p-10 md:px-60 md:pt-20">
                        <div className="my-10 text-center text-6xl font-semibold underline decoration-orange-500 decoration-4 md:text-8xl">
                            Officer
                        </div>
                        <div className="grid grid-cols-1 justify-items-center gap-10 p-10 md:grid-cols-2 md:p-20">
                            {Array.from({ length: 2 }).map((_, index) => (
                                <div key={index} className="h-125 w-80 overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] bg-orange-500">
                                    <img src="https://picsum.photos/350/450" alt="picsum" />
                                    <div className="p-2 px-5 text-zinc-50">
                                        <div className="text-3xl font-bold">John Doe</div>
                                        <span className="text-xl font-medium">CEO</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* supporting */}
                    <div className="mx-auto items-center justify-center p-10 pb-20 md:px-30 md:pt-20">
                        <div className="my-10 text-center text-6xl font-semibold underline decoration-orange-500 decoration-4 md:text-8xl">
                            Supporting Officers
                        </div>
                        <div className="grid grid-cols-1 justify-items-center gap-10 p-10 md:grid-cols-3 md:gap-20">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="h-125 w-80 overflow-hidden rounded-tl-[5rem] rounded-br-[5rem] bg-orange-500">
                                    <img src="https://picsum.photos/350/450" alt="picsum" />
                                    <div className="p-2 px-5 text-zinc-50">
                                        <div className="text-3xl font-bold">John Doe</div>
                                        <span className="text-xl font-medium">CEO</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
