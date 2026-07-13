"use client";

import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Scale, ArrowUp } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-gold-base/10 bg-navy-dark pt-16 pb-8 text-gray-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-4">
          
          {/* Logo & About Column */}
          <div className="md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-gold-base/30 bg-navy-light flex items-center justify-center">
                <Image
                  src="/logo1.svg"
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
                <p className="text-[9px] font-semibold tracking-[0.25em] text-gold-muted">
                  CONSULTORIA JURÍDICA
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-md text-gray-400">
              Escritório de advocacia comprometido com a ética, excelência e dedicação na defesa dos direitos e interesses de nossos clientes. Atuamos de forma ética e transparente nas principais esferas judiciais.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-gold-base/10 pb-2">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-gold-base transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="hover:text-gold-base transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/atuacao" className="hover:text-gold-base transition-colors">
                  Áreas de Atuação
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-gold-base transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Location Column */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-6 border-b border-gold-base/10 pb-2">
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
                <Phone className="h-5 w-5 shrink-0 text-gold-base mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-300">Felipe Reis:</p>
                  <p>(21) 98896-1729</p>
                  <p className="font-semibold text-gray-300 mt-2.5">Saulo Stussi:</p>
                  <p>(21) 98731-0837</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            &copy; {currentYear} Stussi & Reis Consultoria Jurídica. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-gray-500">
              Desenvolvido de forma ética e profissional
            </span>
            <button
              onClick={handleScrollTop}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gold-base/20 bg-navy-light text-gold-base hover:bg-gold-base hover:text-navy-dark transition-all duration-300"
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
