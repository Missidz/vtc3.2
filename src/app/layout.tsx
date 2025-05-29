import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/next";
import { defaultMetadata } from './metadata';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "VTC Tours 37 - Service de Transport Premium en Touraine",
  description: "VTC Tours 37, votre service de transport premium en Touraine. Transferts aéroport, gares, événements. Chauffeur privé disponible 24/7 pour tous vos déplacements.",
  keywords: "VTC Tours 37, VTC Touraine, transport premium Tours, chauffeur privé 37, transfert aéroport Tours, VTC professionnel 37",
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased ${inter.className} bg-black min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
