import { Manrope, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
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
    title: "UoftHacks 12",
    description:
      "Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻",
  },
  twitter: {
    site: "@uofthacks",
    title: "UoftHacks 12",
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
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
