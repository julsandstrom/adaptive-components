import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "./features/shared/ui/Nav";
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
  title: "Adaptive UI Components",
  description: "Accessible React components built with CSS Container Queries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="grid min-h-dvh grid-rows-[auto_1fr] p-4 font-sans xl:py-8">
        <Nav />

        <main className="grid place-items-center py-12">
          <div className="flex w-full max-w-5xl flex-col items-center gap-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
