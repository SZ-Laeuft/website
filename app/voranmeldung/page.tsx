'use client';

import Navbar from "@/app/tsx/navbar";
import { motion } from "framer-motion";
import Footer from "../tsx/footer";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

export default function Voranmeldung() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow pt-32">
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{fontFamily: "Franklin Gothic Heavy"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Voranmeldung
                </motion.header>

                <motion.div
                    className="flex flex-col md:flex-row justify-between px-6 mt-6 md:ml-32 text-lg leading-relaxed md:border-l-4 border-black pl-4 border-opacity-20 md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-full break-words text-base md:text-lg">
                        Trage dich jetzt in das Google Form an um als offizieler Frühstarter loszulaufen bitte beachte <strong>dient nur für Schüler des SZ-Ybbs</strong>.
                    </div>
                </motion.div>
                <div className="w-full flex justify-center p-4 pt-16">
                    <iframe
                        src="https://forms.gle/HnNSABuuzcukQojr6 "
                        className="w-full md:w-3/4 lg:w-1/2 h-screen border rounded-lg"
                    >
                    </iframe>
                </div>

            </div>
            <Footer/>
        </div>
    );
}
