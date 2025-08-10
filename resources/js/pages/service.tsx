import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import MainLayout from '@/layouts/main-layout';
import Header from '@/layouts/pages/header';
import { Head, Link } from '@inertiajs/react';

export default function Service() {
    return (
        <>
            {/* Head */}
            <Head title="Service" />

            <MainLayout>
                {/* header */}
                <Header title="Service" />

                {/* content */}
                <div className="h-screen w-full">
                    {/* What's On */}
                    <div className="py-20">
                        <Carousel className="">
                            <CarouselContent className="mx-5 ml-0 md:mx-0 md:ml-30">
                                {Array.from({ length: 20 }).map((_, index) => (
                                    <CarouselItem key={index} className="basis-1/2 lg:basis-1/4">
                                        <div className="p-0 md:p-2">
                                            <Card className="border-jblue-400 hover:bg-jblue-300/90 rounded-2xl bg-zinc-100 px-0 py-10 text-zinc-900 transition duration-300 hover:cursor-grab md:rounded-4xl md:px-5 md:py-20">
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
                                                        className="bg-jblue-500/90 rounded-full border p-3 px-5 text-xs font-bold text-zinc-100 uppercase transition duration-300 hover:bg-zinc-100 hover:text-zinc-800 md:p-4 md:px-7 md:text-base"
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
                </div>
            </MainLayout>
        </>
    );
}
