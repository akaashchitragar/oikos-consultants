import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Toaster } from "@/components/ui/toaster";
import AccessibilityProvider from "./components/AccessibilityProvider";
import Script from 'next/script'
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Oikos Consultants",
    default: "Oikos Consultants | Environmental Consulting & Sustainability Solutions",
  },
  description:
    "Leading environmental consulting firm specializing in sustainability solutions, ecological services, and environmental compliance.",
  keywords: [
    "environmental consulting",
    "sustainability",
    "ecological services",
    "BRSR compliance",
    "biodiversity assessment",
    "wildlife conservation",
    "GHG inventorisation",
    "ecological restoration",
    "native species",
  ],
  authors: [{ name: "Oikos Consultants" }],
  creator: "Oikos Consultants",
  publisher: "Oikos Consultants",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://oikosconsultants.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://oikosconsultants.com",
    title: "Oikos Consultants | Environmental Consulting & Sustainability Solutions",
    description: "Leading environmental consulting firm specializing in sustainability solutions, ecological services, and environmental compliance.",
    siteName: "Oikos Consultants",
    images: [
      {
        url: "https://oikosconsultants.com/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Oikos Consultants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oikos Consultants | Environmental Consulting & Sustainability Solutions",
    description: "Leading environmental consulting firm specializing in sustainability solutions, ecological services, and environmental compliance.",
    images: ["https://oikosconsultants.com/images/twitter-image.jpg"],
    creator: "@oikosconsultants",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  themeColor: "#2E7D32",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  viewportFit: "cover",
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#2E7D32" />
        <meta name="color-scheme" content="light dark" />
        <meta name="format-detection" content="telephone=yes,date=yes,address=yes,email=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <AccessibilityProvider>
            <BackToTop />
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main id="main-content" className="flex-grow" tabIndex={-1}>
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </AccessibilityProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
