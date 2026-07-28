import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import { ReactNode } from "react";
import { AuthProvider } from "./auth/AuthProvider";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Main layout",
  description: "This page render other layoutes",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html
      lang="fa"
      className={cn("h-full", "antialiased", vazirmatn.className)}
      data-scroll-behavior="smooth"
      dir="rtl"
    >
      <body
        className="min-h-full flex flex-col bg-[#FDFBFB]"
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
};

export default RootLayout;
