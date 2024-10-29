import type { ReactNode } from "react";
import Head from "next/head";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UofTHacks 12",
  description: "Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={manrope.className}>{children}</body>
    </>
  );
}
