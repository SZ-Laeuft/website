'use client';

import { useEffect, useRef } from 'react';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
    const navbarRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const updateNavbarHeight = () => {
            if (navbarRef.current) {
                const height = navbarRef.current.offsetHeight;
                document.documentElement.style.setProperty('--navbar-height', `${height}px`);
            }
        };

        updateNavbarHeight();
        window.addEventListener('resize', updateNavbarHeight);
        return () => window.removeEventListener('resize', updateNavbarHeight);
    }, []);

    return (
        <>
            <header ref={navbarRef} className="navbar">
                <div className="p-4 text-xl font-bold"></div>
            </header>
            <main className="main-content">{children}</main>
        </>
    );
}
