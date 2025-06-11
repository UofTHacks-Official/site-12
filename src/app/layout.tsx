import { Manrope, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import Script from "next/script";
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

export const metadata: Metadata = {
  title: "UofTHacks 12",
  description:
    "Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻",
  openGraph: {
    type: "website",
    url: "https://uofthacks.com",
    title: "UofTHacks 12",
    description:
      "Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻",
    images: [
      {
        url: "https://ibb.co/c36S2kN",
      },
    ],
  },
  twitter: {
    site: "@uofthacks",
    title: "UofTHacks 12",
    description:
      "Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Google Analytics script */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-PWQ4PT57QH"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PWQ4PT57QH');
          `}
        </Script>
      </head>
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
