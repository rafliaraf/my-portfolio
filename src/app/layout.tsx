import type { Metadata } from "next";
import { Syne, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Rafli — UI/UX Designer & Front-End Developer",
  description:
    "Muhammad Rafli Aolia Ansori — Information Systems Student, UI/UX Designer & Front-End Developer. Crafting Digital Public Services & Modern Web Interfaces.",
  keywords: ["UI/UX Designer", "Front-End Developer", "Laravel", "Tailwind CSS", "Portfolio", "Muhammad Rafli"],
  authors: [{ name: "Muhammad Rafli Aolia Ansori" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${syne.variable} ${plusJakarta.variable} bg-dark-primary text-neutral-200 antialiased overflow-hidden`}
        style={{ fontFamily: "var(--font-plus-jakarta), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
