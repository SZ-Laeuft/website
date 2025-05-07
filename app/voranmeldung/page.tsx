'use client'

import React, { useState } from "react";
import Navbar from "@/app/tsx/navbar";
import Footer from "@/app/tsx/footer";
import { motion } from "framer-motion";

export default function VoranmeldungPage() {
    const [formData, setFormData] = useState({
        vorname: "",
        nachname: "",
        schultyp: "",
        klasse: "",
        teilnahmeInfo: "",
    });

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeInOut" } }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Daten an Backend schicken oder verarbeiten
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
                <form
                    onSubmit={handleSubmit}
                    className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
                >
                    <motion.header
                        className="text-4xl text-center"
                        style={{ fontFamily: "Franklin Gothic Heavy" }}
                    >
                        Voranmeldung
                    </motion.header>

                    <div className="grid grid-cols-2 gap-4">
                        <input
                            name="vorname"
                            placeholder="Vorname"
                            value={formData.vorname}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                        />
                        <input
                            name="nachname"
                            placeholder="Nachname"
                            value={formData.nachname}
                            onChange={handleChange}
                            required
                            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                        />
                    </div>

                    <select
                        name="schultyp"
                        value={formData.schultyp}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full bg-white"
                    >
                        <option value="" disabled>Schultyp wählen</option>
                        <option value="HAK">HAK</option>
                        <option value="HTL">HTL</option>
                        <option value="HAS">HAS</option>
                    </select>

                    <input
                        name="klasse"
                        placeholder="Klasse"
                        value={formData.klasse}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-lg px-4 py-2 w-full"
                    />

                    <button
                        type="submit"
                        className="bg-black hover:bg-gray-800 text-white font-semibold rounded-lg px-4 py-2 w-full"
                    >
                        Absenden
                    </button>
                </form>
            </motion.div>
            <Footer/>
        </>
    );
}
