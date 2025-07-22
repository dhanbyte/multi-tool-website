import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediaTools Pro - All-in-One Media Toolkit",
  description: "Free online tools to convert, compress, scan, and generate content - from PDFs to QR Codes. Fast, simple & privacy-focused.",
  keywords: ["free pdf tools", "online media converter", "jpg to pdf", "image compressor", "qr code generator", "media tools", "pdf to word"],
  metadataBase: new URL("https://dhanbyte.me"),
  openGraph: {
    title: "MediaTools Pro - All-in-One Media Toolkit",
    description: "Convert, compress, and generate content easily with free online tools.",
    url: "https://dhanbyte.me",
    siteName: "MediaTools Pro",
    images: [
      {
        url: "https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-07-18%20093202.png?updatedAt=1752811510301",
        width: 1200,
        height: 630,
        alt: "MediaTools Pro",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.png", // your uploaded favicon
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  generator: "Next.js + Vercel",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="https://ik.imagekit.io/b5qewhvhb/Screenshot%202025-07-18%20093202.png?updatedAt=1752811510301" type="image/png" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
