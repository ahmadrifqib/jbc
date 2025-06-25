import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { IconLocation, IconMail, IconTelephone } from '@intentui/icons';
import Navigation from './pages/navigation';

interface MainLayoutProps {
    children: React.ReactNode;
    className?: React.ComponentProps<'div'>['className'];
}

export default function MainLayout(prop: MainLayoutProps) {
    const { children, className, ...props } = prop;

    return (
        <>
            <Navigation />

            {/* Content */}
            <div className={cn(`scroll-smooth bg-zinc-50 font-['onest'] text-zinc-100`, className)} {...props}>
                {children}
            </div>

            {/* Footer */}
            {/* fixed inset-x-0 bottom-0 z-0  pt-90 */}
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
        </>
    );
}
