import ArticleBox from "./_components/ArticleBox";
import Header from "./_components/Header";
import LNB from "./_components/LNB";
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
          <main className="flex min-h-screen flex-col items-center justify-between">
            <div className="flex gap-4 w-full h-full p-6 pt-0">
              <div>
                <LNB />
              </div>
              <ArticleBox>{children}</ArticleBox>
            </div>
          </main>
        </div>
        <link href="http://cdn.jsdelivr.net/gh/joungkyun/font-d2coding/d2coding.css" rel="stylesheet" type="text/css" />
      </body>
    </html>
  );
}
