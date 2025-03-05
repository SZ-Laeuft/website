'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="font-sans flex flex-col sm:flex-row sm:justify-between py-4 px-6 bg-white shadow w-full">
            <div className="mb-2 sm:mb-0">
                <Link href="/" className="text-2xl no-underline text-gray-800 hover:text-blue-800 relative group">
                    Home
                </Link>
            </div>
            <div className="flex flex-wrap gap-4">
                <Link
                    href="/Voranmeldung"
                    className={`text-lg no-underline text-gray-800 hover:text-blue-800 relative group ${
                        pathname === '/Voranmeldung' ? 'text-blue-800' : ''
                    }`}
                >
                    Voranmeldung
                    <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded opacity-60 transition-all duration-300 group-hover:w-full "></span>
                </Link>
                <Link
                    href="/Statistik"
                    className={`text-lg no-underline text-gray-800 hover:text-blue-800 relative group ${
                        pathname === '/Statistik' ? 'text-blue-800' : ''
                    }`}
                >
                    Statistik
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded opacity-60 transition-all duration-300 group-hover:w-full "></span>
                </Link>
                <Link
                    href="/Galerie"
                    className={`text-lg no-underline text-gray-800 hover:text-blue-800 relative group ${
                        pathname === '/Galerie' ? 'text-blue-800' : ''
                    }`}
                >
                    Galerie
                    <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded opacity-60 transition-all duration-300 group-hover:w-full "></span>
                </Link>
                <Link
                    href="/Startzeit"
                    className={`text-lg no-underline text-gray-800 hover:text-blue-800 relative group ${
                        pathname === '/Startzeit' ? 'text-blue-800' : ''
                    }`}
                >
                    Startzeit
                    <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded opacity-60 transition-all duration-300 group-hover:w-full "></span>
                </Link>
                <Link
                    href="/Team"
                    className={`text-lg no-underline text-gray-800 hover:text-blue-800 relative group ${
                        pathname === '/Team' ? 'text-blue-800' : ''
                    }`}
                >
                    Team
                    <span
                        className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded opacity-60 transition-all duration-300 group-hover:w-full "></span>
                </Link>
            </div>
        </nav>
    );
}