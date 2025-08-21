import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Bypivi - Construyendo micro-SaaS en público sin saber programar",
  description:
    "Sigo mi viaje de aprender programación y crear micro-SaaS desde cero. Documentando todo el proceso en público con transparencia total. Vibe coding, errores incluidos.",
  keywords: [
    "micro-SaaS",
    "build in public",
    "programación",
    "emprendimiento",
    "startup",
    "vibe coding",
    "aprender programación",
    "construir en público",
  ],
  authors: [{ name: "Bypivi" }],
  creator: "Bypivi",
  publisher: "Bypivi",
  robots: "index, follow",
  generator: "v0.app",
  metadataBase: new URL("https://bypivi.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://bypivi.vercel.app",
    title: "Bypivi - Construyendo micro-SaaS en público",
    description:
      "Documentando mi viaje de aprender programación y crear micro-SaaS sin experiencia previa. Transparencia total, errores incluidos.",
    siteName: "Bypivi",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bypivi - Construyendo micro-SaaS en público",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bypivi - Construyendo micro-SaaS en público",
    description: "Documentando mi viaje de aprender programación y crear micro-SaaS sin experiencia previa.",
    images: ["/og-image.jpg"],
    creator: "@bypivi",
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Bypivi",
              url: "https://bypivi.vercel.app",
              sameAs: ["https://x.com/bypivi"],
              jobTitle: "Micro-SaaS Builder",
              description: "Construyendo micro-SaaS en público sin experiencia previa en programación",
              knowsAbout: ["Micro-SaaS", "Build in Public", "Programación", "Emprendimiento"],
              alumniOf: {
                "@type": "Organization",
                name: "Autodidacta",
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
