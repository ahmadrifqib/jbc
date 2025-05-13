import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            <Head title="Jakarta Banten Conference" />
            <div className="h-svh bg-stone-200 text-black">
                <div className="container mx-auto justify-center">
                    {/* Navigation Bar */}
                    <div className="bg-red flex items-center justify-between py-8 text-center font-extrabold">
                        <div className="rounded-full border-4 border-gray-300 bg-white">
                            <Link href={route('home')} className="flex py-1">
                                <span className="px-8">JBC</span>
                            </Link>
                        </div>
                        <div className="rounded-full bg-stone-300 p-2 text-white">
                            <Link className="rounded-full px-5 py-1 hover:bg-white hover:text-black" href={route('home')}>
                                Home
                            </Link>
                            <Link className="rounded-full px-5 py-1 hover:bg-white hover:text-black" href="">
                                Media
                            </Link>
                            <Link className="rounded-full px-5 py-1 hover:bg-white hover:text-black" href="">
                                Service
                            </Link>
                            <Link className="rounded-full px-5 py-1 hover:bg-white hover:text-black" href="">
                                About Us
                            </Link>
                            <Link className="rounded-full px-5 py-1 hover:bg-white hover:text-black" href="">
                                Support Us
                            </Link>
                        </div>
                    </div>
                    {/* Content */}
                    <div className="my-10 grid grid-cols-1 gap-8 place-self-center text-center text-white">
                        <div className="place-self-center rounded-full bg-orange-500 px-16 py-1 font-light tracking-widest">
                            SEVENTH DAY ADVENTIST CHURCH
                        </div>
                        <div className="w-3/5 place-self-center text-7xl font-extrabold">Adventist Jakarta Banten Conference</div>
                        <div className="font-medium">Welcome to GMAHK Jakarta Banten Conference Website</div>
                        <div className="place-self-center rounded-full bg-gray-100/50 p-3">
                            <input className="w-96 p-2" type="text" name="search" id="search" placeholder="what you want to find?" />
                            <button className="rounded-full bg-orange-500 px-10 py-2">Search</button>
                        </div>
                    </div>
                    {/* Highlight */}
                    <div className="mx-32 flex items-center rounded-4xl bg-stone-50 p-10">
                        <div className="grid grid-cols-1 gap-2">
                            <div className="text-orange-400">Highlight</div>
                            <div className="text-3xl font-bold uppercase">Coming To JBC</div>
                            <div className="text-sm">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, facere, corrupti voluptate dolores doloribus labore,
                                adipisci sint quibusdam autem exercitationem aut expedita est quo repellendus. Ab perferendis animi quo ipsa!
                            </div>
                        </div>
                        <div className="rounded-full bg-orange-500 px-10 py-2 text-white">
                            <Link href="#" className="">
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
