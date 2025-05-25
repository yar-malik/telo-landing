import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ConnectAI - Human-like AI Employees",
  description: "AI employees for your business that never sleep, get tired or quit.",
  generator: "ConnectAI Platform",
  creator: "ConnectAI",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/ai-sales-face.png" as="image" />
        <link rel="preload" href="/ai-receptionist-face.jpg" as="image" />
        <link rel="preload" href="/ai-real-estate-face.png" as="image" />
        <link rel="preload" href="/ai-customer-service-face.png" as="image" />
        <link rel="preload" href="/images/logo.webp" as="image" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Script id="image-fallback">
          {`
            document.addEventListener('DOMContentLoaded', function() {
              const images = document.querySelectorAll('img');
              images.forEach(img => {
                img.onerror = function() {
                  if (!img.src.includes('?fallback=true')) {
                    img.src = img.src + '?fallback=true';
                  }
                }
              });
            });
          `}
        </Script>
      </body>
    </html>
  )
}
