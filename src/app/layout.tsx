import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import ScrollToTopButton from "@/components/scroll-to-top/scroll-to-top";
import Animation from "@/components/animation/animation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Dengue",
  description: "Site informativo sobre a Dengue",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Header/>
        <Animation>
          {children}
        </Animation>
        <ScrollToTopButton/>
      </body>
    </html>
  );
}
