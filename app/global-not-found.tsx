// Import global styles and fonts
import "./globals.css";
import { Vazirmatn } from "next/font/google";
import type { Metadata } from "next";

const vazirmatn = Vazirmatn({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="fa" className={vazirmatn.className}>
      <body className="h-screen flex justify-center items-center">
        <div className="max-w-60 text-center">
          <h1 className="font-bold text-5xl mb-4">404</h1>
          <h2 className="text-2xl">صفحه مورد نظر پیدا نشد</h2>
        </div>
      </body>
    </html>
  );
}
