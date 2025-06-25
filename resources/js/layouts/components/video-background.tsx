export default function VideoBackground() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Video Element */}
            <video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover">
                <source src="/videos/sdac.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-white">
                <h1 className="text-center text-4xl font-bold md:text-6xl">Welcome to Our Site</h1>
                <p className="mt-4 max-w-2xl text-center text-xl">This video background creates an immersive experience</p>
            </div>
        </div>
    );
}
