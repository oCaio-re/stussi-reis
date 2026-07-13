import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Gavel, Award, ShieldAlert, GraduationCap, MapPin, Scale } from "lucide-react";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Quem Somos | Stussi & Reis Consultoria Jurídica",
  description:
    "Conheça a história dos sócios Dr. Felipe Reis e Dr. Saulo Stussi e a filosofia de responsabilidade compartilhada do nosso escritório de advocacia em Niterói - RJ.",
  alternates: {
    canonical: "/sobre",
  },
};

export default function Sobre() {
  const lawyers = [
    {
      name: "Felipe Reis da Silva Oliveira",
      role: "Advogado Sócio",
      initials: "FR",
      description:
        "Profissional com sólida experiência em Direito Cível e do Consumidor. Focado em soluções de conflitos contratuais, indenizações e proteção do consumidor contra práticas comerciais abusivas de grandes corporações.",
      education: [
        "Bacharel em Direito",
        "Especialista em Direito do Consumidor e Responsabilidade Civil",
        "Membro ativo da OAB/RJ",
      ],
    },
    {
      name: "Saulo Pedroso Stussi Júnior",
      role: "Advogado Sócio",
      initials: "SS",
      description:
        "Profissional com ampla atuação em Direito de Família e Direito Previdenciário. Dedicado à defesa e planejamento previdenciário, benefícios do INSS, além de conduzir mediações e processos de direito sucessório e familiar de forma humanizada.",
      education: [
        "Bacharel em Direito",
        "Especialista em Direito de Família, Sucessões e Direito Previdenciário",
        "Membro ativo da OAB/RJ",
      ],
    },
  ];

  return (
    <div className="relative">
      
      {/* Intro & Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Title / Intro */}
          <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-down reveal-hidden">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-base tracking-wide">
              Sobre o Escritório
            </h1>
            <p className="text-sm sm:text-base text-gold-muted mt-2 uppercase tracking-widest font-semibold">
              Nossa História e Filosofia
            </p>
            <div className="mt-4 h-0.5 w-20 bg-gold-base mx-auto" />
            <p className="mt-6 text-slate-600 leading-relaxed text-base">
              Buscamos redefinir o conceito de prestação de serviço jurídico através de um atendimento ágil, comunicação direta e técnica de alto nível.
            </p>
          </div>

          {/* Story Section */}
          <ScrollReveal animation="fade-in-up" delayClass="delay-100">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center mb-12">
              <div className="space-y-6">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-navy-base">
                  Compromisso com a Justiça e a Transparência
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  O escritório <strong className="text-navy-base font-bold">Stussi & Reis Consultoria Jurídica</strong> nasceu com o objetivo de preencher a lacuna deixada pela advocacia tradicional de massa. Acreditamos que cada cliente possui necessidades únicas que exigem soluções cirúrgicas e individualizadas.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Sediados estrategicamente no Centro de <strong className="text-navy-base font-bold">Niterói, RJ</strong>, estruturamos nossa prática operacional para garantir total acessibilidade. Nossos clientes não conversam com intermediários ou estagiários; eles tratam diretamente com os advogados sócios responsáveis por suas causas.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Pautamos nossa atuação na ética inegociável, no estudo aprofundado da jurisprudência mais recente e na clareza de comunicação. Nossos relatórios são simples de compreender e nossas decisões são tomadas de comum acordo com o cliente.
                </p>
              </div>
              
              <div className="rounded-2xl border border-gold-base/15 bg-white p-8 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gold-base/5 blur-2xl" />
                <Scale className="h-10 w-10 text-gold-base mb-6" />
                <h3 className="text-lg font-serif font-bold text-navy-base mb-4">
                  Nossa Missão, Visão e Valores
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-base/10 text-gold-base font-bold text-xs">
                      M
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-base text-sm">Missão</h4>
                      <p className="text-xs text-slate-600 mt-1">Prestar assistência jurídica com excelência, fornecendo estratégias preventivas e contenciosas ágeis e eficazes para resguardar os interesses de nossos clientes.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-base/10 text-gold-base font-bold text-xs">
                      V
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-base text-sm">Visão</h4>
                      <p className="text-xs text-slate-600 mt-1">Ser referência em advocacia personalizada e humanizada no estado do Rio de Janeiro, reconhecidos pela integridade técnica e transparência absoluta.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-base/10 text-gold-base font-bold text-xs">
                      V
                    </div>
                    <div>
                      <h4 className="font-bold text-navy-base text-sm">Valores</h4>
                      <p className="text-xs text-slate-600 mt-1">Ética inegociável, dedicação integral à causa, clareza verbal, atendimento ágil direto pelo celular e responsabilidade mútua.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Method of Work Section */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fade-in-up" delayClass="delay-200">
            <div className="rounded-3xl border border-gold-base/20 bg-white p-8 md:p-12 shadow-[0_12px_40px_-12px_rgba(10,17,40,0.06)]">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <h3 className="font-serif text-2xl font-bold text-navy-base tracking-wide">
                  Como Trabalhamos: Responsabilidade Compartilhada
                </h3>
                <p className="text-sm text-gold-muted mt-1 uppercase tracking-wider font-semibold">
                  Um Método Diferenciado
                </p>
              </div>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 text-sm leading-relaxed text-slate-600">
                <p>
                  Em muitos escritórios grandes, os processos são distribuídos de forma fria e divididos entre diferentes setores. No <strong className="text-navy-base font-bold">Stussi & Reis</strong>, acreditamos no poder da colaboração. Embora cada advogado conduza ativamente certas demandas, adotamos a revisão cruzada e análise em comitê interno para cada tese de defesa ou contrato redigido.
                </p>
                <p>
                  Isso significa que quando você contrata nosso escritório, você conta com o intelecto e a experiência de ambos os advogados sócios. O Dr. Felipe e o Dr. Saulo debatem os principais marcos do seu processo, reduzindo margens de erro e potencializando as chances de êxito na causa.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="py-20 bg-[#f8fafc] border-b border-slate-200/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-serif text-3xl font-bold text-navy-base tracking-wide">
              Os Advogados Sócios
            </h2>
            <p className="text-sm text-gold-muted mt-1 uppercase tracking-wider font-semibold">
              Corpo Jurídico de Elite
            </p>
            <div className="mt-4 h-0.5 w-16 bg-gold-base mx-auto" />
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {lawyers.map((lawyer, index) => {
              const delays = ["delay-100", "delay-200"];
              return (
                <ScrollReveal
                  key={lawyer.name}
                  animation="fade-in-up"
                  delayClass={delays[index]}
                  className="flex"
                >
                  <div
                    className={`rounded-2xl border border-gold-base/15 bg-white p-6 md:p-8 flex flex-col md:flex-row gap-6 relative shadow-[0_12px_40px_-12px_rgba(10,17,40,0.06)] overflow-hidden hover:scale-[1.03] hover:border-gold-base/35 transition-all duration-300 w-full`}
                  >
                    {/* Visual initials badge */}
                    <div className="flex h-20 w-20 md:h-24 md:w-24 shrink-0 items-center justify-center rounded-2xl border-2 border-gold-base bg-gold-base/5 font-serif text-2xl font-bold text-gold-base shadow-xl">
                      {lawyer.initials}
                    </div>

                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-navy-base">
                          {lawyer.name}
                        </h3>
                        <p className="text-sm text-gold-muted font-medium">{lawyer.role}</p>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {lawyer.description}
                      </p>

                      <div className="pt-2 border-t border-slate-100">
                        <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                          <GraduationCap className="h-4 w-4 text-gold-base" />
                          Qualificações & Foco
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-500">
                          {lawyer.education.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="h-1 w-1 rounded-full bg-gold-base" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-gradient-to-br from-navy-dark to-navy-base border border-gold-base/20 rounded-3xl p-8 md:p-12 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 h-32 w-32 rounded-full bg-gold-base/5 blur-2xl" />
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              Deseja conversar com nossos advogados?
            </h3>
            <p className="text-sm text-gray-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Estamos prontos para entender seu problema e atuar na defesa de seus direitos. Fale diretamente conosco agora mesmo por WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <WhatsAppCTAButton className="px-8 py-3.5 text-sm" />
              <Link
                href="/contato"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold tracking-wide text-white hover:border-gold-base/30 hover:bg-gold-base/10 transition-all duration-300"
              >
                Formulário de Contato
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
