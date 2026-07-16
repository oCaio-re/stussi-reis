"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#070b19] pt-16 pb-8 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Logo & About Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-none border border-gold-base/30 bg-[#0a1128] flex items-center justify-center">
                <Image
                  src="/new_logo.svg"
                  alt="Stussi & Reis Logo"
                  fill
                  className="object-contain p-1.5"
                  sizes="48px"
                />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold tracking-wider text-white">
                  STUSSI & REIS
                </h3>
                <p className="text-[9px] font-bold tracking-[0.25em] text-gold-light mt-0.5">
                  ADVOCACIA E CONSULTORIA
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-gray-400">
              Escritório especializado com atuação ética e focada em Direito Previdenciário, Consumidor e Cível. Comprometidos com a excelência jurídica e o atendimento personalizado em Niterói - RJ.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/stussi_reis_advocacia?utm_source=qr&igsh=OTg0eTd4ZzVlMWVk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center border border-slate-700 text-gray-400 hover:border-gold-light hover:text-white transition-colors"
                title="Siga-nos no Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-6 border-b border-slate-800 pb-2">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-light transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-gold-light transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/atuacao" className="hover:text-gold-light transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-gold-light transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-6 border-b border-slate-800 pb-2">
              Contatos & Escritório
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-gold-base mt-0.5" />
                <span className="leading-relaxed">
                  Av. Ernani do Amaral Peixoto nº. 300, Sala 1002, Centro, Niterói, RJ
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gold-base mt-0.5" />
                <a href="mailto:stussi.reis.advocacia@gmail.com" className="hover:text-white transition-colors break-all">
                  stussi.reis.advocacia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gold-base mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-300">Felipe Reis:</p>
                  <p>(21) 98896-1729</p>
                  <p className="font-semibold text-gray-300 mt-2">Saulo Stussi:</p>
                  <p>(21) 98731-0837</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {currentYear} Stussi & Reis Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">
              Desenvolvido de forma ética e profissional
            </span>
            <button
              onClick={handleScrollTop}
              className="flex h-9 w-9 items-center justify-center border border-slate-800 bg-[#0a1128] text-gold-base hover:bg-gold-base hover:text-navy-dark transition-all duration-300 cursor-pointer"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
