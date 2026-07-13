import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contato | Stussi & Reis Consultoria Jurídica",
  description:
    "Entre em contato com o escritório Stussi & Reis. Agende sua consulta jurídica via WhatsApp ou preencha o formulário para atendimento em Niterói - RJ.",
  alternates: {
    canonical: "/contato",
  },
};

export default function Contato() {
  const contacts = [
    {
      name: "Dr. Felipe Reis",
      phone: "(21) 98896-1729",
      waLink: "https://wa.me/5521988961729?text=Ol%C3%A1%20Dr.%20Felipe%2C%20gostaria%20de%20conversar%20sobre%20um%20caso%20jur%C3%ADdico.",
    },
    {
      name: "Dr. Saulo Stussi",
      phone: "(21) 98731-0837",
      waLink: "https://wa.me/5521987310837?text=Ol%C3%A1%20Dr.%20Saulo%2C%20gostaria%20de%20conversar%20sobre%20um%20caso%20jur%C3%ADdico.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-down reveal-hidden">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-base tracking-wide">
            Fale Conosco
          </h1>
          <p className="text-sm sm:text-base text-gold-muted mt-2 uppercase tracking-widest font-semibold">
            Canais de Atendimento Direto
          </p>
          <div className="mt-4 h-0.5 w-20 bg-gold-base mx-auto" />
          <p className="mt-6 text-slate-600 leading-relaxed text-base">
            Estamos prontos para atendê-lo de forma ágil. Entre em contato pelo WhatsApp diretamente com os advogados ou envie uma mensagem eletrônica.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Info & Map */}
          <ScrollReveal animation="fade-in-up" delayClass="delay-100" className="lg:col-span-5 flex">
            <div className="space-y-8 w-full">
              
              {/* Direct Contact Cards */}
              <div className="rounded-2xl border border-gold-base/15 bg-white p-6 md:p-8 space-y-6 shadow-[0_12px_40px_-12px_rgba(10,17,40,0.06)]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-base border-b border-slate-200/60 pb-2">
                  Telefones & WhatsApp
                </h3>
                
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.name}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50"
                    >
                      <div>
                        <p className="text-sm font-bold text-slate-800">{contact.name}</p>
                        <p className="text-xs text-gold-muted mt-0.5">Sócio Fundador</p>
                        <p className="text-xs text-slate-500 mt-2 flex items-center gap-1.5">
                          <Phone className="h-3 w-3" />
                          {contact.phone}
                        </p>
                      </div>
                      <a
                        href={contact.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-green-600 hover:bg-green-500 text-white font-bold text-xs px-4 py-2.5 shadow-md transition-all active:scale-95 cursor-pointer"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Mensagem Direta</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Address Card */}
              <div className="rounded-2xl border border-gold-base/15 bg-white p-6 md:p-8 space-y-4 shadow-[0_12px_40px_-12px_rgba(10,17,40,0.06)]">
                <h3 className="text-sm font-bold uppercase tracking-wider text-navy-base border-b border-slate-200/60 pb-2">
                  Nosso Endereço
                </h3>
                <div className="flex gap-3 text-sm text-slate-600 leading-relaxed">
                  <MapPin className="h-5 w-5 shrink-0 text-gold-base mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-850">Stussi & Reis Consultoria Jurídica</p>
                    <p className="mt-1">Av. Ernani do Amaral Peixoto nº. 300, Sala 1002, Centro</p>
                    <p>Niterói, RJ — CEP: 24020-077</p>
                  </div>
                </div>
                <div className="flex gap-3 text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-200/60">
                  <Clock className="h-5 w-5 shrink-0 text-gold-base mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800">Horário de Funcionamento</p>
                    <p className="mt-1">Segunda a Sexta-feira</p>
                    <p>Das 09h às 18h</p>
                  </div>
                </div>
              </div>

              {/* Styled Mock Google Map */}
              <div className="rounded-2xl border border-gold-base/20 bg-navy-dark overflow-hidden shadow-lg group relative h-64 flex flex-col justify-end p-6">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-base/15 to-navy-dark group-hover:scale-102 transition-transform duration-500" />
                {/* Fake grid map lines just for visual design */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                <div className="relative z-10 space-y-3">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gold-base text-navy-dark shadow-lg">
                    <MapPin className="h-5 w-5 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Localização do Escritório</h4>
                    <p className="text-xs text-gray-300 mt-1">Centro de Niterói, próximo a cartórios e tribunais.</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Ernani+do+Amaral+Peixoto+300+Centro+Niteroi+RJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-gold-base text-navy-dark hover:bg-gold-light font-bold text-xs px-5 py-2.5 shadow-lg shadow-gold-glow transition-all cursor-pointer"
                  >
                    Abrir no Google Maps
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>

          {/* Right Column: Contact Form */}
          <ScrollReveal animation="fade-in-up" delayClass="delay-200" className="lg:col-span-7 flex">
            <div className="w-full">
              <ContactForm />
            </div>
          </ScrollReveal>

        </div>

      </div>
    </div>
  );
}
