import { useEffect, useState } from 'react';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [isOpen]);

    return (
        <div className="md:hidden">
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-4 right-4 z-50 rounded-lg bg-white p-2 shadow-lg"
                aria-label="Toggle menu"
            >
                <div className="relative h-6 w-6">
                    <span
                        className={`absolute block h-0.5 w-full bg-gray-700 transition-transform duration-300 ${isOpen ? 'translate-y-1.5 rotate-45' : '-translate-y-1'}`}
                    ></span>
                    <span
                        className={`absolute block h-0.5 w-full bg-gray-700 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'translate-y-1 opacity-100'}`}
                    ></span>
                    <span
                        className={`absolute block h-0.5 w-full bg-gray-700 transition-transform duration-300 ${isOpen ? 'translate-y-1.5 -rotate-45' : 'translate-y-3'}`}
                    ></span>
                </div>
            </button>

            {/* Overlay */}
            <div
                onClick={() => setIsOpen(false)}
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
            ></div>

            {/* Mobile Menu */}
            <nav
                className={`fixed top-0 right-0 z-50 h-full w-64 transform bg-white shadow-xl transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="h-full overflow-y-auto p-6">
                    <div className="space-y-4">
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                        >
                            Services
                        </a>
                        <a
                            href="#"
                            onClick={() => setIsOpen(false)}
                            className="block rounded-lg px-4 py-2 text-gray-700 transition-colors hover:bg-gray-100"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default MobileMenu;
