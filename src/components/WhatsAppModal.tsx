"use client";

import React, { useState, useEffect } from "react";
import { X, MessageSquare, Phone, UserCheck } from "lucide-react";
import Image from "next/image";

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppModal({ isOpen, onClose }: WhatsAppModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const lawyers = [
    {
      name: "Felipe Reis da Silva Oliveira",
      role: "Advogado Sócio",
      phoneText: "(21) 98896-1729",
      waLink: "https://wa.me/5521988961729?text=Ol%C3%A1%20Dr.%20Felipe%2C%20gostaria%20de%20solicitar%20uma%20consulta%20jur%C3%ADdica.",
      avatarInitials: "FR",
    },
    {
      name: "Saulo Pedroso Stussi Júnior",
      role: "Advogado Sócio",
      phoneText: "(21) 98731-0837",
      waLink: "https://wa.me/5521987310837?text=Ol%C3%A1%20Dr.%20Saulo%2C%20gostaria%20de%20solicitar%20uma%20consulta%20jur%C3%ADdica.",
      avatarInitials: "SS",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-gold-base/20 bg-navy-card shadow-2xl transition-all duration-300">
        {/* Decorative Top Accent line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-gold-dark via-gold-base to-gold-light" />
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gold-base transition-colors"
          aria-label="Fechar"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="p-6">
          <div className="text-center mb-6">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gold-base/10 text-gold-base">
              <MessageSquare className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-serif font-bold text-white tracking-wide">
              Atendimento via WhatsApp
            </h3>
            <p className="text-sm text-gray-400 mt-1">
              Escolha com qual de nossos sócios deseja falar:
            </p>
          </div>

          <div className="space-y-4">
            {lawyers.map((lawyer) => (
              <a
                key={lawyer.name}
                href={lawyer.waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-gold-base/40 hover:bg-gold-glow transition-all duration-300"
              >
                {/* Custom Avatar placeholder */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold-base/30 bg-navy-light text-gold-base font-serif font-bold group-hover:scale-105 transition-transform duration-300">
                  {lawyer.avatarInitials}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-semibold text-white truncate group-hover:text-gold-light transition-colors">
                    {lawyer.name}
                  </h4>
                  <p className="text-xs text-gold-muted mt-0.5">{lawyer.role}</p>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-1">
                    <Phone className="h-3 w-3" />
                    <span>{lawyer.phoneText}</span>
                  </div>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10 text-green-400 group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                  <MessageSquare className="h-4 w-4" />
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-6">
            <p className="text-xs text-gray-500">
              Nosso atendimento funciona em horário comercial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
