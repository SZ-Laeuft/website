'use client';

import Navbar from "@/app/tsx/navbar";
import { motion } from "framer-motion";
import Footer from "../tsx/footer";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

const startzeiten = [
    ["4 AHITN", "8:15"],
    ["4 AHITM", "8:20"],
    ["4 AK", "8:25"],
    ["4 BK", "8:30"],
    ["3 CHIT", "8:35"],
    ["3 BK", "8:40"],
    ["3 BHIT", "8:45"],
    ["3 AS", "8:50"],
    ["3 AK", "8:55"],
    ["3 AHIT", "9:00"],
    ["2 BK", "9:05"],
    ["2 BHIT", "9:10"],
    ["2 AS", "9:15"],
    ["2 AK", "9:20"],
    ["2 AHIT", "9:25"],
    ["1 BK", "9:30"],
    ["1 BHIT", "9:35"],
    ["1 AS", "9:40"],
    ["1 AK", "9:45"],
    ["1 AHIT", "9:50"],
    ["Lehrer", "9:55"]

];


export default function ZeitplanTable() {
    return (
        <motion.div className="flex flex-col min-h-screen" variants={textVariants} initial="hidden"
                    animate="visible">
            <Navbar />
            <main className="flex-grow flex items-center justify-center px-4 pt-28 pb-16">
                <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">
                    <motion.header
                        className="text-4xl mb-6 text-center"
                        style={{ fontFamily: "Franklin Gothic Heavy" }}
                    >
                        Startzeiten nach Klasse
                    </motion.header>
                    <div>
                        <table className="w-full border-collapse">
                            <thead>
                            <tr className="bg-black text-white">
                                <th className="py-2 px-4 text-left">Klasse</th>
                                <th className="py-2 px-4 text-left">Startzeit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {startzeiten.map(([klasse, zeit], idx) => (
                                <tr
                                    key={klasse}
                                    className={idx % 2 === 1 ? "bg-gray-100" : "bg-white"}
                                >
                                    <td className="py-2 px-4 border-t border-gray-200">{klasse}</td>
                                    <td className="py-2 px-4 border-t border-gray-200">{zeit}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
            <Footer />
        </motion.div>
    );
}
