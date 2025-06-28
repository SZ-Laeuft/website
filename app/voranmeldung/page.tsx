'use client'

import React from "react";
import Navbar from "@/app/tsx/navbar";
import Footer from "@/app/tsx/footer";
import { motion } from "framer-motion";

export default function VoranmeldungPage() {

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
    };





    return (
        <>
            <Navbar />
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
    );
}
