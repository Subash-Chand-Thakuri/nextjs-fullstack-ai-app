import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProviders from "@/context/AuthProviders";
import { Toaster } from "@/components/ui/toaster"
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Full Stack Next App',
  description: 'Based on full-fledge fullstack app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProviders>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
      </body>
      </AuthProviders>
    </html>
  );
}
