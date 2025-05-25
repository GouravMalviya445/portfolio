import type { Metadata } from "next";
import { Inter, Monoton } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Navbar from "@/components/navbar";
import Lamp from "@/components/Lamp";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const monoton = Monoton({
  variable: "--font-monoton",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gourav Mavliya | Portfolio",
  description: "A modern and minimalistic portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  console.log(inter.className)
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} ${monoton.variable} antialiased `}
      >
        {/* name background */}
        <div className="hidden md:block">
          <div
            className='md:text-[150px] leading-0 font-extrabold uppercase text-green-300/[.04] absolute -z-10 top-[20vh] left-0'
          >
            Gourav
          </div>
          <div
            className='md:text-[150px] leading-0 font-extrabold uppercase text-green-300/[.04] absolute -z-10 top-[85vh] right-0'
          >
            Malviya
          </div>
        </div>
      
        
        <Container>
          {/* Lame shadow light */}
          <Lamp/>
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
