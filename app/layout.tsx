import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import Menu from "@/app/_components/Menu";
// import HeaderTitle from "@/app/_components/HeaderTitle";
import Footer from "@/app/_components/Footer";
import Headermain from "@/app/_components/Headermain";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aleksandra Dudnik Portfolio",
  description: "Web developer portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <HeaderTitle />
        <Menu /> */}
        <Headermain />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
