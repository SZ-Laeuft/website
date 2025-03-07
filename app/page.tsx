'use client';

import Navbar from "@/app/tsx/navbar";
import StadthalleImage from "./pictures/Stadthalle.png";
import Logo from "./pictures/szl-pfp-transparent_border.png";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoSlider from "@/app/tsx/scroller";

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
                        <motion.span className="block" variants={spanVariants(-1)} initial="hidden" animate="visible">
                            LÄUFT
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        className="relative"
                        variants={spanVariants(1)} initial="hidden" animate="visible"
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
            <div>
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{fontFamily: "Franklin Gothic Heavy"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Was ist SZ-Läuft?
                </motion.header>

                <motion.div
                    className="flex flex-col md:flex-row justify-between px-6  mt-6 md:ml-32 text-lg leading-relaxed md:border-l-4 border-black pl-4 border-opacity-20"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-full break-words text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                    </div>
                </motion.div>
                <LogoSlider/>
            </div>

        </>
    );
}
