'use client';

import "./globals.css";

import { Inter as FontSans } from "next/font/google"
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body  className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}> <SessionProvider>{children}</SessionProvider></body>
    </html>
  );
}
