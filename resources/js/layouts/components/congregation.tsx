export default function congregation() {
    return (
        <div className="my-10 items-center p-5 text-black md:p-20">
            <div className="text-center text-5xl font-extrabold tracking-normal text-orange-500 capitalize md:text-7xl">Congregation Gallery</div>
            <div className="p-10">
                <Carousel>
                    <CarouselContent>
                        {Array.from({ length: 10 }).map((_, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <Card className={`aspect-2/3 items-center justify-center bg-[url(https://picsum.photos/400)] bg-cover bg-center`}>
                                        <CardContent>
                                            <span className="text-6xl font-semibold text-orange-400">{index + 1}</span>
                                            {/* <img className="" src={`https://picsum.photos/id/${index + 1}/300`} alt="picsum" /> */}
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
}
