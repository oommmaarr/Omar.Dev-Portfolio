import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

// تحسين تحميل الـ fonts
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
  description:
    "Full Stack Developer Portfolio - Omar Dev showcasing modern web development projects and skills",
  keywords: "Omar, Developer, Portfolio, React, Next.js, Full Stack",
  authors: [{ name: "Omar" }],
  creator: "Omar Dev",
  openGraph: {
    type: "website",
    title: "Omar.Dev Portfolio",
    description: "Full Stack Developer Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar.Dev Portfolio",
    description: "Full Stack Developer Portfolio",
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
        {/* ✅ Preconnect لأهم origins */}
        <link rel="preconnect" href="https://omar-dev-portfolio.vercel.app" crossOrigin="" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="" />

        {/* Preload custom font */}
        <link
          rel="preload"
          href="/fonts/MeraPro-V4Oex.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />

        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://vercel.app" />

        {/* Viewport optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* ✅ سكربت أساسي بعد الـ interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>

        {/* ✅ سكربتات ثانوية بتحميل lazy */}
        <Script
          src="https://example.com/chat-widget.js"
          strategy="lazyOnload"
        />
      </head>
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
          bg-gradient-to-tr from-black via-[#973e18] to-black
          bg-no-repeat bg-cover
        `}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
