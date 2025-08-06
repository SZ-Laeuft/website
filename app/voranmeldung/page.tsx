'use client';

<<<<<<< Updated upstream
import React from "react";
=======
>>>>>>> Stashed changes
import Navbar from "@/app/tsx/navbar";
import { motion } from "framer-motion";
import Footer from "../tsx/footer";

<<<<<<< Updated upstream
export default function VoranmeldungPage() {

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
    };




=======
const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};
>>>>>>> Stashed changes

export default function voranmeldung() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
<<<<<<< Updated upstream
            <motion.div
                className="min-h-screen  flex items-center justify-center p-4"
                style={{ fontFamily: "Arial" }}
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
             Die Voranmeldung ist leider geschlossen. Wir freuen uns auf nächstes Jahr!
            </motion.div>
            <Footer/>
        </>
=======
            <div className="flex-grow pt-32">
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{ fontFamily: "Franklin Gothic Heavy" }}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Voranmeldung
                </motion.header>

                <motion.div
                    className="flex flex-col md:flex-row justify-between px-6 mt-6 md:ml-32 text-lg leading-relaxed md:border-l-4 border-black pl-4 border-opacity-20 md:pr-32"
                    style={{ fontFamily: "Arial" }}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-full break-words text-base md:text-lg">
                        Leider ist die Voranmeldung für dieses Jahr bereits geschlossen. Wir freuen uns aber auf nächstes Jahr!
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
>>>>>>> Stashed changes
    );
}
