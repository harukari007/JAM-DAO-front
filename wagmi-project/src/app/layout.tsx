import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";

import { Providers } from "./providers";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Wagmi",
  description: "Generated by create-wagmi",
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className={`${inter.className} grid grid-cols-6`}>
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-5">
          <Providers>
            <Navbar />
            {props.children}
            <Toaster />
          </Providers>
        </div>
      </body>
    </html>
  );
}
