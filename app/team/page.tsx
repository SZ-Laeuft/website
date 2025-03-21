'use client';

import Navbar from "@/app/tsx/navbar";
import { motion } from "framer-motion";
import Footer from "../tsx/footer";
import Image from "next/image";
import Projectlead from "../pictures/lead.jpg"
import Teamleads from "../pictures/teamleads.jpg"
import TeamCatering from "../pictures/catering.jpg"
import TeamPromotion from "../pictures/promotion.jpg"
import TeamRunning from "../pictures/running.jpg"
import TeamSoftware from "../pictures/software.jpg"

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

export default function Team() {
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
                    Team
                </motion.header>

                <motion.div
                    className="flex flex-col md:flex-row justify-between px-6 mt-6 md:ml-32 text-lg leading-relaxed md:border-l-4 border-black pl-4 border-opacity-20 md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="max-w-full break-words text-base md:text-lg">
                        Das Hauptteam SZ-Läuft besteht aus vier Untergruppen, die jeweils einen Teilbereich übernehmen.
                        Team Software übernimmt alle Softwareaufgaben (APIs, programmieren der NFC-Bänder, Website,
                        ...), Team Running ist zuständig für die Route, Team Promotion übernimmt den Marketing-Sektor,
                        und die Teamleitung ist das allgemeine Organisatorische Organ des des ganzen Projekts.
                        Die jeweiligen Teamleader sind innerhalb der Gruppe nochmal für Ordnung und klare Kommunikation
                        zwischen den Gruppen zuständig.
                        Das Projekt stellt sich zusammen aus mehreren engagierten Schülern verteilt über den dritten
                        Jahrgang der IT-HTL.
                    </div>
                </motion.div>
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{fontFamily: "Franklin Gothic Heavy"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Projektleitung
                </motion.header>
                <motion.div
                    className="flex flex-col md:flex-row justify-between mt-6 md:ml-32 text-lg leading-relaxed  md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={Projectlead} alt="Projektleitung"/>
                </motion.div>
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{fontFamily: "Franklin Gothic Heavy"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Teamleitung
                </motion.header>
                <motion.div
                    className="flex flex-col md:flex-row justify-between mt-6 md:ml-32 text-lg leading-relaxed  md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={Teamleads} alt="Teamleitung"/>
                </motion.div>
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{fontFamily: "Franklin Gothic Heavy"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Team Software
                </motion.header>
                <motion.div
                    className="flex flex-col md:flex-row justify-between mt-6 md:ml-32 text-lg leading-relaxed  md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={TeamSoftware} alt="TeamSoftware"/>
                </motion.div>
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{fontFamily: "Franklin Gothic Heavy"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Team Catering
                </motion.header>
                <motion.div
                    className="flex flex-col md:flex-row justify-between mt-6 md:ml-32 text-lg leading-relaxed  md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={TeamCatering} alt="TeamCatering"/>
                </motion.div>
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{fontFamily: "Franklin Gothic Heavy"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Team Promotion
                </motion.header>
                <motion.div
                    className="flex flex-col md:flex-row justify-between mt-6 md:ml-32 text-lg leading-relaxed  md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={TeamPromotion} alt="TeamPromotion"/>
                </motion.div>
                <motion.header
                    className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                    style={{fontFamily: "Franklin Gothic Heavy"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Team Running
                </motion.header>
                <motion.div
                    className="flex flex-col md:flex-row justify-between  mt-6 md:ml-32 text-lg leading-relaxed  md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Image src={TeamRunning} alt="TeamRunning"/>
                </motion.div>

            </div>
            <Footer/>
        </div>
    );
}
