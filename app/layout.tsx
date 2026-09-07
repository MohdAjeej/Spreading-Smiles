import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serenasmiledental-example.com"),
  title: {
    default: "Spreading Smiles | Advanced Dental Care in Noida",
    template: "%s | Spreading Smiles",
  },
  description:
    "Advanced, gentle, and personalized dental care for every smile — from general dentistry to smile makeovers, delivered with a patient-first philosophy in Noida.",
  openGraph: {
    title: "Spreading Smiles | Advanced Dental Care in Noida",
    description:
      "Advanced, gentle, and personalized dental care for every smile, delivered with a patient-first philosophy in Noida.",
    siteName: "Spreading Smiles",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        {/* Chatbot CSS */}
        <link rel="stylesheet" href="/chatbot/chat-widget.css" />
      </head>
      <body className="min-h-full flex flex-col bg-white text-navy font-sans">
        <Navbar />
        <main className="flex-1 pb-16 md:pb-0">{children}</main>
        <Footer />
        <FloatingContact />
        <Script
          src="https://ihp.ind.in/chat-widget.js"
          strategy="afterInteractive" // or "lazyOnload"
          data-backend-url="https://ihp.ind.in/chatbot-api"
          data-label="Chat with us"
        />
      </body>
    </html>
  );
}
