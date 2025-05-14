import { MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutWrapper from './LayoutWrapper';

import './css/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'SZ-Läuft',
    description: 'Ein Laufevent für den Guten Zweck',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
        <head>
            <meta name="darkreader-lock" />
        </head>
        <body className={inter.className}>
        <MantineProvider>
            <LayoutWrapper>{children}</LayoutWrapper>
        </MantineProvider>
        </body>
        </html>
    );
}
