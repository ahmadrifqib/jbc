// src/components/Navbar.jsx
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';

export default function Navbar() {
    const menuRef = useRef<HTMLDivElement>(null!);
    const tl = useRef(gsap.timeline({ paused: true }));

    useEffect(() => {
        // build paused timeline
        tl.current = gsap
            .timeline({ paused: true })
            // slide the menu down
            .to(menuRef.current, {
                y: 0,
                duration: 0.6,
                ease: 'power3.out',
            })
            // animate left links
            .from(
                menuRef.current.querySelectorAll('.menu-link'),
                {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.4,
                    ease: 'power3.out',
                },
                '<0.2',
            )
            // animate right CTAs + contact
            .from(
                menuRef.current.querySelectorAll('.menu-cta'),
                {
                    opacity: 0,
                    y: 20,
                    stagger: 0.1,
                    duration: 0.4,
                },
                '<0.2',
            );

        // optional: close on ESC
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && tl.current.reverse();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    const openMenu = () => tl.current.play();
    const closeMenu = () => tl.current.reverse();

    return (
        <>
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
                <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
                    <div className="text-2xl font-bold">YourLogo</div>
                    <button onClick={openMenu} aria-label="Open menu" className="text-3xl focus:outline-none">
                        ☰
                    </button>
                </div>
            </nav>

            {/* FULLSCREEN MENU */}
            <div ref={menuRef} className="fixed inset-0 z-40 -translate-y-full transform bg-white">
                <div className="relative mx-auto grid h-full max-w-6xl grid-cols-1 p-8 md:grid-cols-2">
                    {/* LEFT: Links */}
                    <div className="flex flex-col justify-center space-y-6 text-2xl">
                        {['About Us', 'Our Team', 'Existing Services', 'Events', 'Support Pages'].map((text) => (
                            <a
                                key={text}
                                href={`#${text.toLowerCase().replace(/\s+/g, '-')}`}
                                className="menu-link transition-colors hover:text-gray-600"
                            >
                                {text}
                            </a>
                        ))}
                    </div>

                    {/* RIGHT: CTAs + Contact */}
                    <div className="mt-8 flex flex-col items-start justify-center space-y-4 md:mt-0 md:items-end">
                        <button className="menu-cta rounded border px-5 py-2 transition hover:bg-gray-100">Register</button>
                        <button className="menu-cta rounded border px-5 py-2 transition hover:bg-gray-100">Login</button>
                        <div className="menu-cta mt-8 text-sm text-gray-700">
                            <p>
                                Email:{' '}
                                <a href="mailto:info@yourdomain.com" className="underline">
                                    info@yourdomain.com
                                </a>
                            </p>
                            <p>
                                Phone:{' '}
                                <a href="tel:+1234567890" className="underline">
                                    +1 234-567-890
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* CLOSE BUTTON */}
                    <button onClick={closeMenu} aria-label="Close menu" className="absolute top-6 right-6 text-3xl focus:outline-none">
                        ×
                    </button>
                </div>
            </div>
        </>
    );
}
