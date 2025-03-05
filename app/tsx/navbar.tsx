'use client'

export default function Navbar() {
    return (
        <div>
            <nav
                className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
                <div className="mb-2 sm:mb-0">
                    <a href="#" className="text-2xl no-underline hover:text-blue-800 hover:bg-blue-200 rounded">Home</a>
                </div>
                <div>
                    <a href="#" className="text-lg no-underline  hover:text-blue-800 hover:bg-blue-200 rounded ml-10">Voranmeldung</a>
                    <a href="#" className="text-lg no-underline  hover:text-blue-800 hover:bg-blue-200 rounded ml-10">Statistik</a>
                    <a href="#" className="text-lg no-underline  hover:text-blue-800 hover:bg-blue-200 rounded ml-10">Galarie</a>
                    <a href="#" className="text-lg no-underline  hover:text-blue-800 hover:bg-blue-200 rounded ml-10">Startzeit</a>
                    <a href="#" className="text-lg no-underline  hover:text-blue-800 hover:bg-blue-200 rounded ml-10">Team</a>
                </div>
            </nav>
        </div>
    );
}


