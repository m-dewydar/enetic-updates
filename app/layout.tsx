import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Providers } from "@/components/providers";
import { ScrollTop } from "@/components/scroll-top";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Enetic | Built environments, reimagined",
  description:
    "A multi-page, motion-led studio website for infrastructure, workplaces, and energy transition storytelling."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <Providers>
          <div className="page-shell min-h-screen">
            <Header />
            {children}
            <Footer />
            <ScrollTop />
          </div>
        </Providers>
      </body>
    </html>
  );
}
