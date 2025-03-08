import { Inter } from "next/font/google";
import "./globals.css";
import { HeroUIProvider } from "@heroui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Template Next.js | Devscale ID",
  description: "Template Project Next.js for Devscale ID",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </body>
    </html>
  );
}
