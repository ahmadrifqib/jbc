import MainLayout from '@/layouts/main-layout';
import Header from '@/layouts/pages/header';
import VisionMission from '@/layouts/pages/home/vision-mission';
import { Head, Link } from '@inertiajs/react';

export default function About() {
    return (
        <>
            {/* Head */}
            <Head title="About Us" />

            <MainLayout>
                {/* header */}
                <Header title="About Us" />

                {/* content */}
                <div className="bg-zinc-50 text-zinc-900">
                    {/* header content */}
                    <div className="p-5 md:p-20">
                        <div className="rounded-4xl bg-orange-500 p-5 md:p-10">
                            <div className="flex flex-col items-center md:flex-row">
                                <div className="w-full md:w-4/7">
                                    <img src="/images/bsdjunction.jpg" alt="BSD Junction" className="w-full rounded-4xl" />
                                </div>
                                <div className="w-full text-5xl md:block md:w-3/7 md:pl-15 md:text-7xl">
                                    <div className="px-4 py-10 leading-tight font-bold text-zinc-100 md:px-8">Jakarta Banten Conference</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* vision mission */}
                    <VisionMission />

                    {/* our service */}
                    <div className="mx-auto items-center justify-center p-10 pb-20 md:px-10 md:pt-20">
                        <div className="my-10 text-center text-6xl font-semibold underline decoration-orange-500 decoration-4 md:text-8xl">
                            Our <span className="text-orange-500">Service</span>
                        </div>
                        <div className="grid grid-cols-2 justify-items-center gap-5 p-10 md:grid-cols-4">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex h-50 w-full items-center overflow-hidden rounded-4xl rounded-br-4xl border-1 bg-[url(https://picsum.photos/400/)] bg-cover bg-center"
                                >
                                    {/* <img src="https://picsum.photos/500/" alt="picsum" /> */}
                                    <div className="p-2 px-5 text-3xl font-bold text-orange-400">John Doe</div>
                                </div>
                            ))}
                            <div className="col-span-2 flex h-50 w-full items-center rounded-4xl rounded-br-4xl border-1 bg-[url(https://picsum.photos/400/)] bg-cover bg-center">
                                <div className="p-2 px-5 text-3xl font-bold text-orange-400">John Doe</div>
                            </div>
                        </div>
                    </div>

                    {/* our team */}
                    <div className="flex flex-col rounded-4xl bg-orange-400 pb-10 text-zinc-50 md:flex-row md:pb-20">
                        <div className='h-96 w-full rounded-r-4xl bg-[url("/images/churches.jpg")] bg-cover bg-center md:h-auto md:w-5/7'></div>
                        <div className="w-full p-10 md:my-20 md:w-2/7">
                            <div className="text-5xl md:text-7xl">Meet the people who serve</div>
                            <div className="my-10 text-xl md:my-20">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae atque dicta quibusdam! Nam praesentium cum commodi hic
                                accusantium sunt, similique dolor qui illum, dicta ipsa tempore maiores soluta eveniet exercitationem!
                            </div>
                            <Link href="/team" className="text-4xl md:text-5xl">
                                <span className="rounded-2xl bg-zinc-50 px-3 text-orange-500">Our team</span>{' '}
                                <span className="rounded-full bg-zinc-50 px-3 text-orange-500">{'>'}</span>
                            </Link>
                        </div>
                    </div>

                    <div className="py-10"></div>
                </div>
            </MainLayout>
        </>
    );
}
