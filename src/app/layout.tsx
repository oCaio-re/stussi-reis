import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import AppLayoutWrapper from "@/components/AppLayoutWrapper";

// Load Google Fonts
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stussi & Reis Consultoria Jurídica | Advogados em Niterói - RJ",
  description:
    "Escritório de advocacia em Niterói especializado em Direito Cível, Consumidor, Família e Previdenciário. Atendimento ágil e consultoria jurídica de excelência com os sócios Dr. Felipe Reis e Dr. Saulo Stussi.",
  keywords: [
    "advogado niterói",
    "escritorio de advocacia niteroi",
    "direito civil niterói",
    "direito do consumidor niterói",
    "direito de familia niterói",
    "advogado previdenciario niteroi",
    "Felipe Reis da Silva Oliveira",
    "Saulo Pedroso Stussi Júnior",
    "Stussi e Reis",
  ],
  metadataBase: new URL("https://stussiereis.com.br"), // Substitua pela URL final se necessário
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Stussi & Reis Consultoria Jurídica | Advogados em Niterói - RJ",
    description:
      "Consultoria especializada nas áreas Cível, Consumidor, Família e Previdenciário. Conte com a dedicação profissional dos sócios Dr. Felipe Reis e Dr. Saulo Stussi.",
    url: "/",
    siteName: "Stussi & Reis",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD estructured data for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Stussi & Reis Consultoria Jurídica",
    "description": "Escritório de advocacia em Niterói especializado em Direito Cível, Consumidor, Família e Previdenciário.",
    "url": "https://stussiereis.com.br",
    "logo": "https://stussiereis.com.br/logo1.svg",
    "telephone": ["+55-21-98896-1729", "+55-21-98731-0837"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Ernani do Amaral Peixoto nº. 300, Sala 1002, Centro",
      "addressLocality": "Niterói",
      "addressRegion": "RJ",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-22.8943",
      "longitude": "-43.1221"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AppLayoutWrapper>{children}</AppLayoutWrapper>
      </body>
    </html>
  );
}
