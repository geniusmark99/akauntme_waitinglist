'use client';
import { Inter } from "next/font/google";
import { GradientProvider } from "@/components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "Akauntme: Waiting List",
//   description: "Your smart accounting padi...",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} overflow-hidden`}>
        <GradientProvider>
          {children}
        </GradientProvider>
      </body>
    </html>
  );
}
