import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UoftHacks 12",
  description: "Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <link rel="icon" href="/favicon.ico" sizes="any"/>
          <body className={inter.className}>{children}</body>
      </html>
  );
}
