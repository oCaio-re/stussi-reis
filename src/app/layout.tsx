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
  title: {
    default: "Stussi & Reis Consultoria Jurídica | Advogados em Niterói - RJ",
    template: "%s | Stussi & Reis Consultoria Jurídica",
  },
  description:
    "Escritório de advocacia em Niterói especializado em Direito Previdenciário (INSS), Consumidor e Cível. Atendimento ágil e consultoria jurídica de excelência com os sócios Dr. Felipe Reis e Dr. Saulo Stussi.",
  keywords: [
    "advogado niterói",
    "escritório de advocacia niteroi",
    "advogado previdenciario niteroi",
    "aposentadoria INSS niterói",
    "planejamento previdenciário niteroi",
    "bpc loas niterói",
    "revisão benefício INSS niterói",
    "advogado direito do consumidor niterói",
    "golpe do pix advogado niterói",
    "fraude bancária advogado niteroi",
    "consignado não contratado niteroi",
    "direito civil niterói",
    "Felipe Reis da Silva Oliveira",
    "Saulo Pedroso Stussi Júnior",
    "Stussi e Reis consultoria jurídica",
  ],
  metadataBase: new URL("https://www.stussireisadvocacia.com.br"),
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Stussi & Reis Consultoria Jurídica | Advogados em Niterói - RJ",
    description:
      "Consultoria especializada nas áreas de Direito Previdenciário, Consumidor e Cível. Conte com a dedicação profissional dos sócios Dr. Felipe Reis (OAB/RJ 211.932) e Dr. Saulo Stussi (OAB/RJ 144.040).",
    url: "https://www.stussireisadvocacia.com.br",
    siteName: "Stussi & Reis Consultoria Jurídica",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo_square.jpeg",
        width: 1200,
        height: 1200,
        alt: "Stussi & Reis Consultoria Jurídica em Niterói - RJ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stussi & Reis Consultoria Jurídica | Advogados em Niterói - RJ",
    description:
      "Consultoria especializada em Direito Previdenciário, Consumidor e Cível em Niterói - RJ.",
    images: ["/logo_square.jpeg"],
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
  verification: {
    google: "bgcY2uX3QJ1LJinpok5ZaxnNN7uRaoOqicMUTxD5IWc",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "geo.region": "BR-RJ",
    "geo.placename": "Niterói",
    "geo.position": "-22.8943;-43.1221",
    ICBM: "-22.8943, -43.1221",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD structured data graph for SEO (YMYL / E-E-A-T)
  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": "https://www.stussireisadvocacia.com.br/#organization",
        "name": "Stussi & Reis Consultoria Jurídica",
        "alternateName": "Stussi & Reis Advocacia",
        "description":
          "Escritório de advocacia em Niterói especializado em Direito Previdenciário (INSS), Direito do Consumidor e Direito Cível.",
        "url": "https://www.stussireisadvocacia.com.br",
        "logo": "https://www.stussireisadvocacia.com.br/new_logo.svg",
        "image": "https://www.stussireisadvocacia.com.br/logo_square.jpeg",
        "telephone": ["+55-21-98896-1729", "+55-21-98731-0837"],
        "email": ["felipefrso@gmail.com", "saulostussi.adv@gmail.com"],
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Av. Ernani do Amaral Peixoto nº. 300, Sala 1002, Centro",
          "addressLocality": "Niterói",
          "addressRegion": "RJ",
          "postalCode": "24020-070",
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
        "areaServed": [
          { "@type": "City", "name": "Niterói" },
          { "@type": "City", "name": "São Gonçalo" },
          { "@type": "City", "name": "Maricá" },
          { "@type": "City", "name": "Rio de Janeiro" },
          { "@type": "State", "name": "Rio de Janeiro" }
        ],
        "knowsAbout": [
          "Direito Previdenciário",
          "Aposentadoria INSS",
          "Benefício de Prestação Continuada BPC LOAS",
          "Auxílio-Doença e Invalidez",
          "Revisão de Benefícios do INSS",
          "Direito do Consumidor",
          "Fraudes Bancárias e Golpe do PIX",
          "Empréstimos Consignados Indevidos",
          "Direito Cível"
        ],
        "priceRange": "$$",
        "founder": [
          {
            "@type": "Person",
            "@id": "https://www.stussireisadvocacia.com.br/#felipe-reis",
            "name": "Felipe Reis da Silva Oliveira",
            "jobTitle": "Advogado Sócio Fundador",
            "identifier": "OAB/RJ 211.932"
          },
          {
            "@type": "Person",
            "@id": "https://www.stussireisadvocacia.com.br/#saulo-stussi",
            "name": "Saulo Pedroso Stussi Júnior",
            "jobTitle": "Advogado Sócio Fundador",
            "identifier": "OAB/RJ 144.040"
          }
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.stussireisadvocacia.com.br/#felipe-reis",
        "name": "Dr. Felipe Reis da Silva Oliveira",
        "jobTitle": "Advogado Sócio - Direito Previdenciário e Cível",
        "identifier": "OAB/RJ 211.932",
        "worksFor": {
          "@id": "https://www.stussireisadvocacia.com.br/#organization"
        },
        "knowsAbout": [
          "Direito Previdenciário",
          "Benefícios do INSS",
          "Aposentadorias",
          "Direito Cível"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://www.stussireisadvocacia.com.br/#saulo-stussi",
        "name": "Dr. Saulo Pedroso Stussi Júnior",
        "jobTitle": "Advogado Sócio - Direito do Consumidor e Cível",
        "identifier": "OAB/RJ 144.040",
        "worksFor": {
          "@id": "https://www.stussireisadvocacia.com.br/#organization"
        },
        "knowsAbout": [
          "Direito do Consumidor",
          "Fraudes Bancárias",
          "Golpes do PIX",
          "Direito Cível"
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como agendar uma consulta com um advogado em Niterói?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Você pode agendar sua consulta diretamente pelo WhatsApp do escritório Stussi & Reis ou através do formulário de contato disponível no site."
            }
          },
          {
            "@type": "Question",
            "name": "Quais são as áreas de atuação do escritório Stussi & Reis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O escritório atua de forma dedicada nas áreas de Direito Previdenciário (aposentadorias, auxílios e BPC/LOAS no INSS), Direito do Consumidor (fraudes bancárias, PIX, consignados indevidos) e Direito Cível em Niterói e região."
            }
          },
          {
            "@type": "Question",
            "name": "O escritório Stussi & Reis realiza atendimento online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim, além do atendimento presencial no Centro de Niterói (Av. Amaral Peixoto 300, Sala 1002), o escritório realiza consultoria e acompanhamento jurídico 100% online via WhatsApp e videochamada."
            }
          }
        ]
      }
    ]
  };

  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <AppLayoutWrapper>{children}</AppLayoutWrapper>
      </body>
    </html>
  );
}
