import type { Metadata } from "next";
import { Inter, Playfair_Display, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ModalProvider } from "@/components/providers/ModalProvider";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { MessageCircle } from "lucide-react";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sahyadri Code | Premium IT Solutions",
  description: "Building Powerful Digital Solutions for Modern Businesses",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${orbitron.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans relative overflow-x-hidden">
        <div 
          className="fixed inset-0 -z-50 pointer-events-none" 
          style={{
            background: `
              radial-gradient(circle at top left, rgba(232,106,31,0.10), transparent 35%),
              radial-gradient(circle at bottom right, rgba(244,162,97,0.08), transparent 30%),
              #F7F2EC
            `
          }}
        >
          <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-40 mix-blend-multiply"></div>
        </div>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <LanguageProvider>
            <ModalProvider>
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
              
              {/* Global WhatsApp Floating Button */}
              <a 
                href="https://wa.me/918928946848" 
                target="_blank"
                rel="noreferrer"
                className="fixed bottom-6 right-6 z-[100] w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(34,197,94,0.3)] hover:-translate-y-1 transition-transform cursor-pointer"
              >
                <MessageCircle className="w-8 h-8 text-white" />
              </a>
            </ModalProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
