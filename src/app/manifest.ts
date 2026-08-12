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
        src: "/logo_square.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
      },
    ],
  };
}
