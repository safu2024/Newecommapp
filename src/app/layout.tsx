import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import { CartProvider } from "./components/context/CartContext";


import MyNavbar from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce app",
  description: "Created by Safoora",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
         className= 
         {`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <CartProvider>
        <MyNavbar/>
        {children}
      <Footer/>
      </CartProvider>
      </body>
    </html>
  );
}
