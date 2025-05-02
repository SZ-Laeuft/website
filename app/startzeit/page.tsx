'use client';

import Navbar from "@/app/tsx/navbar";
import { motion } from "framer-motion";
import Footer from "../tsx/footer";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

const startzeiten = [
    ["1 AHIT", "8:00"], ["1 AK", "8:05"], ["1 AS", "8:10"], ["1 BHIT", "8:15"], ["1 BK", "8:20"],
    ["2 AHIT", "8:25"], ["2 AK", "8:30"], ["2 AS", "8:35"], ["2 BHIT", "8:40"], ["2 BK", "8:45"],
    ["3 AHIT", "8:50"], ["3 AK", "8:55"], ["3 AS", "9:00"], ["3 BHIT", "9:05"], ["3 BK", "9:10"], ["3 CHIT", "9:15"],
    ["4 AHITN", "9:20"], ["4 AHITM", "9:25"], ["4 AK", "9:30"], ["4 BK", "9:35"],
    ["Lehrer", "9:40"]
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
