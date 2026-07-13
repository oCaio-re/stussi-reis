"use client";

import React, { useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppModal from "./WhatsAppModal";
import { MessageSquare } from "lucide-react";
import { WhatsAppProvider, useWhatsApp } from "@/context/WhatsAppContext";
import Lenis from "lenis";

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const { isOpen, open, close } = useWhatsApp();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Inicializar o Lenis Smooth Scroll para rolagem suave inercial
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Ajustar o scroll do Lenis quando o modal de WhatsApp abre/fecha
    if (isOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      lenis.destroy();
    };
  }, [isOpen]);

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
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-650 text-white shadow-xl shadow-green-600/30 transition-all duration-300 hover:scale-115 hover:bg-green-500 focus:outline-none cursor-pointer"
        aria-label="Atendimento WhatsApp"
      >
        <MessageSquare className="h-6 w-6" />
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
