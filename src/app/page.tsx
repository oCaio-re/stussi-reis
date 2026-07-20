"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, ShieldCheck, Gavel, Award, Clock, ArrowRight, BookOpen, Phone, MessageSquare, Video, FileText, PenTool } from "lucide-react";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import { useWhatsApp } from "@/context/WhatsAppContext";

export default function Home() {
  const { open: openWhatsApp } = useWhatsApp();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      badge: "Direito Previdenciário & INSS",
      title: (
        <>
          Aposentadoria e Benefícios do INSS de forma{" "}
          <span className="text-gold-light italic">simples e sem burocracia</span>
        </>
      ),
      description: "Ajudamos você a conseguir o melhor benefício ou aposentadoria perante o INSS. Cuidamos de toda a papelada para você receber seu pagamento o quanto antes, com atendimento direto dos advogados sócios.",
      image: "/saulo e felipe.jpeg",
      imageAlt: "Sócios Felipe Reis e Saulo Stussi",
      isSeal: false,
      ctaText: "Falar com Advogado pelo WhatsApp",
      ctaType: "modal",
      secondaryText: "Conhecer Áreas de Atuação",
      secondaryHref: "/atuacao",
    },
    {
      badge: "Área de Foco Principal",
      title: (
        <>
          Direito Previdenciário:{" "}
          <span className="text-gold-light italic">Planejamento e Concessão</span>
        </>
      ),
      description: "Planejamento preventivo de aposentadoria e concessão de benefícios perante o INSS (BPC/LOAS, Auxílios, Pensões). Atuamos de forma a garantir celeridade administrativa e judicial.",
      image: "/office_interior.jpg",
      imageAlt: "Interior do escritório",
      isSeal: false,
      ctaText: "Consultar Especialista em INSS",
      ctaType: "whatsapp",
      ctaLink: "https://wa.me/5521988961729?text=Ol%C3%A1%20Dr.%20Felipe%2C%20gostaria%20de%20conversar%20sobre%20benef%C3%ADcio%20previdenci%C3%A1rio%20do%20INSS.",
      secondaryText: "Detalhes dos Serviços",
      secondaryHref: "/atuacao",
    },
    {
      badge: "Defesa do Consumidor & Cível",
      title: (
        <>
          Proteção contra abusos e{" "}
          <span className="text-gold-light italic">resolução de litígios</span>
        </>
      ),
      description: "Combate ativo a golpes de Pix, empréstimos consignados indevidos, negativas de planos de saúde, TOI, cobranças abusivas, conflitos de contratos e indenizações por danos.",
      image: "/legal_desk.jpg",
      imageAlt: "Mesa de trabalho jurídica",
      isSeal: false,
      ctaText: "Tratar de Contrato ou Fraude",
      ctaType: "modal",
      secondaryText: "Outras Especialidades",
      secondaryHref: "/atuacao",
    },
    {
      badge: "Sobre os Sócios Fundadores",
      title: (
        <>
          Advocacia pessoal com{" "}
          <span className="text-gold-light italic">responsabilidade cruzada</span>
        </>
      ),
      description: "O primeiro atendimento virtual realiza uma triagem inicial para direcionar seu caso. Em seguida, os sócios avaliam a demanda de forma personalizada e definem as estratégias em conjunto.",
      image: "/saulo e felipe.jpeg",
      imageAlt: "Sócios Felipe Reis e Saulo Stussi",
      isSeal: false,
      ctaText: "Falar com os Sócios",
      ctaType: "modal",
      secondaryText: "Conhecer Nossa História",
      secondaryHref: "/sobre",
    },
  ];

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  const highlights = [
    {
      title: "Atendimento Direto e Personalizado",
      description: "Você é atendido diretamente pelos advogados sócios, que acompanham pessoalmente todas as etapas do seu caso, garantindo proximidade, transparência e uma atuação estratégica.",
      icon: Clock,
    },
    {
      title: "Atuação Técnica e Estratégica",
      description: "Cada demanda é analisada pelos sócios do escritório, combinando conhecimento técnico, planejamento jurídico e soluções personalizadas para oferecer a melhor condução possível ao caso.",
      icon: Gavel,
    },
    {
      title: "Ética, Transparência e Compromisso",
      description: "Nossa atuação é pautada pelos princípios éticos da advocacia, com comunicação clara, transparência em todas as etapas e absoluto compromisso com a defesa dos direitos de nossos clientes.",
      icon: Award,
    },
  ];

  return (
    <div className="relative bg-background overflow-hidden min-h-screen">
      
      {/* Hero Section - Deep Navy & Premium Gold Accents (Interactive Carousel) */}
      <section 
        className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#070b19] text-white border-b border-slate-800"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle grid pattern for corporate high-end look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,118,83,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,118,83,0.06)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
        
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-gold-base/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-gold-base/5 blur-3xl" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Copy Carousel Container */}
            <div className="lg:col-span-7 relative h-[480px] sm:h-[380px] lg:h-[340px] flex flex-col justify-center">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-all duration-700 flex flex-col justify-center ${
                    idx === activeSlide
                      ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                      : "opacity-0 -translate-y-4 pointer-events-none z-0"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 mb-4">
                    <span className="h-px w-6 bg-gold-light" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gold-light">
                      {slide.badge}
                    </span>
                  </div>
                  
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal tracking-tight text-white leading-tight">
                    {slide.title}
                  </h1>
                  
                  <p className="mt-5 text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed font-light">
                    {slide.description}
                  </p>
                  
                  <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    {slide.ctaType === "whatsapp" ? (
                      <a
                        href={slide.ctaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-gold-base hover:bg-gold-dark shadow-md transition-all flex items-center justify-center gap-2 rounded-none cursor-pointer"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>{slide.ctaText}</span>
                      </a>
                    ) : (
                      <button
                        onClick={openWhatsApp}
                        className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-gold-base hover:bg-gold-dark shadow-md transition-all flex items-center justify-center gap-2 rounded-none cursor-pointer"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>{slide.ctaText}</span>
                      </button>
                    )}
                    <Link
                      href={slide.secondaryHref}
                      className="group flex w-full sm:w-auto items-center justify-center gap-2 rounded-none border border-slate-700 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-wider text-white hover:border-gold-base hover:bg-white/5 transition-all duration-300"
                    >
                      <span>{slide.secondaryText}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-gold-light transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Visual carousel replaced by Staggered Triptych Mosaic */}
            <div className="lg:col-span-5 flex justify-center items-center w-full">
              <div className="flex items-end justify-center gap-3 sm:gap-4 w-full max-w-md xl:max-w-lg h-[340px] sm:h-[400px] px-2">
                {/* Column 1: Saulo (Left - Shorter) */}
                <div className="relative w-[30%] h-[75%] border border-gold-base/20 p-1 bg-white shadow-md transition-all duration-500 hover:border-gold-base/60 hover:shadow-lg group/trip overflow-hidden rounded-sm">
                  <div className="relative w-full h-full overflow-hidden border border-slate-100">
                    <Image
                      src="/saulo.png"
                      alt="Dr. Saulo Stussi"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/trip:scale-105"
                      sizes="150px"
                    />
                  </div>
                </div>

                {/* Column 2: Both together (Center - Taller & Wider) */}
                <div className="relative w-[40%] h-[100%] border border-gold-base/25 p-1.5 bg-white shadow-xl transition-all duration-500 hover:border-gold-base/70 hover:shadow-2xl group/trip overflow-hidden rounded-sm z-10">
                  <div className="relative w-full h-full overflow-hidden border border-slate-100">
                    <Image
                      src="/saulo e felipe.jpeg"
                      alt="Felipe Reis e Saulo Stussi"
                      fill
                      priority
                      className="object-cover transition-transform duration-700 group-hover/trip:scale-105"
                      sizes="220px"
                    />
                  </div>
                </div>

                {/* Column 3: Felipe (Right - Medium) */}
                <div className="relative w-[30%] h-[85%] border border-gold-base/20 p-1 bg-white shadow-md transition-all duration-500 hover:border-gold-base/60 hover:shadow-lg group/trip overflow-hidden rounded-sm">
                  <div className="relative w-full h-full overflow-hidden border border-slate-100">
                    <Image
                      src="/foto felipe.jpeg"
                      alt="Dr. Felipe Reis"
                      fill
                      className="object-cover transition-transform duration-700 group-hover/trip:scale-105"
                      sizes="150px"
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Carousel Indicators / Progress Indicators below */}
          <div className="mt-12 flex justify-center lg:justify-start items-center gap-3 relative z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-[3px] transition-all duration-300 cursor-pointer ${
                  idx === activeSlide
                    ? "w-10 bg-gold-base"
                    : "w-4 bg-slate-700 hover:bg-slate-500"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* Pillars Section - Clean Slate & Symmetrical Lines */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.title} className="flex items-start gap-4 p-4 md:px-8">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-gold-base/20 bg-gold-base/5 text-gold-light">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-navy-base uppercase tracking-wider">
                      {highlight.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed font-light">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Focus: Direito Previdenciário (INSS) - Premium Two Column Feature */}
      <section className="py-24 bg-[#fcfdfd]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Info */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-none bg-gold-light" />
                <span className="text-[10px] font-bold text-gold-light uppercase tracking-widest">
                  Área de Foco Principal
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-navy-base leading-tight">
                Direito Previdenciário: Conquiste sua Aposentadoria e Benefício
              </h2>
              
              <div className="h-[1px] w-20 bg-gold-base" />
              
              <p className="text-base text-slate-750 leading-relaxed font-normal">
                Cuidamos de todo o processo para você obter seu benefício do INSS com segurança. Analisamos seu caso e indicamos o caminho mais rápido e vantajoso, tanto no posto do INSS quanto na Justiça, tirando todas as suas dúvidas.
              </p>
              
              <div className="border border-slate-200 bg-white p-6 relative shadow-sm">
                <h4 className="text-sm font-bold text-navy-base uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  Como ajudamos você a garantir seus direitos:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "Aposentadoria (por Idade, Tempo ou Especial)",
                    "Revisão de Valor de Aposentadorias",
                    "Auxílio-Doença (Incapacidade Temporária)",
                    "Aposentadoria por Invalidez",
                    "Pensão por Morte e Salário-Maternidade",
                    "BPC/LOAS (Idosos ou deficientes que não contribuíram)",
                    "Recurso caso o INSS negue o seu benefício",
                    "Processo na Justiça contra o INSS",
                  ].map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-755 font-semibold">
                      <span className="h-1.5 w-1.5 shrink-0 bg-gold-light rounded-full" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <WhatsAppCTAButton className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-navy-base hover:bg-navy-dark shadow-sm">
                  Consultar Meu Caso no WhatsApp
                </WhatsAppCTAButton>
                <Link
                  href="/atuacao"
                  className="group inline-flex items-center justify-center gap-1.5 border border-slate-300 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-700 hover:border-gold-base transition-all"
                >
                  <span>Ver Todos os Serviços</span>
                  <ArrowRight className="h-3 w-3 text-gold-light transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: Premium Generated Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full h-[360px] md:h-[420px] bg-slate-100 border border-gold-base/20 p-4 shadow-xl">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold-base/5 blur-2xl z-0" />
                <div className="relative w-full h-full overflow-hidden border border-slate-200">
                  <Image
                    src="/office_interior.jpg"
                    alt="Escritório Stussi & Reis"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-103"
                    sizes="(max-w-1024px) 100vw, 550px"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-navy-base text-white px-6 py-4 border border-gold-base/20 hidden md:block">
                <p className="font-serif text-sm font-bold tracking-wider text-gold-light uppercase">
                  Desde 2017
                </p>
                <p className="text-[9px] text-gray-300 font-light tracking-widest uppercase mt-0.5">
                  Atendimento Personalizado
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Secondary Practice Areas Section - Fine-lined Editorial Layout */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-gold-light uppercase tracking-[0.25em]">
              Especialidades Adicionais
            </span>
            <h2 className="font-serif text-3xl font-normal text-navy-base mt-2">
              Outras Áreas de Atuação
            </h2>
            <div className="h-[1px] w-12 bg-gold-base mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Card 1: Consumidor */}
            <ScrollReveal animation="fade-in-up" className="flex">
              <div className="border border-slate-200 p-8 flex flex-col justify-between hover:border-gold-base/30 transition-all duration-300 w-full bg-slate-50/50">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center border border-gold-base/20 bg-gold-base/5 text-gold-light mb-6">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-base">
                    Direito do Consumidor
                  </h3>
                  <p className="text-xs text-gold-light font-bold uppercase tracking-widest mt-1">
                    Defesa Contra Abusos e Fraudes
                  </p>
                  <p className="mt-4 text-sm text-slate-750 font-normal leading-relaxed">
                    Protegemos você contra abusos de bancos, operadoras e planos de saúde. Agimos rápido em casos de fraudes no Pix, empréstimos indevidos e cobranças erradas.
                  </p>
                  
                  <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-4">
                    {[
                      "Golpes e fraudes bancárias (incluindo Pix)",
                      "Empréstimos consignados indevidos",
                      "Cobranças abusivas e nome no SPC/Serasa",
                      "Problemas com bancos e planos de saúde",
                      "TOI (Cobrança abusiva na conta de luz)",
                      "Indenizações por danos materiais e morais",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-750 font-medium">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-light rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <Link
                    href="/atuacao"
                    className="group inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-navy-base hover:text-gold-light transition-colors"
                  >
                    <span>Ver lista completa</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <WhatsAppCTAButton className="px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider" variant="outline">
                    Falar com Dr. Felipe (OAB/RJ 211.932)
                  </WhatsAppCTAButton>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Cível */}
            <ScrollReveal animation="fade-in-up" delayClass="delay-200" className="flex">
              <div className="border border-slate-200 p-8 flex flex-col justify-between hover:border-gold-base/30 transition-all duration-300 w-full bg-slate-50/50">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center border border-gold-base/20 bg-gold-base/5 text-gold-light mb-6">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy-base">
                    Direito Cível
                  </h3>
                  <p className="text-xs text-gold-light font-bold uppercase tracking-widest mt-1">
                    Ações de Danos e Contratos
                  </p>
                  <p className="mt-4 text-sm text-slate-750 font-normal leading-relaxed">
                    Garantimos os seus direitos em disputas civis, cobranças de dívidas, problemas em contratos e ações para exigir o cumprimento de obrigações.
                  </p>
                  
                  <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-4">
                    {[
                      "Ações de indenização por danos",
                      "Cobranças judiciais e execução de dívidas",
                      "Indenizações por danos morais ou materiais",
                      "Exigir cumprimento de contratos e acordos",
                      "Elaboração e análise de contratos seguros",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-750 font-medium">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold-light rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8 pt-4 border-t border-slate-100 flex justify-between items-center">
                  <Link
                    href="/atuacao"
                    className="group inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-navy-base hover:text-gold-light transition-colors"
                  >
                    <span>Ver lista completa</span>
                    <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  <WhatsAppCTAButton className="px-5 py-2.5 text-[10px] font-bold uppercase tracking-wider" variant="outline">
                    Falar com Dr. Saulo (OAB/RJ 144.040)
                  </WhatsAppCTAButton>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Shared Responsibility & Team Brief Section */}
      <section className="py-24 bg-[#fcfdfd] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <BookOpen className="h-4 w-4 text-gold-light" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold-light">
                  Sobre os Sócios Fundadores
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-navy-base">
                Advocacia Próxima: Atendimento Direto com os Sócios
              </h2>
              
              <div className="h-[1px] w-20 bg-gold-base mt-4 mb-6" />
              
              <p className="text-sm sm:text-base text-slate-750 leading-relaxed font-normal">
                O escritório foi fundado em 2017 pelos advogados <strong className="text-navy-base font-semibold">Felipe Reis (OAB/RJ 211.932)</strong> e <strong className="text-navy-base font-semibold">Saulo Stussi (OAB/RJ 144.040)</strong>. Diferente de grandes escritórios, aqui você é atendido diretamente pelos donos. Cada caso é analisado em conjunto pelos dois sócios, garantindo dupla verificação para a segurança da sua causa.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l border-gold-light pl-4 py-1">
                  <p className="text-sm font-bold text-navy-base">Dr. Felipe Reis (OAB/RJ 211.932)</p>
                  <p className="text-[10px] text-gold-light uppercase tracking-wider mt-0.5">Previdenciário (INSS), Consumidor e Cível</p>
                  <p className="text-sm text-slate-750 font-normal mt-2">Como sócio do escritório, é especialista em Direito Previdenciário (INSS), atuando na concessão, revisão e defesa de benefícios de forma ágil e próxima. Também atua nas áreas de Direito do Consumidor e Cível.</p>
                </div>
                <div className="border-l border-gold-light pl-4 py-1">
                  <p className="text-sm font-bold text-navy-base">Dr. Saulo Stussi (OAB/RJ 144.040)</p>
                  <p className="text-[10px] text-gold-light uppercase tracking-wider mt-0.5">Consumidor e Civil</p>
                  <p className="text-sm text-slate-750 font-normal mt-2">Como sócio do escritório, é especialista em Direito do Consumidor e Direito Civil. Atua focado em proteger seus direitos contra abusos de empresas e buscar indenizações justas por prejuízos sofridos.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sobre"
                  className="flex items-center justify-center gap-2 border border-slate-300 bg-white hover:border-gold-base px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-700 transition-all"
                >
                  Conhecer Nossa História
                </Link>
                <WhatsAppCTAButton className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-navy-base hover:bg-navy-dark shadow-sm">
                  Agendar com os Sócios
                </WhatsAppCTAButton>
              </div>
            </div>

            {/* Right: Foto dos Sócios Felipe e Saulo juntos */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-80 h-80 border border-gold-base/20 p-3 bg-white shadow-lg">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-base/5 blur-2xl z-0" />
                <div className="relative w-full h-full overflow-hidden border border-slate-200">
                  <Image
                    src="/saulo e felipe.jpeg"
                    alt="Advogados Felipe Reis e Saulo Stussi"
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-103"
                    sizes="(max-w-1024px) 100vw, 320px"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works Section - "Como funciona nosso atendimento" */}
      <section className="py-24 bg-gradient-to-b from-[#0c1530] via-[#091026] to-[#070b19] border-t border-slate-800/60 text-white relative overflow-hidden">
        {/* Subtle grid pattern for corporate high-end look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,118,83,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,118,83,0.03)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)]" />
        
        {/* Glowing radial circles for premium depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-gold-base/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-10 h-72 w-72 rounded-full bg-blue-900/10 blur-[80px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] font-bold text-gold-light uppercase tracking-[0.3em]">
              Assessoria Jurídica
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mt-3">
              Como funciona <span className="text-gold-light italic">nosso atendimento</span>
            </h2>
            <div className="h-[1px] w-16 bg-gold-base/30 mx-auto mt-4" />
          </div>
 
          {/* Cards Grid with Connecting Line */}
          <div className="relative">
            {/* Horizontal Connecting Line (visible on lg screens) */}
            <div className="absolute top-1/2 left-[12%] right-[12%] h-[1px] bg-gold-base/15 -translate-y-1/2 hidden lg:block z-0" />
 
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: 1,
                  title: "Contato inicial",
                  description: "Entre em contato pelo WhatsApp para uma breve apresentação do seu caso e esclarecimento das primeiras dúvidas.",
                  icon: MessageSquare,
                  active: true, // First card highlighted as in the image
                },
                {
                  step: 2,
                  title: "Atendimento agendado",
                  description: "Agendamos uma consulta presencial ou por videochamada, conforme sua preferência e disponibilidade.",
                  icon: Video,
                },
                {
                  step: 3,
                  title: "Análise documental",
                  description: "Após o atendimento, organizamos a documentação necessária para análise técnica do seu caso.",
                  icon: FileText,
                },
                {
                  step: 4,
                  title: "Protocolo do processo",
                  description: "Realizamos o protocolo administrativo ou judicial e mantemos você informado sobre cada etapa.",
                  icon: PenTool,
                },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <ScrollReveal key={idx} animation="fade-in-up" delayClass={idx === 0 ? "" : idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : "delay-300"} className="flex">
                    <div className={`relative w-full bg-[#111a36]/40 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-300 group rounded-sm ${
                      item.active 
                        ? "border border-gold-base/80 shadow-[0_0_20px_rgba(197,160,89,0.12)]" 
                        : "border border-slate-800/80 hover:border-gold-base/40"
                    }`}>
                      {/* Step Badge */}
                      <div className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-gold-base text-[#070b19] flex items-center justify-center text-xs font-bold shadow-md z-20">
                        {item.step}
                      </div>
 
                      <div>
                        <div className="flex h-11 w-11 items-center justify-center border border-gold-base/20 bg-gold-base/5 text-gold-light mb-6 transition-all duration-300 group-hover:border-gold-base/40 group-hover:bg-gold-base/10">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-xs text-gray-300 leading-relaxed font-light">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
 
          {/* CTA Button */}
          <div className="mt-16 flex justify-center">
            <ScrollReveal animation="fade-in-up" delayClass="delay-400">
              <WhatsAppCTAButton className="px-10 py-4 text-xs font-bold uppercase tracking-widest text-gold-light bg-[#0a1128] border border-gold-base/50 hover:bg-gold-base hover:text-[#070b19] hover:border-gold-base shadow-md transition-all duration-300">
                Iniciar Atendimento
              </WhatsAppCTAButton>
            </ScrollReveal>
          </div>
        </div>
      </section>
 
      {/* CTA Bottom Section - Premium Light Card Layout */}
      <section className="py-24 bg-[#f8fafc] border-t border-slate-200 text-slate-800 relative overflow-hidden">
        {/* Subtle grid pattern for corporate high-end look */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,118,83,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,118,83,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
        
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white border border-gold-base/15 p-8 md:p-12 shadow-[0_20px_50px_rgba(140,118,83,0.06)] relative overflow-hidden text-center">
            {/* Elegant corner decorative lines */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold-base/30" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gold-base/30" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gold-base/30" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold-base/30" />
            
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              <Scale className="h-8 w-8 text-gold-light mb-6" />
              <h2 className="font-serif text-3xl font-normal text-navy-base">
                Precisa de Orientação Jurídica?
              </h2>
              <div className="h-[1px] w-12 bg-gold-base/20 my-4" />
              <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed mb-8">
                Consulte seu caso diretamente com os sócios fundadores. Realizamos análise preliminar de viabilidade e orientamos sobre a documentação necessária para INSS ou ações civis.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                <WhatsAppCTAButton className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-navy-base border border-navy-base hover:bg-navy-dark hover:border-navy-dark shadow-md transition-all duration-300">
                  Iniciar Atendimento no WhatsApp
                </WhatsAppCTAButton>
                <Link
                  href="/contato"
                  className="flex w-full sm:w-auto items-center justify-center gap-2 border border-gold-base/50 bg-white px-8 py-4 text-xs font-bold uppercase tracking-widest text-gold-light hover:bg-gold-base hover:text-white transition-all duration-300"
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
