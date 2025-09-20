import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import { SpeedInsights } from "@vercel/speed-insights/next"
// تحسين تحميل الـ fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap', // مهم للـ performance
  preload: true,   // تحميل مبكر
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap', // مهم للـ performance
  preload: false,  // متحملوش إلا لو محتاجو
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
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Preload custom font - مهم جداً للـ performance */}
        <link 
          rel="preload" 
          href="/fonts/MeraPro-V4Oex.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin=""
        />
        
        {/* DNS prefetch للـ external resources */}
        <link rel="dns-prefetch" href="https://vercel.app" />
        
        {/* Viewport optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
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
        <SpeedInsights/>
        {children}
      </body>
    </html>
  );
}