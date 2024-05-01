import "./globals.css";
import type { Metadata } from "next";

import Header from "./_components/Header";
import Head from "next/head";

export const metadata: Metadata = {
  title: "WIP",
  description: "WIP",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </Head>
      <body>
        <div className="px-4 h-screen flex flex-col items-center">
          <header className="max-w-default w-full h-16">
            <Header />
          </header>
          <main className="max-w-default w-full grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
