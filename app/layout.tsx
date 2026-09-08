
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXIOM — Lebanese University L1",
  description:
    "AXIOM is an educational platform for first-year students at the Lebanese University, offering courses in Mathematics, Statistics and Computer Science.",
  keywords: [
    "AXIOM",
    "AXIOM Lebanese University",
    "Lebanese University",
    "L1",
    "Mathematics",
    "Statistics",
    "Computer Science",
    "M1100",
    "M1101",
    "Algebra",
    "Analysis",
  ],
  verification: {
  google: "J-s2rkLvgT1nlY3MM4zJXQeW85ZggA6Y2-OcDy4EidA",
},
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

