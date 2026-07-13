import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, ShieldCheck, Heart, Landmark, Gavel, Award, Clock, ArrowRight } from "lucide-react";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";

export default function Home() {
  const practiceAreasSummary = [
    {
      title: "Direito Cível",
      description: "Resolução de litígios, contratos, responsabilidade civil, indenizações e assessoria preventiva de alta complexidade.",
      icon: Scale,
    },
    {
      title: "Direito do Consumidor",
      description: "Defesa ativa contra práticas abusivas, cobranças indevidas, problemas com serviços contratados e planos de saúde.",
      icon: ShieldCheck,
    },
    {
      title: "Direito de Família",
      description: "Atendimento humanizado para divórcios, partilha de bens, regulamentação de guarda, pensão alimentícia e inventários.",
      icon: Heart,
    },
    {
      title: "Direito Previdenciário",
      description: "Planejamento de aposentadoria, concessão e revisão de benefícios do INSS (aposentadorias, auxílios e BPC/LOAS).",
      icon: Landmark,
    },
  ];

  const highlights = [
    {
      title: "Atendimento Ágil",
      description: "Comunicação direta e descomplicada via WhatsApp com os próprios advogados sócios.",
      icon: Clock,
    },
    {
      title: "Foco em Resultados",
      description: "Estratégias jurídicas personalizadas para cada caso, buscando a solução mais rápida e eficiente.",
      icon: Gavel,
    },
    {
      title: "Compromisso e Ética",
      description: "Transparência total em todas as etapas do processo, mantendo o cliente sempre informado.",
      icon: Award,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 md:pt-36 md:pb-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-navy-light/40 via-navy-base to-navy-base">
        {/* Subtle background visual pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 flex flex-col text-center lg:text-left animate-fade-in-up reveal-hidden">
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 rounded-full border border-gold-base/20 bg-gold-base/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold-light mb-6 uppercase">
                <Scale className="h-3.5 w-3.5" />
                <span>Consultoria Jurídica Especializada</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                Defendendo seus direitos com{" "}
                <span className="text-gold-gradient block mt-1 sm:inline sm:mt-0">
                  excelência e ética
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                O escritório <strong className="text-white font-semibold">Stussi & Reis</strong> atua de forma dedicada e estratégica nas áreas Cível, Consumidor, Família e Previdenciário em Niterói - RJ.
              </p>
              
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <WhatsAppCTAButton className="w-full sm:w-auto px-8 py-4 text-base">
                  Falar com um Advogado
                </WhatsAppCTAButton>
                <Link
                  href="/atuacao"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-8 py-4 text-base font-semibold tracking-wide text-white hover:border-gold-base/30 hover:bg-gold-glow transition-all duration-300"
                >
                  <span>Ver Áreas de Atuação</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Hero Image / Logo Display */}
            <div className="lg:col-span-5 flex justify-center animate-scale-in reveal-hidden delay-200">
              <div className="relative group w-72 h-72 sm:w-96 sm:h-96">
                {/* Decorative glowing rings */}
                <div className="absolute inset-0 rounded-full bg-gold-base/10 blur-xl group-hover:bg-gold-base/15 transition-all duration-500" />
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-gold-dark via-gold-base to-gold-light opacity-30 group-hover:opacity-50 blur transition-all duration-500 animate-[spin_20s_linear_infinite]" />
                
                {/* Main Image container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border border-gold-base/30 bg-navy-dark shadow-2xl p-2">
                  <Image
                    src="/logo_square.jpeg"
                    alt="Logo Stussi & Reis"
                    fill
                    priority
                    className="object-cover rounded-full"
                    sizes="(max-w-768px) 288px, 384px"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-navy-dark/80 border-y border-gold-base/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const delays = ["delay-100", "delay-200", "delay-300"];
              return (
                <div
                  key={highlight.title}
                  className={`flex flex-col items-center text-center p-6 rounded-2xl border border-gold-base/15 bg-navy-card shadow-lg shadow-black/50 animate-fade-in-up reveal-hidden ${delays[index]}`}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold-base/10 text-gold-base">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white tracking-wide">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Practice Areas Summary */}
      <section className="py-24 bg-navy-base">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in reveal-hidden">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
              Áreas de Especialidade
            </h2>
            <p className="text-sm sm:text-base text-gold-muted mt-2 uppercase tracking-widest font-semibold">
              Nossa Atuação Jurídica
            </p>
            <div className="mt-4 h-0.5 w-20 bg-gold-base mx-auto" />
            <p className="mt-6 text-gray-400 leading-relaxed text-sm sm:text-base">
              Prestamos assessoria preventiva e contenciosa focada na melhor defesa de seus interesses. Clique nas áreas abaixo para saber mais detalhes sobre cada serviço.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {practiceAreasSummary.map((area, index) => {
              const Icon = area.icon;
              const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
              return (
                <div
                  key={area.title}
                  className={`glass-panel glass-panel-hover flex flex-col justify-between p-6 rounded-2xl transition-all duration-300 animate-fade-in-up reveal-hidden ${delays[index]}`}
                >
                  <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gold-base/10 text-gold-base border border-gold-base/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-white mb-3 tracking-wide">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed mb-6">
                      {area.description}
                    </p>
                  </div>
                  <Link
                    href="/atuacao"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gold-light hover:text-gold-base hover:translate-x-1 transition-all"
                  >
                    <span>Saiba mais</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lawyers Brief Section */}
      <section className="py-24 bg-navy-dark/70 border-t border-gold-base/5 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Rounded image container showcasing official brand */}
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border border-gold-base/20 shadow-2xl p-2 bg-navy-light/50">
                <Image
                  src="/logo_rounded.jpeg"
                  alt="Escritório Stussi & Reis"
                  fill
                  className="object-cover rounded-xl"
                  sizes="320px"
                />
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col text-center lg:text-left">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-wide">
                Os Advogados Sócios
              </h2>
              <p className="text-sm sm:text-base text-gold-muted mt-2 uppercase tracking-widest font-semibold">
                Dedicação Integral e Colaborativa
              </p>
              <div className="mt-4 h-0.5 w-20 bg-gold-base mx-auto lg:mx-0" />
              
              <p className="mt-6 text-gray-400 leading-relaxed">
                Fundado por <strong className="text-white font-semibold">Felipe Reis da Silva Oliveira</strong> e <strong className="text-white font-semibold">Saulo Pedroso Stussi Júnior</strong>, o escritório nasceu com o propósito de oferecer uma advocacia altamente técnica, personalizada e humanizada.
              </p>
              <p className="mt-4 text-gray-400 leading-relaxed">
                Ao contrário das estruturas tradicionais engessadas, promovemos uma atuação de responsabilidade compartilhada: ambos os sócios debatem e atuam conjuntamente em cada causa, unindo conhecimentos para garantir a estratégia mais robusta possível.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/sobre"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gold-base/30 bg-gold-base/10 px-8 py-3.5 text-sm font-semibold tracking-wide text-gold-light hover:bg-gold-base hover:text-navy-dark hover:border-gold-base transition-all duration-300"
                >
                  Conhecer Nossa História
                </Link>
                <WhatsAppCTAButton variant="secondary" className="w-full sm:w-auto px-8 py-3.5 text-sm">
                  Agendar com os Sócios
                </WhatsAppCTAButton>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-navy-light/35 via-navy-base to-navy-base border-t border-gold-base/5">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-gold-base/20 bg-navy-card px-6 py-12 shadow-2xl text-center sm:px-12 sm:py-20">
            {/* Decorative background glow */}
            <div className="absolute -top-32 -left-32 h-64 w-64 rounded-full bg-gold-base/5 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-gold-base/5 blur-3xl" />
            
            <div className="relative max-w-2xl mx-auto flex flex-col items-center">
              <Scale className="h-10 w-10 text-gold-base mb-6" />
              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Precisa de Assistência Jurídica?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
                Estamos prontos para analisar o seu caso e apresentar a melhor solução legal. Converse conosco imediatamente ou envie uma mensagem detalhada pelo nosso formulário.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <WhatsAppCTAButton className="w-full sm:w-auto px-8 py-4 text-base">
                  Conversar via WhatsApp
                </WhatsAppCTAButton>
                <Link
                  href="/contato"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-base font-semibold tracking-wide text-white hover:border-gold-base/30 hover:bg-gold-glow transition-all duration-300"
                >
                  Formulário de Contato
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
