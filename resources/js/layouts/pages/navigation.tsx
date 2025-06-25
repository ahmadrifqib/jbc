import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="fixed top-0 right-0 left-0 z-10 container mx-auto">
            {/* Navigation Bar */}
            <div className="bg-red mx-10 flex items-center justify-between py-8 text-center font-extrabold lg:mx-0">
                <div className="rounded-full border-4 border-zinc-100 bg-white transition duration-300 hover:bg-zinc-100/90">
                    <Link href={route('home')} className="flex items-center px-5 py-2 text-center">
                        <img src="/icons/adventist-symbol-tm/adventist-symbol-tm--bluejay.svg" alt="Logo Adventist" className="-m-2 size-10" />
                        <span className="text-jblue-800 ml-3 hidden font-light uppercase md:block">Jakarta Banten Conference</span>
                        <span className="text-jblue-800 ml-2 block font-light uppercase md:hidden">JBC</span>
                    </Link>
                </div>
                <div className="hidden rounded-full bg-stone-300/50 p-2 py-3 text-white lg:block">
                    <Link className="rounded-full px-5 py-2 transition duration-300 hover:bg-white hover:text-black" href={route('about')}>
                        About Us
                    </Link>
                    <Link className="rounded-full px-5 py-2 transition duration-300 hover:bg-white hover:text-black" href={route('team')}>
                        Our Team
                    </Link>
                    <Link className="rounded-full px-5 py-2 transition duration-300 hover:bg-white hover:text-black" href={route('service')}>
                        Service
                    </Link>
                    <Link className="rounded-full px-5 py-2 transition duration-300 hover:bg-white hover:text-black" href={route('event')}>
                        Event
                    </Link>
                    <Link className="rounded-full px-5 py-2 transition duration-300 hover:bg-white hover:text-black" href={route('support')}>
                        Support Us
                    </Link>
                </div>
                <div className="block lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className={`group relative flex h-10 w-10 flex-col items-center justify-between py-2`}>
                        <span
                            className={`block h-1 w-10 origin-center transform bg-white transition duration-300 ease-in-out ${isOpen ? 'translate-y-2.5 rotate-45' : ''}`}
                        />
                        <span
                            className={`block h-1 w-10 origin-center transform bg-white transition duration-300 ease-in-out ${isOpen ? '-translate-y-2.5 -rotate-45' : ''}`}
                        />
                    </button>
                </div>
            </div>
            {/* Dropdown */}
            <NavigationBarDropdown isOpen={isOpen} />
        </div>
    );
}

export function NavigationBarDropdown(props: { isOpen: boolean }) {
    const { isOpen } = props;
    return (
        <div className={`${isOpen ? 'block' : 'hidden'} scroll-none relative top-0 flex h-screen w-auto flex-col gap-5 bg-stone-100 p-7`}>
            <Link className="rounded-2xl px-4 py-3 font-medium text-stone-600 hover:bg-white hover:font-bold hover:text-black" href={route('about')}>
                About Us
            </Link>
            <Link className="rounded-2xl px-4 py-3 font-medium text-stone-600 hover:bg-white hover:font-bold hover:text-black" href={route('team')}>
                Our Team
            </Link>
            <Link
                className="rounded-2xl px-4 py-3 font-medium text-stone-600 hover:bg-white hover:font-bold hover:text-black"
                href={route('service')}
            >
                Service
            </Link>
            <Link className="rounded-2xl px-4 py-3 font-medium text-stone-600 hover:bg-white hover:font-bold hover:text-black" href={route('event')}>
                Event
            </Link>
            <Link
                className="rounded-2xl px-4 py-3 font-medium text-stone-600 hover:bg-white hover:font-bold hover:text-black"
                href={route('support')}
            >
                Support Us
            </Link>
        </div>
    );
}
