'use client'
import Navbar from "@/app/tsx/navbar";
import StadthalleImage from './pictures/Stadthalle.png';
import Logo from './pictures/szl-pfp-transparent_border.png'
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
    return (
        <>
            <Navbar />
            <div
                className="p-3 bg-cover bg-center pt-24 w-screen h-auto"
                style={{
                    backgroundImage: `url(${StadthalleImage.src})`,
                    height: '600px',
                }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center h-full">
                    <motion.h1
                        className="text-9xl font-black text-white pl-8 md:pl-40 drop-shadow-md"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                    >
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                        >
                            SZ-
                        </motion.span>
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                        >
                            LÄUFT
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        className="relative mt-4 md:mt-0 md:pr-40"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.6 }}
                    >
                        <div className="rounded-full p-3">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={450}
                                height={450}
                                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[400px] xl:h-[400px] drop-shadow-md"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
}
