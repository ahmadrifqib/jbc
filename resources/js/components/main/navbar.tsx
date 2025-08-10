// src/components/NavBar.tsx
import { Link } from '@inertiajs/react';
import { IconLocation, IconMail, IconTelephone } from '@intentui/icons';
import { gsap } from 'gsap';
import { useEffect, useRef, useState } from 'react';

const menuItems = [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/team' },
    { label: 'Service', href: '/service' },
    { label: 'Location', href: '/location' },
    { label: 'Support', href: '/support' },
];
//: React.FC<{ className?: string | undefined }>
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const overlayRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    // Initialize GSAP timeline
    useEffect(() => {
        if (!overlayRef.current) return;
        tl.current = gsap
            .timeline({ paused: true })
            // animate clip‐path from a tiny circle to full screen
            .to(overlayRef.current, {
                duration: 0.5,
                ease: 'power2.out',
                clipPath: 'circle(150% at 100% 0%)',
            })
            // fade in menu items
            .from(
                overlayRef.current.querySelectorAll('a, button, .contact-info'),
                {
                    y: 20,
                    opacity: 0,
                    stagger: 0.05,
                    duration: 0.5,
                },
                '-=0.3',
            );
    }, []);

    // Play / reverse timeline & lock body scroll
    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        if (open) tl.current?.play();
        else tl.current?.reverse();
    }, [open]);

    return (
        <>
            {/* Top Navbar */}
            <header className="fixed top-0 right-0 left-0 z-50 w-full">
                <div className="mx-auto flex items-center justify-between p-5 lg:p-10">
                    {/* Logo */}
                    <Link
                        href={route('home')}
                        className="flex place-self-center rounded-full bg-zinc-50 p-3 transition duration-300 hover:bg-zinc-100/90"
                    >
                        <img
                            src="/icons/adventist-symbol-tm/adventist-symbol-tm--bluejay.svg"
                            alt="Logo Adventist"
                            className="relative -top-1.5 size-12 lg:size-15"
                        />
                    </Link>

                    {/* Hamburger */}
                    <button
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        className="flex items-center rounded-full bg-zinc-50 px-5 py-2 text-sm font-semibold uppercase transition duration-300 hover:bg-zinc-100/90 lg:px-7 lg:py-4 lg:text-base"
                        onClick={() => setOpen((v) => !v)}
                    >
                        Menu
                        <div className="group relative ml-5 flex size-7 flex-col items-center justify-between space-y-1.5 py-1 focus:outline-none">
                            <span
                                className={`block h-1 w-7 origin-center transform transition duration-600 ease-in-out ${open ? 'translate-y-[0.52rem] rotate-45 bg-zinc-900' : 'bg-zinc-900'}`}
                            />
                            <span
                                className={`block h-1 w-7 origin-center transform transition duration-600 ease-in-out ${open ? 'bg-zinc-900 opacity-0' : 'bg-zinc-900'}`}
                            />
                            <span
                                className={`block h-1 w-7 origin-center transform transition duration-600 ease-in-out ${open ? '-translate-y-[0.52rem] -rotate-45 bg-zinc-900' : 'bg-zinc-900'}`}
                            />
                        </div>
                    </button>
                </div>
            </header>

            {/* Full‐screen Popup Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 z-40 overflow-y-auto bg-stone-400 text-zinc-900"
                style={{ clipPath: 'circle(0% at 100% 0%)' }}
            >
                <div className="mt-20 flex h-full flex-col md:flex-row lg:mt-0">
                    {/* Left: Navigation links */}
                    <nav className="flex flex-1 flex-col justify-center space-y-2 border-r-0 border-zinc-900 px-8 text-2xl font-semibold md:px-20 md:text-4xl lg:space-y-6 lg:border-r-2 lg:text-6xl">
                        {menuItems.map((item) => (
                            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="hover:underline">
                                {item.label}
                            </a>
                        ))}
                    </nav>

                    {/* Right: Register / Login / Contact */}
                    <div className="my-30 flex flex-1 flex-col items-start justify-between space-y-4 px-8 md:px-20">
                        <div className="contact-info mt-8">
                            <div className="mb-2 text-2xl font-bold md:mb-5 md:text-4xl">Contact Us</div>
                            <table className="w-auto lg:w-[450px]">
                                <tbody className="[&>tr>td]:p-1 lg:[&>tr>td]:p-2 [&>tr>td>a]:text-sm [&>tr>td>a]:decoration-zinc-900 [&>tr>td>a]:decoration-2 [&>tr>td>a]:hover:text-zinc-900 [&>tr>td>a]:hover:underline [&>tr>td>a]:hover:underline-offset-4 [&>tr>td>a]:hover:transition [&>tr>td>a]:hover:duration-300 lg:[&>tr>td>a]:text-lg [&>tr>td>svg]:size-5 lg:[&>tr>td>svg]:size-10">
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
                        <div className="hidden">
                            <button onClick={() => setOpen(false)} className="w-full rounded-md bg-blue-600 px-6 py-3 text-white md:w-auto">
                                Register
                            </button>
                            <button
                                onClick={() => setOpen(false)}
                                className="w-full rounded-md border border-blue-600 px-6 py-3 text-blue-600 md:w-auto"
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
