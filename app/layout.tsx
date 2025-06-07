import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "QuizBit - Interactive Coding Quiz Platform | Practice JavaScript, Python & CSS",
  description:
    "Master programming skills with QuizBit's interactive coding quizzes. Practice JavaScript, Python, and CSS with real-time code evaluation, instant feedback, and detailed explanations. Perfect for developers of all levels.",
  keywords:
    "coding quiz, interactive learning, javascript quiz, python quiz, css quiz, programming practice, code editor, developer tools, educational platform, coding challenges",
  authors: [{ name: "QuizBit Team" }],
  creator: "QuizBit",
  publisher: "QuizBit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://quiz-bit-zeta.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "QuizBit",
    description:
      "Master programming skills with interactive coding quizzes. Practice JavaScript, Python, and CSS with real-time feedback.",
    url: "https://quiz-bit-zeta.vercel.app",
    siteName: "QuizBit",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuizBit - Interactive Coding Quiz Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QuizBit - Interactive Coding Quiz Platform",
    description:
      "Master programming skills with interactive coding quizzes. Practice JavaScript, Python, and CSS.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head suppressHydrationWarning>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3b82f6" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "QuizBit",
              description: "Interactive coding quiz platform for developers",
              url: "https://quiz-bit-zeta.vercel.app",
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
