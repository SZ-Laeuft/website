'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from "next/image";
import Logo from "@/public/pictures/logo_szl_notext.png";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <motion.nav
            className="navbar flex items-center justify-between py-6 px-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >

            <Link href="/" className="flex items-center">
                <span >
                     <Image
                         src={Logo}
                         alt="SZ Läuft Logo"
                         width={400}
                         height={400}
                         className="w-[25vw] h-[25vw] max-w-[65px] min-w-[65px] max-h-[65px] min-h-[65px] drop-shadow-md"
                         priority
                     />
                </span>
                <span className="text-2xl font-bold text-black tracking-wide" style={{ fontFamily: 'Franklin Gothic Medium' }}>
                      SZ-LÄUFT
                </span>
            </Link>


            <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black mb-1"></div>
                <div className="w-6 h-0.5 bg-black"></div>
            </div>


            <div className="hidden md:flex gap-8">
                {["VORANMELDUNG", "GALERIE", "STATISTIK", "TEAM"].map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className={`text-lg font-medium no-underline text-black hover:text-[#00aaca] relative group tracking-wider ${
                            pathname === `/${item.toLowerCase()}` ? 'text-[#00aaca]' : ''
                        }`}
                        style={{ fontFamily: 'Franklin Gothic Medium' }}
                    >
                        {item}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-orange-500 rounded opacity-85 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div>

            {isOpen && (
                <motion.div
                    className="fixed top-0 left-0 w-full h-full bg-white z-50 flex flex-col items-center justify-center gap-6"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >

                    <div className="absolute top-6 right-6 cursor-pointer" onClick={toggleMenu}>
                        <div className="w-6 h-0.5 bg-black rotate-45"></div>
                        <div className="w-6 h-0.5 bg-black -rotate-45 -translate-y-0.5"></div>
                    </div>

                    {["VORANMELDUNG", "GALERIE", "STATISTIK", "TEAM"].map((item) => (
                        <Link
                            key={item}
                            href={`/${item.toLowerCase()}`}
                            className={`text-2xl font-medium no-underline text-black hover:text-[#00aaca] relative group ${
                                pathname === `/${item.toLowerCase()}` ? 'text-[#00aaca]' : ''
                            }`}
                            style={{ fontFamily: 'Franklin Gothic Medium'}}
                            onClick={toggleMenu}
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-orange-500 rounded opacity-85 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </motion.div>
            )}
        </motion.nav>
    );
}