"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import WhatsAppModal from "./WhatsAppModal";
import { MessageSquare } from "lucide-react";
import { WhatsAppProvider, useWhatsApp } from "@/context/WhatsAppContext";

function AppLayoutInner({ children }: { children: React.ReactNode }) {
  const { isOpen, open, close } = useWhatsApp();

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
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl shadow-green-600/30 transition-all duration-300 hover:scale-110 hover:bg-green-500 focus:outline-none"
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
