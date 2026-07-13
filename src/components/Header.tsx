"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import { useWhatsApp } from "@/context/WhatsAppContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { open: openWhatsApp } = useWhatsApp();

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Áreas de Atuação", href: "/atuacao" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gold-base/10 bg-navy-dark/85 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold-base/30 bg-navy-light transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo_rounded.jpeg"
                alt="Stussi & Reis Logo"
                fill
                className="object-cover"
                sizes="48px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-wider text-white sm:text-xl">
                STUSSI & REIS
              </span>
              <span className="text-[9px] font-semibold tracking-[0.25em] text-gold-muted sm:text-[10px]">
                CONSULTORIA JURÍDICA
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-gold-base ${
                  isActive(link.href)
                    ? "text-gold-base font-semibold"
                    : "text-gray-300"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-gold-dark to-gold-light" />
                )}
              </Link>
            ))}

            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 rounded-full border border-gold-base/30 bg-gold-base/10 px-5 py-2 text-sm font-semibold tracking-wide text-gold-light transition-all duration-300 hover:bg-gold-base hover:text-navy-dark hover:border-gold-base cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>Fale Conosco</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gold-base/10 bg-navy-card">
          <div className="space-y-1 px-2 pb-4 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-gold-base/10 text-gold-base"
                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="px-3 pt-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openWhatsApp();
                }}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-gold-base px-4 py-2.5 text-base font-bold text-navy-dark shadow-lg shadow-gold-glow transition-all hover:bg-gold-light cursor-pointer"
              >
                <Phone className="h-5 w-5" />
                <span>Atendimento WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
