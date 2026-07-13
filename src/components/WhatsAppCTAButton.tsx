"use client";

import React from "react";
import { Phone } from "lucide-react";
import { useWhatsApp } from "@/context/WhatsAppContext";

interface WhatsAppCTAButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export default function WhatsAppCTAButton({
  children,
  className = "",
  variant = "primary",
}: WhatsAppCTAButtonProps) {
  const { open } = useWhatsApp();

  const baseStyles = "flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-300 active:scale-[0.98] cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-dark via-gold-base to-gold-light text-white shadow-lg shadow-gold-glow hover:opacity-95",
    secondary: "bg-white text-slate-700 border border-slate-200 hover:border-gold-base/30 hover:bg-gold-base/5",
    outline: "border border-gold-base/40 bg-gold-base/5 text-gold-light hover:bg-gold-base hover:text-white hover:border-gold-base",
  };

  return (
    <button
      onClick={open}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <Phone className="h-4 w-4" />
      <span>{children || "Falar com Advogado"}</span>
    </button>
  );
}
