import type { ReactNode } from "react";
import Head from "next/head";
import {Manrope, Space_Grotesk} from "next/font/google";
import "./globals.css";



const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    weight: ["400", "500", "700"],
});

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
    weight: ["400", "700"],
});

interface RootLayoutProps {
    children: ReactNode;
}

const metadata = {
    title: "UofTHacks 12",
    description:
        "Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻",
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <html lang="en">
                <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
                    {children}
                </body>
            </html>
        </>
    );
}