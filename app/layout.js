import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
// import { GoogleTagManager } from "@next/third-parties/google";
import Sidebar from "./components/Sidebar";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Tanvir Portfolio",
  description: "This is a portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W5GHNE0GRZ"
      ></Script>
      <Script>
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-W5GHNE0GRZ');
      </Script>

      <body
        className={` overflow-x-hidden ${geistSans.variable} ${geistMono.variable} antialiased bg-[#111] text-[rgb(248,248,255)]`}
      >
        {/* <GoogleTagManager gaId="W5GHNE0GRZ" /> */}

        <Sidebar />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
