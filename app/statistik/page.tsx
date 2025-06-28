'use client';

import Navbar from "@/app/tsx/navbar";
import { motion } from "framer-motion";
import Footer from "../tsx/footer";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

const runnersMostLaps = [
    { name: "Maximilian Walter", laps: 37 },
    { name: "Elias Koeberl", laps: 37 },
    { name: "Georg Lebhard", laps: 37 },
    { name: "Lukrecija Ceciotkina", laps: 36 },
    { name: "Elias Kornfeld", laps: 33 },
    { name: "Bernhard Proksch", laps: 33 },
    { name: "Oliver Umgeher", laps: 33 },
    { name: "David Hochauer", laps: 30 },
    { name: "Lena Haubenberger", laps: 30 },
    { name: "Jana Lebhard", laps: 30 },
];

const runnersFastestLap = [
    { name: "Tobias Mika", time: "00:03:02" },
    { name: "Fabian Pospichal", time: "00:03:03" },
    { name: "Tobias Waldbauer", time: "00:03:06" },
    { name: "Jayson Covaci", time: "00:03:09" },
    { name: "Mahdi Naiem", time: "00:03:12" },
    { name: "Mike Ulbin", time: "00:03:13" },
    { name: "Adnan Hadzialic", time: "00:03:13" },
    { name: "Matteo Pieber", time: "00:03:15" },
    { name: "Jakob Wieser", time: "00:03:16" },
    { name: "Daniel Ehweiner", time: "00:03:17" },
];

const classes = [
    { name: "2bhit", laps: 357 },
    { name: "2ahit", laps: 212 },
    { name: "4bk", laps: 203 },
    { name: "4ahitm", laps: 190 },
    { name: "1ak", laps: 179 },
    { name: "2bk", laps: 164 },
    { name: "1ahit", laps: 163 },
    { name: "1bk", laps: 155 },
    { name: "3bk", laps: 153 },
    { name: "prof", laps: 144 },
    { name: "4ak", laps: 140 },
    { name: "4ahitn", laps: 129 },
    { name: "2ak", laps: 126 },
    { name: "1bhit", laps: 125 },
    { name: "3bhit", laps: 114 },
    { name: "3ak", laps: 98 },
    { name: "1as", laps: 69 },
    { name: "3ahit", laps: 67 },
    { name: "2as", laps: 49 },
    { name: "3chit", laps: 37 },
];

export default function Statistik() {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow pt-32 px-6 md:px-32">
                <motion.header
                    className="text-4xl mt-10 text-center md:text-left"
                    style={{ fontFamily: "Franklin Gothic Heavy" }}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    Statistik
                </motion.header>
                <motion.div
                    className="flex flex-col md:flex-row justify-between mt-6 space-y-6 md:space-y-0 md:space-x-6"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="w-full md:w-1/2 border border-black p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Bestenliste - Runden</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Läufer</th>
                                <th className="border border-gray-300 px-4 py-2">Runden</th>
                            </tr>
                            </thead>
                            <tbody>
                            {runnersMostLaps.map((runner, index) => (
                                <tr key={index} className="odd:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{runner.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{runner.laps}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="w-full md:w-1/2 border border-black p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Bestenliste - Rundenzeit</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Läufer</th>
                                <th className="border border-gray-300 px-4 py-2">Zeit</th>
                            </tr>
                            </thead>
                            <tbody>
                            {runnersFastestLap.map((runner, index) => (
                                <tr key={index} className="odd:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{runner.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{runner.time}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                </motion.div>
                <motion.div
                    className="mt-10 flex justify-center p-4"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <div className="border border-black p-4 rounded-lg shadow-md w-full max-w-xl">
                        <h2 className="text-xl font-bold mb-2">Bestenliste - Klassen</h2>
                        <table className="w-full border-collapse border border-gray-300">
                            <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 px-4 py-2">Klasse</th>
                                <th className="border border-gray-300 px-4 py-2">Runden</th>
                            </tr>
                            </thead>
                            <tbody>
                            {classes.map((runner, index) => (
                                <tr key={index} className="odd:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{runner.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{runner.laps}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
}