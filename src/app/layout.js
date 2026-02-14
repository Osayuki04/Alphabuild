import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GridPattern from './../components/UI/grid.js';
import Navbar from '../components/Home/navbar';
import Blur from '../components/UI/blur';


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Alphabuild",
  description: "Your number 1 building solution partner.",
  icons:{
    icon: "/icons/logo.svg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  min-h-screen`}
      >
        <Navbar />
        {/* <GridPattern /> */}
        {children}
        {/* <Blur /> */}
      </body>
    </html>
  );
}
