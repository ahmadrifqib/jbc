interface HeaderProps {
    title: string;
}

export default function Header(props: HeaderProps) {
    const { title } = props;
    return (
        <div className="overflow-hidden rounded-b-4xl bg-[url('/images/sdac.jpg')] bg-cover bg-center md:rounded-b-[3rem]">
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full rounded-b-4xl object-cover md:rounded-b-[3rem]">
                <source src="/videos/sdac.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative h-screen content-end bg-gradient-to-b from-orange-50/10 to-orange-400/40 px-0 md:rounded-b-[3rem] md:px-30">
                <div className="py-10 text-left text-zinc-50">
                    <div className="text-shadow-lg/30 text-shadow-black text-center font-['anton-sc'] text-6xl font-black tracking-tight uppercase sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem]">
                        {title}
                    </div>
                </div>
            </div>
        </div>
    );
}
