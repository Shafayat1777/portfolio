import type { Metadata } from "next";
import { pressStart2P, pixelifySans } from "@/components/Fonts/fonts";
import "./globals.css";
import Nav from "@/components/Navbar/Navbar";

export const metadata: Metadata = {
  title: "Shafayat | Portfolio",
  description:
    "Shafayat is a passionate and dedicated individual with a love for coding, problem-solving, and crafting innovative machine learning models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${pixelifySans.className} antialiased body h-[1900px]`}>
        <Nav />
        <div className="w-10/12  xl:w-8/12 mx-auto mt-40">{children}</div>
      </body>
    </html>
  );
}
