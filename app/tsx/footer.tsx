'use client';

import Link from 'next/link';
import Image from 'next/image';
import Logo from "@/app/pictures/szl-pfp-transparent_border.png";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-10 mt-16 ">
            <div className="container max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                    <Image
                        src={Logo}
                        alt="SZ Läuft Logo"
                        width={80}
                        height={80}
                        className="drop-shadow-md"
                        priority
                    />
                    <h2 className="text-xl font-bold mt-3 tracking-wide transition" style={{ fontFamily: 'Bebas Neue' }}>
                        SZ-LÄUFT
                    </h2>
                    <p className="text-sm text-gray-400 mt-2 text-center md:text-left">Ein Laufevent für den Guten Zweck.</p>
                </div>
                <div className="flex space-x-6">
                    <Link
                        href="https://www.instagram.com/szlaeuft/"
                        target="_blank"
                        aria-label="Visit SZ-Läuft on Instagram"
                        className="text-gray-300 hover:text-[#00aaca] transition"
                    >
                        <FaInstagram size={24} />
                    </Link>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-4">
                © {new Date().getFullYear()} SZ-LÄUFT | Alle Rechte vorbehalten. |
                <Link href="/privacy-policy" className="hover:text-[#00aaca] transition">Datenschutz</Link> |
                <Link href="/terms-of-service" className="hover:text-[#00aaca] transition">Nutzungsbedingungen</Link> |
                <Link href="/terms-of-service" className="hover:text-[#00aaca] transition">Impressum</Link>
            </div>
        </footer>
    );
}