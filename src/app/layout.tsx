import type { Metadata } from "next";
import { roboto } from "@/components/Fonts/fonts";
import "./globals.css";
import Nav from "@/components/Navbar/Navbar";
import ActiveSectionContextProvider from "@/context/active-section";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

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
      <body className={`${roboto.className} antialiased body`}>
        <ActiveSectionContextProvider>
          <Nav />
          <div className="w-10/12  xl:w-8/12 mx-auto mt-40">{children}</div>
          <Footer />
          <Toaster position="top-right" />
        </ActiveSectionContextProvider>{" "}
      </body>
    </html>
  );
}
