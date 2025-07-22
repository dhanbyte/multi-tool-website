import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MediaTools Pro - All-in-One Media Toolkit",
  description: "Download videos, generate QR codes, convert files, and more - all in one powerful platform",
  openGraph: {
    title: "MediaTools Pro - All-in-One Media Toolkit",
    description: "Download videos, generate QR codes, convert files, and more - all in one powerful platform",
    url: "https://dhanbyte.me",
    siteName: "MediaTools Pro",
    images: [
      {
        url: "https://ik.imagekit.io/b5qewhvhb/New%20Folder/ChatGPT%20Image%20Jul%2020,%202025,%2011_38_49%20AM.png?updatedAt=1752991986819",
        width: 1200,
        height: 630,
        alt: "MediaTools Pro - All-in-One Toolkit"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico"
  }
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
