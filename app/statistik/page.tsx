'use client';

import Navbar from "@/app/tsx/navbar";
import { motion } from "framer-motion";
import Footer from "../tsx/footer";

const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
};

const runnersMostLaps = [
    { name: "Runner 1", laps: 50 },
    { name: "Runner 2", laps: 48 },
    { name: "Runner 3", laps: 45 },
    { name: "Runner 4", laps: 44 },
    { name: "Runner 5", laps: 42 },
    { name: "Runner 6", laps: 41 },
    { name: "Runner 7", laps: 40 },
    { name: "Runner 8", laps: 39 },
    { name: "Runner 9", laps: 38 },
    { name: "Runner 10", laps: 37 },
];

const runnersFastestLap = [
    { name: "Runner A", time: "1:10.5" },
    { name: "Runner B", time: "1:11.0" },
    { name: "Runner C", time: "1:11.2" },
    { name: "Runner D", time: "1:11.8" },
    { name: "Runner E", time: "1:12.0" },
    { name: "Runner F", time: "1:12.3" },
    { name: "Runner G", time: "1:12.5" },
    { name: "Runner H", time: "1:12.7" },
    { name: "Runner I", time: "1:13.0" },
    { name: "Runner J", time: "1:13.5" },
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
                        <h2 className="text-xl font-bold mb-2">Top 10 Läufer mit den meisten Runden </h2>
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
                        <h2 className="text-xl font-bold mb-2">Top 10 Läufer mit den schnellsten Runden</h2>
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
            </div>
            <Footer />
        </div>
    );
}