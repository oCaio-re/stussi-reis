"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppModal from "./WhatsAppModal";
import { MessageSquare } from "lucide-react";
import { WhatsAppProvider, useWhatsApp } from "@/context/WhatsAppContext";
import Lenis from "lenis";

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const { isOpen, open, close } = useWhatsApp();
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // 1. Inicializar o Lenis Smooth Scroll uma única vez
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      // Evita travamentos calculando com base no scroll real do container
      __experimental__naiveDimensions: true,
    });

    lenisRef.current = lenis;

    let animationFrameId: number;
    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    // Forçar recalculação ao redimensionar ou carregar mídia
    const handleResize = () => {
      lenis.resize();
    };

    window.addEventListener("load", handleResize);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("load", handleResize);
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
    };
  }, []);

  // 2. Parar/Iniciar o scroll quando o modal de WhatsApp abre/fecha
  useEffect(() => {
    if (!lenisRef.current) return;
    if (isOpen) {
      lenisRef.current.stop();
    } else {
      lenisRef.current.start();
    }
  }, [isOpen]);

  // 3. Resetar o scroll para o topo e recalcular dimensões ao mudar de página
  useEffect(() => {
    if (!lenisRef.current) return;
    
    // Reset imediato do scroll para o topo da viewport
    lenisRef.current.scrollTo(0, { immediate: true });
    
    // Pequeno delay para garantir que o DOM da nova rota terminou de montar
    const timer = setTimeout(() => {
      lenisRef.current?.resize();
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <button
        onClick={open}
        className="fixed bottom-6 right-6 z-40 flex h-14 items-center gap-2 px-4 rounded-none bg-green-600 text-white shadow-xl shadow-green-600/30 transition-all duration-300 hover:scale-105 hover:bg-green-500 focus:outline-none cursor-pointer"
        aria-label="Atendimento WhatsApp"
      >
        <MessageSquare className="h-5 w-5 shrink-0" />
        <span className="text-[11px] font-bold uppercase tracking-widest hidden sm:inline">WhatsApp: Dúvidas sobre INSS</span>
        <span className="text-[11px] font-bold uppercase tracking-widest sm:hidden">Falar Conosco</span>
      </button>

      {/* WhatsApp Choose Lawyer Modal */}
      <WhatsAppModal
        isOpen={isOpen}
        onClose={close}
      />
    </>
  );
}

export default function AppLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WhatsAppProvider>
      <AppLayoutInner>{children}</AppLayoutInner>
    </WhatsAppProvider>
  );
}
