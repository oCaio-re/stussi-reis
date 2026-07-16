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
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-22 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative h-13 w-13 overflow-hidden rounded-none border border-gold-base/40 bg-navy-base transition-transform duration-300 group-hover:scale-105 flex items-center justify-center shadow-sm">
              <Image
                src="/new_logo.svg"
                alt="Stussi & Reis Logo"
                fill
                className="object-contain p-1.5 filter brightness-100"
                sizes="52px"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-bold tracking-wider text-navy-base leading-none">
                STUSSI & REIS
              </span>
              <span className="text-[8.5px] font-bold tracking-[0.28em] text-gold-light mt-1 uppercase">
                Advocacia e Consultoria
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`relative py-2 text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${
                  isActive(link.href)
                    ? "text-gold-light"
                    : "text-slate-600 hover:text-navy-base"
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-full bg-gold-base" />
                )}
              </Link>
            ))}

            {/* Instagram link */}
            <a
              href="https://www.instagram.com/stussi_reis_advocacia?utm_source=qr&igsh=OTg0eTd4ZzVlMWVk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-gold-light p-1.5 transition-colors"
              title="Instagram do Escritório"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            <button
              onClick={openWhatsApp}
              className="flex items-center gap-2 rounded-none border border-gold-base/50 bg-gold-base/5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gold-light transition-all duration-300 hover:bg-gold-base hover:text-white hover:border-gold-base cursor-pointer shadow-sm active:scale-98"
            >
              <Phone className="h-3.5 w-3.5" />
              <span>Falar com Advogado</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="https://www.instagram.com/stussi_reis_advocacia?utm_source=qr&igsh=OTg0eTd4ZzVlMWVk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-gold-light p-1.5"
              title="Instagram do Escritório"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-none p-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900 focus:outline-none"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-5 space-y-1 shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block rounded-none px-3 py-3 text-xs font-bold uppercase tracking-wider transition-colors ${
                isActive(link.href)
                  ? "bg-gold-base/5 text-gold-light border-l-2 border-gold-base"
                  : "text-slate-600 hover:bg-slate-50 hover:text-navy-base"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-slate-100 mt-4">
            <button
              onClick={() => {
                setIsOpen(false);
                openWhatsApp();
              }}
              className="flex w-full items-center justify-center gap-2 rounded-none bg-gold-base px-4 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-gold-light cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>Atendimento WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
