'use client';

import Navbar from "@/app/tsx/navbar";
import StadthalleImage from "./pictures/Stadthalle.png";
import Logo from "./pictures/szl-pfp-transparent_border.png";
import Image from "next/image";
import { motion } from "framer-motion";
import LogoSlider from "@/app/tsx/scroller";
import Footer from "./tsx/footer";
import { useState } from "react";

// Animation Variants
const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

const spanVariants = (direction: number) => ({
    hidden: { opacity: 0, x: direction * 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeInOut", delay: 0.2 } }
});

export default function Home() {
    const [activeTab, setActiveTab] = useState("Team");
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <div
                className="relative p-3 bg-cover bg-center bg-fixed h-[600px] w-full flex items-center justify-center"
                style={{ backgroundImage: `url(${StadthalleImage.src})` }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-7xl px-6 md:px-12 space-y-6 md:space-y-0 md:space-x-6 pt-16">
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

                    <motion.div className="relative" variants={spanVariants(1)} initial="hidden" animate="visible">
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

            {/* Main Content */}
            <div>
                {/* Introduction Section */}
                <motion.header className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                               style={{fontFamily: "Franklin Gothic Heavy"}} variants={textVariants} initial="hidden"
                               animate="visible">
                    Was ist SZ-Läuft?
                </motion.header>

                <motion.div
                    className="flex flex-col md:flex-row justify-between px-6  md:ml-32 text-lg leading-relaxed md:border-l-4 border-black pl-4 border-opacity-20 md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}} variants={textVariants} initial="hidden"
                    animate="visible">
                    <div className="max-w-full break-words text-base md:text-lg">
                        <p>
                            Das SZ-Läuft ist ein Laufevent, das am 25. Juni 2025 stattfindet und dazu dient, Spenden für
                            xxxxxxx zu sammeln.
                        </p>
                        <br/>
                        <p>
                            Dabei können die Schülerinnen und Schüler nicht nur das im Schulfach Informationstechnische
                            Projekte Gelernte anwenden,
                            sondern auch praktische Erfahrungen im Bereich Projektmanagement sammeln. Darüber hinaus
                            werden zahlreiche Soft- und Hardskills
                            wie Kommunikationsfähigkeit, Teamarbeit und technisches Know-how gefördert. Diese
                            Fähigkeiten sind in der heutigen Berufswelt nicht
                            mehr wegzudenken und bereiten die Schüler optimal auf ihre Zukunft vor.
                        </p>
                    </div>
                </motion.div>

                {/* Donation Section */}
                <motion.header className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                               style={{fontFamily: "Franklin Gothic Heavy"}} variants={textVariants} initial="hidden"
                               animate="visible">
                    Spendenempfänger
                </motion.header>

                <motion.div
                    className="flex flex-col md:flex-row justify-between px-6  md:ml-32 text-lg leading-relaxed md:border-l-4 border-black pl-4 border-opacity-20 md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}} variants={textVariants} initial="hidden"
                    animate="visible">
                    <div className="max-w-full break-words text-base md:text-lg">
                        <p>
                            Der diesjährige Spendenempfänger ist xxxxx. xxxxx ist eine engagierte gemeinnützige
                            Organisation,
                            die sich leidenschaftlich für xxxxx einsetzt.
                        </p>
                    </div>
                </motion.div>

                {/* Sponsors Section */}
                <motion.header className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                               style={{fontFamily: "Franklin Gothic Heavy"}} variants={textVariants} initial="hidden"
                               animate="visible">
                    Sponsoren
                </motion.header>
                <motion.div className="ml-4 mr-4 md:ml-32 md:mr-32 mt-5" variants={textVariants} initial="hidden"
                            animate="visible" style={{padding: '20px 0'}}>
                    <LogoSlider/>
                </motion.div>

                {/* Schedule  Section */}
                <motion.header className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                               style={{fontFamily: "Franklin Gothic Heavy"}} variants={textVariants} initial="hidden"
                               animate="visible">
                    Ablauf
                </motion.header>

                <motion.div
                    className="flex flex-col md:flex-row justify-between px-6  md:ml-32 text-lg leading-relaxed md:border-l-4 border-black pl-4 border-opacity-20 md:pr-32"
                    style={{fontFamily: "Franklin Gothic Medium"}} variants={textVariants} initial="hidden"
                    animate="visible">
                    <div className="max-w-full break-words text-base md:text-lg">
                        <p>
                            Die Anmeldung für die Frühstarter beginnt um xxxxx, sodass alle angemeldeten Personen um
                            xxxxx
                            loslaufen können. In den Startzeiten ist ersichtlich, welche Teilnehmer wann zur Anmeldung
                            kommen und wann sie starten.
                            Nach jeder Runde muss der Scanner am Startbereich mit dem erhaltenen NFC-Armband passiert
                            werden, um die gelaufenen Runden zu erfassen.
                            Bei Durst kann man sich während des Laufens an den Wasserstationen einen Becher Wasser
                            nehmen. Essen gibt es beim Catering, dessen Erlös
                            ebenfalls gespendet wird. Neben dem Lauf wird auch ein Alternativprogramm in der Stadthalle
                            angeboten.
                        </p>
                        <br/>
                        <p>
                            Frühstarter müssen mindestens 20 Runden laufen, normale Läufer müssen mindestens 10 Runden
                            zurücklegen!
                        </p>
                    </div>
                </motion.div>

                {/* Reward System Section */}
                <motion.header className="text-4xl mt-10 md:pl-32 text-center md:text-left"
                               style={{fontFamily: "Franklin Gothic Heavy"}} variants={textVariants} initial="hidden"
                               animate="visible">
                    Belohnungssystem
                </motion.header>

                <motion.div className="md:ml-32 text-lg leading-relaxed md:pr-32" variants={textVariants}
                            initial="hidden" animate="visible">
                    <div className="md:border-l-4 border-black pl-4 border-opacity-20">
                        <p>
                            Auch heuer beim diesjährigen Laufevent, wird es das <strong>Belohnungssystem</strong> geben! Erhalte für
                            deine gelaufenen Runden fantastische Preise, die mit jedem Meilenstein besser werden und
                            hol’ dir anschließend deine wohlverdienten Belohnungen direkt beim Team ab!
                        </p>
                    </div>

                    {/* Rewards section without border */}
                    <div className="relative mt-6">
                        {/* Circles and Rewards */}
                        <div className="flex justify-between items-center relative z-10 pt-6">
                            {/* 15 Runden */}
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-4xl">🏃‍♂️</span>
                                </div>
                                <p className="mt-2"><strong>15 Runden:</strong> Traubenzucker</p>
                            </div>

                            {/* 25 Runden */}
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-4xl">🥤</span>
                                </div>
                                <p className="mt-2"><strong>25 Runden:</strong> Getränk (Mind)</p>
                            </div>

                            {/* 30 Runden */}
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-4xl">🍎</span>
                                </div>
                                <p className="mt-2"><strong>30 Runden:</strong> Obst nach Wahl</p>
                            </div>

                            {/* 40 Runden */}
                            <div className="text-center">
                                <div
                                    className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
                                    <span className="text-4xl">🍽️</span>
                                </div>
                                <p className="mt-2"><strong>40 Runden:</strong> Essen nach Wahl</p>
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 text-center">
                        Nimmst du die Herausforderung an?
                    </p>
                </motion.div>



                {/* Organisation Section */}
                <div className="mt-10 md:pl-32 px-6">
                    <motion.header className="text-4xl text-center md:text-left font-bold" variants={textVariants}
                                   initial="hidden" animate="visible">
                        Organisation
                    </motion.header>

                    {/* Tab Navigation */}
                    <motion.div className="flex border-b mt-4 w-full" variants={textVariants} initial="hidden"
                                animate="visible">
                        {['Team', 'Strecke'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-2 text-lg font-semibold focus:outline-none ${
                                    activeTab === tab ? 'border-b-4 border-[#00aaca]' : 'text-gray-500'
                                }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </motion.div>

                    {/* Tab Content */}
                    <div className="mt-4">
                        {/* Team Section */}
                        {activeTab === "Team" && (
                            <motion.div variants={textVariants} initial="hidden" animate="visible">
                                <h2 className="text-2xl font-bold mt-4">Team</h2>
                                <p className="0 p-4 rounded-md mt-2">
                                    Das Team besteht aus 21 Schülern der diesjährigen 3CHIT und 3AHIT. Das Event wird
                                    von
                                    Sebastian Zöchbauer beaufsichtigt und Fabian Jungwirth und Maximilian Dorninger
                                    als Projektleiter organisiert. Die Schüler wurden in vier Subteams aufgeteilt, jedes
                                    mit einem eigenen Teamleiter.
                                </p>
                            </motion.div>
                        )}

                        {/* Strecke Section */}
                        {activeTab === "Strecke" && (
                            <motion.div variants={textVariants} initial="hidden" animate="visible">
                                <h2 className="text-2xl font-bold mt-4">Strecke</h2>
                                <p className="p-4 rounded-md mt-2">
                                    Die Laufstrecke führt rund um die Stadthalle. Nach jeder Runde muss der Scanner am
                                    Startbereich mit dem NFC-Armband passiert werden, um die gelaufenen Runden zu
                                    erfassen.
                                    Neben dem Lauf gibt es auch ein Alternativprogramm in der Stadthalle.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>


                {/* Footer */}
                <Footer/>
            </div>
        </>
    );
}
