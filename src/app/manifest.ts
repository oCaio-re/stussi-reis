import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Stussi & Reis Consultoria Jurídica",
    short_name: "Stussi & Reis",
    description:
      "Escritório de advocacia em Niterói especializado em Direito Previdenciário, Consumidor e Cível.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B192C",
    theme_color: "#0B192C",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
