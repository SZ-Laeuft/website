'use client';

import Navbar from "@/app/tsx/navbar";
import StadthalleImage from "./pictures/Stadthalle.png";
import Logo from "./pictures/szl-pfp-transparent_border.png";
import Image from "next/image";
import { motion } from "framer-motion";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

const spanVariants = (direction: number) => ({
    hidden: { opacity: 0, x: direction * 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut", delay: 0.2 } }
});

export default function Home() {
    return (
        <>
            <Navbar />
            <div
                className="relative p-3 bg-cover bg-center bg-fixed h-[600px] w-full flex items-center justify-center"
                style={{ backgroundImage: `url(${StadthalleImage.src})` }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-12 space-y-6 md:space-y-0 md:space-x-6">
                    <motion.h1
                        className="font-black text-white drop-shadow-md text-center md:text-left"
                        style={{ fontSize: "clamp(1rem, 8vw, 8rem)" }}
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.span className="block" variants={spanVariants(-1)} initial="hidden" animate="visible">
                            SZ-
                        </motion.span>
                        <motion.span className="block" variants={spanVariants(1)} initial="hidden" animate="visible">
                            LÄUFT
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
                    >
                        <div className="rounded-full p-3">
                            <Image
                                src={Logo}
                                alt="SZ Läuft Logo"
                                width={400}
                                height={400}
                                className="w-[25vw] h-[25vw] max-w-[500px] min-w-[300px] max-h-[500px] min-h-[300px] drop-shadow-md"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
