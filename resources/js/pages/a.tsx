export default function a() {
    return (
        <div>
            <div className="">
                <div className="relative overflow-hidden rounded-b-4xl md:rounded-b-[3rem]">
                    {/* Video Element */}
                    <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                        <source src="/videos/sdac.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    {/* Optional Overlay */}
                    <div className="absolute inset-0 bg-zinc-900/40"></div>

                    <div className="relative h-screen rounded-b-4xl md:rounded-none md:rounded-b-[3rem]">
                        <div className="mx-auto justify-center lg:container">
                            {/* Content */}
                            <div className="pointer-events-none grid grid-cols-1 gap-0 place-self-center pt-35 pb-30 text-center text-zinc-100">
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
                            </div>
                            {/* Highlight */}
                            <div className="mx-0 hidden items-center rounded-4xl bg-zinc-200 p-10 md:mx-32 md:block">
                                <div className="text-jblue-500 mb-5 font-bold uppercase">What's On</div>
                                <div className="flex items-center text-zinc-900">
                                    <div className="w-3/4">
                                        <div className="mb-2 text-3xl font-bold uppercase">Coming To JBC</div>
                                        <div className="text-sm">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, facere, corrupti voluptate dolores
                                            doloribus labore, adipisci sint quibusdam autem exercitationem aut expedita est quo repellendus. Ab
                                            perferendis animi quo ipsa!
                                        </div>
                                    </div>
                                    <div className="w-1/4 text-right">
                                        <Link
                                            href="/"
                                            className="bg-jblue-500 hover:bg-jblue-700 rounded-full px-10 py-3 text-zinc-100 transition duration-300"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {/* Highlight Mobile */}
                            <div className="absolute bottom-0 mx-0 block items-center rounded-4xl bg-zinc-200 p-10 md:mx-32 md:hidden">
                                <div className="text-jblue-500 mb-5 text-sm font-bold uppercase">What's On</div>
                                <div className="items-start">
                                    <div className="w-full text-zinc-900">
                                        <div className="mb-2 text-xl font-bold uppercase">Coming Up At JBC</div>
                                        <div className="mb-5 text-xs">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, facere, corrupti voluptate dolores
                                            doloribus labore, adipisci sint quibusdam autem exercitationem aut expedita est quo repellendus. Ab
                                            perferendis animi quo ipsa!
                                        </div>
                                        <Link
                                            href="/"
                                            className="bg-jblue-500 hover:bg-jblue-700 rounded-full px-5 py-2 text-xs text-zinc-100 uppercase transition duration-300"
                                        >
                                            Find Out More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Vision and Mission */}
            <VisionMission />

            {/* Ministries */}
            <div className="my-10 items-center p-5 text-black md:p-20">
                <div className="text-jblue-500 text-center text-6xl font-extrabold tracking-normal capitalize md:text-8xl">Ministries</div>
                <div className="mt-5 grid grid-cols-3 gap-1">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="m-2 aspect-16/10 content-center rounded-4xl bg-[url(https://picsum.photos/400)] bg-cover bg-center p-1 text-center shadow-[-10px_10px_4px_-5px] shadow-zinc-900/50"
                        >
                            <span className="text-6xl font-semibold text-zinc-100">{index + 1}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* What's On */}
            <div className="py-20">
                <div className="text-jblue-500 px-10 pt-5 pb-10 text-4xl font-extrabold capitalize md:px-30 md:text-8xl">what's on at JBC?</div>
                <Carousel className="pb-5 md:pb-10">
                    <CarouselContent className="mx-5 ml-0 md:mx-0 md:ml-30">
                        {Array.from({ length: 20 }).map((_, index) => (
                            <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                                <div className="p-0 md:p-2">
                                    <Card className="border-jblue-400 hover:bg-jblue-300/90 rounded-2xl bg-zinc-50 px-0 py-10 text-zinc-900 transition duration-300 hover:cursor-grab md:rounded-4xl md:px-5 md:py-20">
                                        <CardHeader>
                                            <CardTitle className="text-xl capitalize md:text-3xl">Lorem ips {index + 1}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="py-0 md:py-2">
                                            <p className="text-sm md:text-lg">
                                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, nesciunt. Totam eos id illo
                                                officia? ...
                                            </p>
                                        </CardContent>
                                        <CardFooter>
                                            <Link
                                                className="bg-jblue-500/90 rounded-full border p-3 px-5 text-xs font-bold text-zinc-100 uppercase transition duration-300 hover:bg-zinc-100 hover:text-zinc-900 md:p-4 md:px-7 md:text-base"
                                                href="/"
                                            >
                                                Read More
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
            <footer className="bg-jblue-500 pt-10 font-semibold text-zinc-100">
                <div className="container mx-auto flex flex-col p-10 md:flex-row md:p-0">
                    <div className="mb-10 w-full md:w-1/4">
                        <img
                            src="/icons/adventist-symbol-tm/adventist-symbol-tm--white.svg"
                            alt="Adventist Symbol"
                            className="inset-y-0 right-0 -mt-5 size-30 items-center"
                        />
                        <div className="text-lg capitalize">Seventh-day Adventist Church</div>
                        <div className="text-sm font-medium uppercase">Jakarta Banten Conference</div>
                    </div>
                    <div className="mb-10 w-full md:w-1/4">
                        <div className="mb-2 text-3xl font-bold md:mb-5 md:text-4xl">Contact Us</div>
                        <table className="w-80">
                            <tbody className="[&>tr>td>a]:text-md [&>tr>td]:p-1 [&>tr>td>a]:decoration-zinc-300 [&>tr>td>a]:decoration-2 [&>tr>td>a]:hover:text-zinc-300 [&>tr>td>a]:hover:underline [&>tr>td>a]:hover:underline-offset-4 [&>tr>td>a]:hover:transition [&>tr>td>a]:hover:duration-300 [&>tr>td>svg]:size-8">
                                <tr>
                                    <td>
                                        <IconLocation />
                                    </td>
                                    <td>
                                        <a href="https://maps.app.goo.gl/2yHuFDQsqXyk7q9v6" target="_blank">
                                            GRAHA OIKOS, BSD Junction B 38-42, Lt 4, Serpong Sub-District, South Tangerang City, Banten 15310
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <IconTelephone />
                                    </td>
                                    <td>
                                        <a href="tel:+628123456789" target="_blank">
                                            628123456789
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <IconMail />
                                    </td>
                                    <td>
                                        <a href="mailto:mail@example.com" target="_blank">
                                            mail@example.com
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="mb-10 w-full md:w-1/4 md:px-10">
                        <div className="mb-2 text-3xl font-bold md:mb-5 md:text-4xl">Links</div>
                        <ul className="list-none text-base md:text-lg [&>li]:my-2 [&>li]:decoration-zinc-300 [&>li]:decoration-2 [&>li]:transition [&>li]:duration-300 [&>li]:hover:list-disc [&>li]:hover:text-zinc-300 [&>li]:hover:underline [&>li]:hover:underline-offset-4 md:[&>li]:my-3">
                            <li>
                                <Link href={route('home')}>Home</Link>
                            </li>
                            <li>
                                <Link href={route('about')}>About Us</Link>
                            </li>
                            <li>
                                <Link href={route('team')}>Our Team</Link>
                            </li>
                            <li>
                                <Link href={route('service')}>Service</Link>
                            </li>
                            <li>
                                <Link href={route('event')}>Event</Link>
                            </li>
                            <li>
                                <Link href={route('support')}>Support Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-10 w-full md:w-1/4 md:px-10">
                        <div className="mb-2 text-3xl font-bold md:mb-5 md:text-4xl">Social Media</div>
                        <ul className="list-none text-base md:text-lg [&>li]:my-2 [&>li]:decoration-zinc-300 [&>li]:decoration-2 [&>li]:transition [&>li]:duration-300 [&>li]:hover:list-disc [&>li]:hover:text-zinc-300 [&>li]:hover:underline [&>li]:hover:underline-offset-4 md:[&>li]:my-3">
                            <li>
                                <a href="https://www.instagram.com" target="_blank">
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com" target="_blank">
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.x.com" target="_blank">
                                    X
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com" target="_blank">
                                    Youtube
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className="mt-5 border border-zinc-100" />
                <div className="py-5 text-center text-sm font-medium md:text-base">
                    &copy; 2025 Adventist Jakarta Banten Conference - All Right Reserved.
                </div>
            </footer>
        </div>
    );
}

export default function VisionMission() {
    return (
        <div className="h-svh">
            <div className="flex h-full w-auto items-center justify-center p-5">
                <div className="border-jblue-600 relative size-155 rounded-full border-2 text-white">
                    <div className="bg-jblue-500/90 absolute top-5 left-0 mr-15 rounded-4xl px-15 py-7 text-left md:-left-80">
                        <div className="py-3 text-6xl font-bold md:text-8xl">VISION</div>
                        <div className="text-base font-normal md:text-xl lg:text-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maxime aperiam at, quam est magni voluptates officia
                            ipsam expedita fugiat
                        </div>
                    </div>
                    <div className="bg-jblue-500/90 absolute right-0 bottom-5 ml-15 rounded-4xl px-15 py-7 text-right md:-right-80">
                        <div className="py-3 text-5xl font-bold md:text-8xl">MISSION</div>
                        <div className="text-base font-normal md:text-xl lg:text-2xl">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora maxime aperiam at, quam est magni voluptates officia
                            ipsam expedita fugiat
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
