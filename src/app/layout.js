import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

export const metadata = {
  title: "Omar.Dev Portfolio",
  description: "Full Stack Developer Portfolio - Omar Dev showcasing modern web development projects and skills",
  keywords: "Omar, Developer, Portfolio, React, Next.js, Full Stack",
  authors: [{ name: "Omar" }],
  creator: "Omar Dev",
  openGraph: {
    type: "website",
    title: "Omar.Dev Portfolio",
    description: "Full Stack Developer Portfolio",
    images: ["/og-image.png"], // ✅ أضف صورة
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar.Dev Portfolio",
    description: "Full Stack Developer Portfolio",
    images: ["/og-image.png"], // ✅ أضف صورة
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preload custom font */}
        <link
          rel="preload"
          href="/fonts/MeraPro-V4Oex.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased
          bg-gradient-to-tr from-black via-[#973e18] to-black
          bg-no-repeat bg-cover`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
