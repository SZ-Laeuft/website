'use client'
import Navbar from "@/app/tsx/navbar";
import StadthalleImage from './pictures/Stadthalle.png';
import Logo from './pictures/Sz-Läuft-Concept_2.svg'
import Image from "next/image";

export default function Home() {
    return (
        <>
            <Navbar />
            <div
                className="container max-w-screen-2xl m-auto p-3 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${StadthalleImage.src})`,
                    height: '600px',
                }}
            >
                <div className="flex flex-col md:flex-row justify-between items-center h-full">
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black text-white pl-8 md:pl-40">
                        <span className="inline-block">SZ-</span>
                        <span className="inline-block">LÄUFT</span>
                    </h1>
                    <div className="relative mt-4 md:mt-0 md:pr-35">
                        <div className="bg-white rounded-full p-5">
                            <Image
                                src={Logo}
                                alt="Logo"
                                width={450}
                                height={450}
                                className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}