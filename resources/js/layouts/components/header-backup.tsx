export default function headerBackup() {
    return (
        <div className="overflow-hidden rounded-b-4xl bg-[url('/images/sdac.jpg')] bg-cover text-black md:rounded-b-[3rem]">
            <div className="relative h-screen rounded-b-4xl bg-zinc-900/30 md:rounded-none md:rounded-b-[3rem]">
                <div className="mx-auto justify-center lg:container">
                    {/* Content */}
                    <div className="pointer-events-none grid grid-cols-1 gap-0 place-self-center pt-35 pb-30 text-center text-white">
                        <img
                            src="/icons/adventist-symbol-tm/adventist-symbol-tm--white.svg"
                            alt="Adventist Symbol"
                            className="size-30 items-center place-self-center"
                        />
                        <div className="w-full place-self-center font-['advent-sans'] text-4xl font-extrabold md:w-4/5 md:text-7xl">
                            Seventh-day Adventist Church
                        </div>
                        <div className="my-3 place-self-center rounded-4xl border-2 border-zinc-300/70 px-10 py-1 text-sm font-light tracking-widest uppercase md:my-6 md:px-16 md:text-base">
                            Jakarta Banten Conference
                        </div>
                        {/* <div className="font-medium">Welcome to GMAHK Jakarta Banten Conference Website</div>
                                <div className="place-self-center rounded-full bg-gray-100/50 p-3">
                                    <input className="w-96 p-2" type="text" name="search" id="search" placeholder="what you want to find?" />
                                    <button className="rounded-full bg-orange-500 px-10 py-2">Search</button>
                                </div> */}
                    </div>
                    {/* Highlight */}
                    <div className="mx-0 hidden items-center rounded-4xl bg-zinc-200 p-10 md:mx-32 md:block">
                        <div className="mb-5 font-bold text-orange-400 uppercase">What's On</div>
                        <div className="flex items-center">
                            <div className="w-3/4">
                                <div className="mb-2 text-3xl font-bold uppercase">Coming To JBC</div>
                                <div className="text-sm">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, facere, corrupti voluptate dolores doloribus
                                    labore, adipisci sint quibusdam autem exercitationem aut expedita est quo repellendus. Ab perferendis animi quo
                                    ipsa!
                                </div>
                            </div>
                            <div className="w-1/4 text-right">
                                <Link
                                    href="/"
                                    className="rounded-full bg-orange-500 px-10 py-3 text-white transition duration-300 hover:bg-orange-700"
                                >
                                    Read More
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Highlight Mobile */}
                    <div className="absolute bottom-0 mx-0 block items-center rounded-4xl bg-zinc-200 p-10 md:mx-32 md:hidden">
                        <div className="mb-5 text-sm font-bold text-orange-400 uppercase">What's On</div>
                        <div className="items-start">
                            <div className="w-full">
                                <div className="mb-2 text-xl font-bold uppercase">Coming Up At JBC</div>
                                <div className="mb-5 text-xs">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, facere, corrupti voluptate dolores doloribus
                                    labore, adipisci sint quibusdam autem exercitationem aut expedita est quo repellendus. Ab perferendis animi quo
                                    ipsa!
                                </div>
                                <Link
                                    href="/"
                                    className="rounded-full bg-orange-500 px-5 py-2 text-xs text-white uppercase transition duration-300 hover:bg-orange-700"
                                >
                                    Find Out More
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
