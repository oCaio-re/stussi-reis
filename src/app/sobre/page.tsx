import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Scale, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Quem Somos | Stussi & Reis Advocacia",
  description:
    "Conheça a trajetória e os sócios Dr. Felipe Reis e Dr. Saulo Stussi. Descubra nossa filosofia de responsabilidade técnica conjunta em Niterói - RJ.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function Sobre() {
  const lawyers = [
    {
      name: "Dr. Felipe Reis da Silva Oliveira",
      role: "Advogado Sócio Fundador",
      oab: "OAB/RJ 211.932",
      initials: "FR",
      photo: "/foto felipe.jpeg",
      description:
        "Como sócio do escritório, é especialista em Direito Previdenciário (INSS), atuando na concessão, revisão e defesa de benefícios previdenciários, sempre com atendimento técnico e personalizado. Também exerce atuação nas áreas de Direito do Consumidor e Direito Cível, oferecendo soluções jurídicas seguras e eficientes.",
      education: [
        "Bacharel em Direito",
        "Especialista em Direito do Consumidor e Responsabilidade Civil",
        "Membro Ativo da Seccional OAB/RJ",
      ],
      areas: ["Direito Previdenciário", "Direito do Consumidor", "Direito Cível"],
    },
    {
      name: "Dr. Saulo Pedroso Stussi Júnior",
      role: "Advogado Sócio Fundador",
      oab: "OAB/RJ 144.040",
      initials: "SS",
      photo: "/saulo.png",
      description:
        "Como sócio do escritório, é especialista em Direito do Consumidor e Direito Civil, com atuação destacada em Responsabilidade Civil, buscando a reparação de danos materiais e morais decorrentes de falhas na prestação de serviços, acidentes, descumprimentos contratuais e demais situações que gerem prejuízos aos clientes, sempre com uma atuação técnica e estratégica.",
      education: [
        "Bacharel em Direito",
        "Especialista em Direito Processual Civil e Obrigações",
        "Membro Ativo da Seccional OAB/RJ",
      ],
      areas: ["Direito do Consumidor", "Direito Cível"],
    },
  ];

  return (
    <div className="relative bg-[#fcfdfd] min-h-screen">
      
      {/* Intro & Story Section */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Title / Intro */}
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-down reveal-hidden">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="h-px w-6 bg-gold-light" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-light">
                História e Filosofia
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-normal text-navy-base">
              Sobre o Escritório
            </h1>
            <div className="mt-4 h-[1px] w-20 bg-gold-base mx-auto" />
            <p className="mt-6 text-sm text-slate-500 leading-relaxed font-light">
              Fundado em 2017, o Stussi & Reis Consultoria Jurídica nasceu com o compromisso inegociável de prestar serviços pautados na transparência técnica e no atendimento pessoal.
            </p>
          </div>

          {/* Story Section */}
          <ScrollReveal animation="fade-in-up">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-start">
              
              {/* Left Column: Text */}
              <div className="lg:col-span-7 space-y-6 text-sm text-slate-600 font-light leading-relaxed">
                <h2 className="font-serif text-2xl font-normal text-navy-base leading-tight">
                  Atendimento Próximo e Sem Intermediários
                </h2>
                <p>
                  Diferente de modelos de advocacia em massa, que distribuem processos de forma fria por diversos setores corporativos, o <strong className="text-navy-base font-semibold">Stussi & Reis</strong> foi concebido para atuar de forma artesanal. Nossos clientes tratam de suas demandas diretamente com os sócios responsáveis, garantindo clareza e acessibilidade em todas as etapas da causa.
                </p>
                <p>
                  Com sede física estrategicamente localizada no Centro de <strong className="text-navy-base font-semibold">Niterói, RJ</strong>, nosso escritório unifica a excelência profissional com ferramentas tecnológicas de atendimento célere. Oferecemos comunicação clara, simples e direta — adequada para sanar dúvidas e resolver demandas de pessoas físicas sem termos técnicos incompreensíveis.
                </p>
                <p>
                  Todo parecer e tese defensiva elaborados passam pela análise cruzada de ambos os sócios. Acreditamos que a responsabilidade colegiada mitiga riscos processuais e eleva as chances de êxito nas instâncias administrativas ou judiciais.
                </p>
              </div>
              
              {/* Right Column: Mission/Vision/Values inside a formal card */}
              <div className="lg:col-span-5 border border-slate-200 bg-slate-50/50 p-8 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gold-base/5 blur-3xl" />
                <div className="flex h-10 w-10 items-center justify-center border border-gold-base/20 bg-gold-base/5 text-gold-light mb-6">
                  <Scale className="h-5 w-5" />
                </div>
                
                <h3 className="text-xs font-bold text-navy-base uppercase tracking-widest mb-6 border-b border-slate-200 pb-2">
                  Diretrizes Institucionais:
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-gold-light bg-white text-[10px] font-bold text-gold-light font-serif">M</span>
                    <div>
                      <h4 className="text-xs font-bold text-navy-base uppercase tracking-wider">Missão</h4>
                      <p className="text-[11px] text-slate-500 font-light mt-1">Prestar assessoria jurídica pautada na ética e na exatidão técnica, fornecendo estratégias que resguardem direitos e deêm segurança jurídica ao cliente.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-gold-light bg-white text-[10px] font-bold text-gold-light font-serif">V</span>
                    <div>
                      <h4 className="text-xs font-bold text-navy-base uppercase tracking-wider">Visão</h4>
                      <p className="text-[11px] text-slate-500 font-light mt-1">Consolidar o escritório como referência em atendimento personalizado e direito previdenciário no estado do Rio de Janeiro, com foco em resultados lícitos.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-gold-light bg-white text-[10px] font-bold text-gold-light font-serif">V</span>
                    <div>
                      <h4 className="text-xs font-bold text-navy-base uppercase tracking-wider">Valores</h4>
                      <p className="text-[11px] text-slate-500 font-light mt-1">Transparência deontológica (regras OAB), respeito ao cliente, análise técnica minuciosa de contratos/leis, dedicação direta e constante atualização.</p>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Sócio / Advogado Profiles Section */}
      <section className="py-24 bg-[#fcfdfd]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-[10px] font-bold text-gold-light uppercase tracking-[0.25em]">
              Corpo Jurídico do Escritório
            </span>
            <h2 className="font-serif text-3xl font-normal text-navy-base mt-2">
              Os Advogados Sócios
            </h2>
            <div className="h-[1px] w-12 bg-gold-base mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {lawyers.map((lawyer, index) => {
              return (
                <ScrollReveal
                  key={lawyer.name}
                  animation="fade-in-up"
                  delayClass={index === 1 ? "delay-200" : ""}
                  className="flex"
                >
                  <div className="border border-slate-200 bg-white p-8 flex flex-col md:flex-row gap-6 hover:border-gold-base/30 transition-all duration-300 w-full relative">
                    
                    {/* Photo Badge */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-gold-base/40 bg-slate-50 shadow-sm">
                      <Image
                        src={lawyer.photo}
                        alt={lawyer.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="font-serif text-lg font-bold text-navy-base">
                          {lawyer.name}
                        </h3>
                        <p className="text-[10px] text-gold-light font-bold uppercase tracking-widest mt-0.5">{lawyer.role} — {lawyer.oab}</p>
                      </div>

                      <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {lawyer.description}
                      </p>

                      <div className="pt-4 border-t border-slate-100 space-y-3">
                        <div>
                          <h4 className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            <BookOpen className="h-3.5 w-3.5 text-gold-light" />
                            Áreas de Foco no Escritório:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {lawyer.areas.map((area, idx) => (
                              <span key={idx} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-slate-100 bg-slate-50 text-slate-600">
                                {area}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy of Joint Responsibility Block */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="border border-slate-200 p-8 md:p-12 bg-slate-50/50 shadow-sm relative">
            <div className="flex h-10 w-10 items-center justify-center border border-gold-base/20 bg-gold-base/5 text-gold-light mx-auto mb-6">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-2xl font-normal text-navy-base mb-4">
              Atuação Conjunta e Compromisso com a Causa
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light max-w-2xl mx-auto">
              Ao escolher o escritório <strong className="text-navy-base font-semibold">Stussi & Reis</strong>, seu caso não é abandonado nas mãos de terceiros. Nós garantimos que ambos os sócios debatem cada ponto estratégico, unindo visões para assegurar a melhor tese e a máxima precisão de conduta legal.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTAButton className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-navy-base hover:bg-[#070b19]" />
              <Link
                href="/contato"
                className="group flex items-center justify-center gap-2 border border-slate-200 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-600 hover:border-gold-base transition-all"
              >
                <span>Canais de Contato</span>
                <ArrowRight className="h-3.5 w-3.5 text-gold-light transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
