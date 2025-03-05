'use client'

export default function Home() {
  return (
      <div>
        <nav
            className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
          <div className="mb-2 sm:mb-0">
            <a href="#" className="text-2xl no-underline hover:text-blue-800 hover:bg-blue-200 rounded">Home</a>
          </div>
          <div>
            <a href="#" className="text-lg no-underline  hover:text-blue-800 hover:bg-blue-200 rounded ml-10">One</a>
            <a href="#" className="text-lg no-underline  hover:text-blue-800 hover:bg-blue-200 rounded ml-10">Two</a>
            <a href="#" className="text-lg no-underline  hover:text-blue-800 hover:bg-blue-200 rounded ml-10">Three</a>
          </div>
        </nav>

        <div className="container max-w-screen-2xl m-auto mt-3 p-3">
          <h1 className="text-9xl font-black text-left">SZ-LÄUFTT 2025</h1>
        </div>
      </div>
  );
}
