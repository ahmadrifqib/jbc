import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import MainLayout from '@/layouts/main-layout';
import { Marquee } from '@/layouts/marquee-text';
import VisionMission from '@/layouts/pages/home/vision-mission';
import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <>
            {/* Head */}
            <Head title="Home" />

            <MainLayout>
                {/* Main */}
                {/* relative z-5 mb-[700px] */}
                <div className="">
                    {/* Header */}
                    <div className="bg-orange-500">
                        <div className="relative overflow-hidden rounded-b-4xl md:rounded-b-[3rem]">
                            {/* Video Element */}
                            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                                <source src="/videos/sdac.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Optional Overlay */}
                            <div className="absolute inset-0 bg-zinc-800/30"></div>

                            <div className="relative h-screen rounded-b-4xl md:rounded-none md:rounded-b-[3rem]">
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
                                    </div>
                                    {/* Highlight */}
                                    <div className="mx-0 hidden items-center rounded-4xl bg-zinc-200 p-10 md:mx-32 md:block">
                                        <div className="mb-5 font-bold text-orange-400 uppercase">What's On</div>
                                        <div className="flex items-center text-zinc-900">
                                            <div className="w-3/4">
                                                <div className="mb-2 text-3xl font-bold uppercase">Coming To JBC</div>
                                                <div className="text-sm">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, facere, corrupti voluptate dolores
                                                    doloribus labore, adipisci sint quibusdam autem exercitationem aut expedita est quo repellendus.
                                                    Ab perferendis animi quo ipsa!
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
                                            <div className="w-full text-zinc-900">
                                                <div className="mb-2 text-xl font-bold uppercase">Coming Up At JBC</div>
                                                <div className="mb-5 text-xs">
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, facere, corrupti voluptate dolores
                                                    doloribus labore, adipisci sint quibusdam autem exercitationem aut expedita est quo repellendus.
                                                    Ab perferendis animi quo ipsa!
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
                    </div>

                    {/* Vision and Mission */}
                    <VisionMission />

                    {/* Ministries */}
                    <div className="my-10 items-center p-5 text-black md:p-20">
                        <div className="text-center text-6xl font-extrabold tracking-normal text-orange-500 capitalize md:text-8xl">Ministries</div>
                        <div className="mt-5 grid grid-cols-3 gap-1">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div key={index} className="m-2">
                                    <div className="aspect-16/10 content-center rounded-4xl bg-[url(https://picsum.photos/400)] bg-cover bg-center p-1 text-center">
                                        <span className="text-6xl font-semibold text-zinc-100">{index + 1}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* What's On */}
                    <div className="rounded-4xl bg-orange-500 py-20 md:rounded-[4rem]">
                        <div className="px-10 pt-5 pb-10 text-4xl font-extrabold text-white capitalize md:px-30 md:text-8xl">what's on at JBC?</div>
                        <Carousel className="pb-5 md:pb-10">
                            <CarouselContent className="mx-5 ml-0 md:mx-0 md:ml-30">
                                {Array.from({ length: 20 }).map((_, index) => (
                                    <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                                        <div className="p-0 md:p-2">
                                            <Card className="rounded-2xl bg-zinc-100 px-0 py-10 text-gray-900 transition duration-300 hover:cursor-grab hover:bg-orange-300/90 md:rounded-4xl md:px-5 md:py-20">
                                                <CardHeader>
                                                    <CardTitle className="text-xl capitalize md:text-3xl">Lorem ips {index + 1}</CardTitle>
                                                </CardHeader>
                                                <CardContent className="py-0 md:py-2">
                                                    <p className="text-sm md:text-lg">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos, nesciunt. Totam eos id
                                                        illo officia? ...
                                                    </p>
                                                </CardContent>
                                                <CardFooter>
                                                    <Link
                                                        className="rounded-full border bg-orange-500/90 p-3 px-5 text-xs font-bold text-zinc-100 uppercase transition duration-300 hover:bg-zinc-100 hover:text-zinc-800 md:p-4 md:px-7 md:text-base"
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

                    {/* Running Text */}
                    <div className="py-30">
                        <Marquee
                            className="font-['anton-sc'] text-5xl font-black tracking-wide text-zinc-900 uppercase md:text-9xl"
                            text="People Empowering - Jakarta Banten Conference"
                            speed={30}
                            direction="left"
                        />
                    </div>

                    {/* Building Image */}
                    <div className="p-10">
                        <div className="rounded-4xl bg-orange-500 px-0 md:px-20">
                            <div className="relative -top-10 md:-top-20">
                                <div className="mx-5 flex flex-col items-end md:mx-10 md:flex-row">
                                    <div className="w-full md:w-4/7">
                                        <img src="/images/bsdjunction.jpg" alt="BSD Junction" className="w-full rounded-4xl" />
                                    </div>
                                    <div className="hidden w-full pl-15 text-6xl md:block md:w-3/7">
                                        <div className="rounded-4xl bg-zinc-200 px-8 py-20 leading-tight font-bold text-orange-500">
                                            Jakarta Banten Conference
                                        </div>
                                        <div className="py-10 text-center font-bold text-zinc-100">Adventist</div>
                                    </div>
                                </div>
                                <div className="mx-5 mt-10 flex flex-col items-center rounded-4xl bg-zinc-200 p-10 md:mx-10 md:flex-row md:p-20">
                                    <div className="text-md w-full font-medium text-zinc-900 md:w-3/4 md:text-xl">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod facilis facere nostrum eius, ratione cum quas
                                        soluta sit perferendis nemo rerum, neque magni eum inventore quia expedita. Quisquam, error similique?
                                    </div>
                                    <div className="mt-10 w-full md:mt-0 md:w-1/4 md:text-right">
                                        <Link
                                            href="/"
                                            className="rounded-full bg-orange-500 px-8 py-4 text-sm font-bold text-zinc-100 uppercase transition duration-300 hover:bg-orange-700 md:px-10 md:text-lg"
                                        >
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Segment */}
                    <div className="my-5 flex flex-col items-center px-10 md:m-30 md:flex-row md:p-0">
                        <div className="w-full md:w-2/5">
                            <div className="mb-5 h-[450px] rounded-4xl bg-orange-500"></div>
                            <div className="h-[150px] rounded-4xl bg-orange-500"></div>
                        </div>
                        <div className="mt-5 flex w-full flex-col p-5 text-zinc-900 md:mt-0 md:w-3/5 md:p-20">
                            <div className="text-5xl font-medium md:text-7xl">Segment</div>
                            <div className="my-10 text-sm md:text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae officiis repellat sequi sint at nobis expedita et
                                tempore dolor nisi consequuntur quasi saepe debitis modi quas asperiores, repudiandae aliquid nihil. Lorem ipsum dolor
                                sit, amet consectetur adipisicing elit. Illo qui quam cumque, libero, exercitationem error iure, natus architecto ad
                                officia est quasi ut. Architecto illum aperiam id minus unde vero! Lorem ipsum dolor, sit amet consectetur adipisicing
                                elit. Ad vel amet quisquam aspernatur molestias hic sed dolore rerum soluta repellendus quibusdam ut, veniam odit?
                                Dolorum cupiditate eaque voluptatibus ex nemo.
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}
