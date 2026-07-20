import React from "react";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare } from "lucide-react";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Contato | Stussi & Reis Advocacia",
  description:
    "Entre em contato com o escritório Stussi & Reis em Niterói - RJ. Agende sua consulta por WhatsApp ou envie uma mensagem eletrônica pelo formulário.",
  alternates: {
    canonical: "/contato",
  },
};

export default function Contato() {
  const contacts = [
    {
      name: "Dr. Felipe Reis da Silva Oliveira (OAB/RJ 211.932)",
      phone: "(21) 98896-1729",
      email: "felipefrso@gmail.com",
      focus: "Previdenciário, Consumidor e Cível",
      photo: "/foto felipe.jpeg",
      waLink: "https://wa.me/5521988961729?text=Ol%C3%A1%20Dr.%20Felipe%2C%20gostaria%20de%20conversar%20sobre%20um%20caso%20jur%C3%ADdico.",
    },
    {
      name: "Dr. Saulo Pedroso Stussi Júnior (OAB/RJ 144.040)",
      phone: "(21) 98731-0837",
      email: "Saulostussi.adv@gmail.com",
      focus: "Consumidor e Cível",
      photo: "/saulo.png",
      waLink: "https://wa.me/5521987310837?text=Ol%C3%A1%20Dr.%20Saulo%2C%20gostaria%20de%20conversar%20sobre%20um%20caso%20jur%C3%ADdico.",
    },
  ];

  return (
    <div className="py-20 md:py-28 bg-[#fcfdfd]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-down reveal-hidden">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="h-px w-6 bg-gold-light" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-light">
              Canais de Comunicação
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-navy-base">
            Fale com Nosso Escritório
          </h1>
          <div className="mt-4 h-[1px] w-20 bg-gold-base mx-auto" />
          <p className="mt-6 text-sm text-slate-500 leading-relaxed font-light">
            Disponibilizamos contato eletrônico e atendimento direto via WhatsApp com os sócios fundadores para agilizar a triagem do seu caso.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
          
          {/* Left Column: Info cards */}
          <ScrollReveal animation="fade-in-up" className="lg:col-span-5 flex">
            <div className="space-y-8 w-full">
              
              {/* Partner Contact Details */}
              <div className="border border-slate-200 bg-white p-6 md:p-8 space-y-6 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-navy-base border-b border-slate-100 pb-2 mb-4">
                  Contatos com os Sócios:
                </h3>
                
                <div className="space-y-6">
                  {contacts.map((contact) => (
                    <div
                      key={contact.name}
                      className="border border-slate-100 bg-slate-50/50 p-4 space-y-3 relative hover:border-gold-base/20 transition-colors"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="relative h-14 w-14 shrink-0 overflow-hidden border border-gold-base/30 bg-slate-100 shadow-sm">
                          <Image
                            src={contact.photo}
                            alt={contact.name}
                            fill
                            className="object-cover"
                            sizes="56px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-navy-base leading-tight truncate">{contact.name}</p>
                          <p className="text-[9px] font-bold text-gold-light uppercase tracking-wider mt-0.5">Sócio Fundador</p>
                          <p className="text-[10px] text-slate-400 font-light mt-1 italic truncate">Foco: {contact.focus}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-1.5 text-xs text-slate-500 font-light pt-2 border-t border-slate-100">
                        <p className="flex items-center gap-2">
                          <Phone className="h-3.5 w-3.5 text-gold-light" />
                          <span>{contact.phone}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <Mail className="h-3.5 w-3.5 text-gold-light" />
                          <a href={`mailto:${contact.email}`} className="hover:text-gold-light transition-colors break-all">
                            {contact.email}
                          </a>
                        </p>
                      </div>

                      <a
                        href={contact.waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 bg-[#128c7e] hover:bg-[#075e54] text-white text-[11px] font-bold uppercase tracking-wider py-3 mt-2 shadow-sm transition-all cursor-pointer"
                      >
                        <MessageSquare className="h-4 w-4" />
                        <span>Conversar via WhatsApp</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* General Office Info */}
              <div className="border border-slate-200 bg-white p-6 md:p-8 space-y-4 shadow-sm">
                <h3 className="text-xs font-bold uppercase tracking-widest text-navy-base border-b border-slate-100 pb-2 mb-4">
                  Endereço & Canais Gerais:
                </h3>
                
                <div className="flex gap-3 text-xs text-slate-500 font-light leading-relaxed">
                  <MapPin className="h-5 w-5 shrink-0 text-gold-light mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800">Stussi & Reis Advocacia</p>
                    <p className="mt-0.5">Av. Ernani do Amaral Peixoto nº. 300, Sala 1002, Centro</p>
                    <p>Niterói, RJ — CEP: 24020-077</p>
                  </div>
                </div>

                <div className="flex gap-3 text-xs text-slate-500 font-light leading-relaxed pt-3 border-t border-slate-100">
                  <Mail className="h-5 w-5 shrink-0 text-gold-light mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800">E-mail Institucional</p>
                    <a href="mailto:stussi.reis.advocacia@gmail.com" className="hover:text-gold-light transition-colors mt-0.5 block break-all">
                      stussi.reis.advocacia@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 text-xs text-slate-500 font-light leading-relaxed pt-3 border-t border-slate-100">
                  <Clock className="h-5 w-5 shrink-0 text-gold-light mt-0.5" />
                  <div>
                    <p className="font-semibold text-slate-800">Atendimento Comercial</p>
                    <p className="mt-0.5">Segunda a Sexta-feira</p>
                    <p>Das 09h às 18h (exceto feriados)</p>
                  </div>
                </div>
              </div>

              {/* Address Map Link */}
              <div className="border border-slate-200 bg-[#070b19] p-6 text-white relative overflow-hidden shadow-sm">
                <div className="absolute top-0 right-0 h-24 w-24 bg-gold-base/5 blur-2xl z-0" />
                <div className="relative z-10 space-y-4">
                  <div className="inline-flex h-9 w-9 items-center justify-center bg-gold-base text-navy-dark">
                    <MapPin className="h-4 w-4 animate-bounce" />
                  </div>
                  <div>
                    <h4 className="text-sm font-serif font-bold text-white">Localização Central</h4>
                    <p className="text-[11px] text-gray-300 font-light mt-1">Próximo aos principais cartórios, fórum e tribunais do Centro de Niterói.</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Av.+Ernani+do+Amaral+Peixoto+300+Centro+Niteroi+RJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center border border-gold-base bg-gold-base text-[#070b19] hover:bg-gold-light hover:border-gold-light text-[10px] font-bold uppercase tracking-wider px-6 py-3 shadow-md transition-all cursor-pointer w-full"
                  >
                    Ver no Google Maps
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
