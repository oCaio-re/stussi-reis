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

  // Base styles for luxury feel: relative positioning, hidden overflow, tracking and transition curves
  const baseStyles = "relative overflow-hidden group flex items-center justify-center gap-2.5 rounded-none font-semibold tracking-wider uppercase transition-all duration-500 active:scale-[0.98] cursor-pointer";
  
  // Static background/border configurations
  const variantClasses = {
    primary: "bg-gold-base text-white border border-gold-base shadow-sm",
    secondary: "bg-white text-slate-700 border border-slate-200",
    outline: "bg-gold-base/5 text-gold-light border border-gold-base/30",
  };

  return (
    <button
      onClick={open}
      className={`${baseStyles} ${variantClasses[variant]} ${className}`}
    >
      {/* Premium background sliding sweep overlay using custom cubic-bezier */}
      <span 
        className={`absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] origin-left scale-x-0 group-hover:scale-x-100 z-0 ${
          variant === "primary" 
            ? "bg-gold-dark" 
            : variant === "outline" 
            ? "bg-gold-base" 
            : "bg-gold-base/10"
        }`}
      />

      {/* Button content wrapped to stand on top of overlay (z-10) with text color transition */}
      <span className={`relative z-10 flex items-center justify-center gap-2.5 transition-colors duration-500 ${
        variant === "outline" ? "group-hover:text-white" : ""
      }`}>
        <Phone className="h-3.5 w-3.5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 text-current" />
        <span>{children || "Falar com Advogado"}</span>
      </span>
    </button>
  );
}
