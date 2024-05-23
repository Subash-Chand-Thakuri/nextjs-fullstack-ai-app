import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/ui/ui/Navbar";


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
    
      <body className={inter.className}>
        <Navbar />
        {children}
       
      </body>
      
    </html>
  );
}
