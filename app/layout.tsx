import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RFC | Rice Field Coffee",
  description: "Ngopi dengan pemandangan Gunung Ciremai dan persawahan. Dibangun oleh 9 sekawan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
