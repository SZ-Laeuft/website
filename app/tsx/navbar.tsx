'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();

    return (
        <motion.nav
            className="fixed flex z-50 items-center justify-between py-6 px-10 bg-white shadow w-full"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
        >
            <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-black tracking-wide" style={{ fontFamily: 'Franklin Gothic Heavy' }}>
                    Home
                </span>
            </Link>
            <div className="flex gap-8">
                {["VORANMELDUNG", "STATISTIK", "GALERIE", "STARTZEIT", "TEAM"].map((item) => (
                    <Link
                        key={item}
                        href={`/${item.toLowerCase()}`}
                        className={`text-lg font-medium no-underline text-black hover:text-[#00aaca] relative group tracking-wide ${
                            pathname === `/${item.toLowerCase()}` ? 'text-[#00aaca]' : ''
                        }`}
                        style={{ fontFamily: 'Franklin Gothic Medium'}}

                    >
                            {item}
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-orange-500 rounded opacity-85 transition-all duration-300 group-hover:w-full"></span>
                    </Link>

                ))}
            </div>
        </motion.nav>
    );
}
