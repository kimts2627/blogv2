import Header from "./_components/Header";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WIP",
  description: "WIP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <div className="flex flex-col w-full bg-black text-primary-gray">
          <Header />
          {children}
        </div>
        <link href="http://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css" rel="stylesheet" type="text/css" />
      </body>
    </html>
  );
}
