"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Scale, ShieldCheck, Gavel, Award, Clock, ArrowRight, BookOpen, Phone } from "lucide-react";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";
import ScrollReveal from "@/components/ScrollReveal";
import { useWhatsApp } from "@/context/WhatsAppContext";

export default function Home() {
  const { open: openWhatsApp } = useWhatsApp();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const slides = [
    {
      badge: "Advocacia e Consultoria Jurídica",
      title: (
        <>
          Defesa técnica de excelência sob a égide da{" "}
          <span className="text-gold-light italic">ética e transparência</span>
        </>
      ),
      description: "Com sede corporativa em Niterói - RJ, o escritório Stussi & Reis atua de forma estratégica nas áreas de Direito Previdenciário, Consumidor e Cível, oferecendo soluções personalizadas e acompanhamento próximo.",
      image: "/sr_monogram.svg",
      imageAlt: "Selo Stussi & Reis",
      isSeal: true,
      ctaText: "Agendar Consulta Técnica",
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
      description: "Dr. Felipe Reis e Dr. Saulo Stussi debatem conjuntamente as teses de cada causa. Atendimento direto pelos sócios fundadores, sem intermediários ou estagiários.",
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
      title: "Atendimento Directo e Pessoal",
      description: "Você fala diretamente com os advogados sócios responsáveis pela sua causa, sem intermediários ou estagiários.",
      icon: Clock,
    },
    {
      title: "Colegiado Técnico Interno",
      description: "Todas as teses e defesas são discutidas conjuntamente pelos sócios, multiplicando a precisão técnica.",
      icon: Gavel,
    },
    {
      title: "Rigor Ético (OAB)",
      description: "Atuação de caráter estritamente informativo, pautada na transparência total e sem falsas promessas de resultado.",
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

            {/* Right Column: Visual carousel (Symmetric borders) */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-80 h-80 border border-gold-base/20 p-3 bg-white shadow-lg overflow-hidden flex items-center justify-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold-base/5 blur-2xl z-0" />
                
                {slides.map((slide, idx) => (
                  <div
                    key={idx}
                    className={`absolute inset-3 transition-all duration-700 ${
                      idx === activeSlide
                        ? "opacity-100 scale-100 pointer-events-auto z-10"
                        : "opacity-0 scale-95 pointer-events-none z-0"
                    }`}
                  >
                    {slide.isSeal ? (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900/90 backdrop-blur-sm border border-gold-base/30 relative p-4">
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-gold-base" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-gold-base" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-gold-base" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-gold-base" />
                        
                        <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center border border-gold-base/30 bg-[#0a1128] shadow-inner">
                          <Image
                            src={slide.image}
                            alt={slide.imageAlt}
                            fill
                            priority
                            className="object-contain p-2.5"
                            sizes="80px"
                          />
                        </div>
                        <h3 className="font-serif text-base font-bold text-white tracking-widest uppercase">
                          Stussi & Reis
                        </h3>
                        <p className="text-[8px] text-gold-light tracking-[0.2em] font-semibold uppercase mt-0.5">
                          Registro OAB/RJ
                        </p>
                        <div className="h-[1px] w-16 bg-gold-base/20 mx-auto my-3" />
                        <p className="text-[10px] text-gray-400 font-light leading-relaxed px-2 text-center">
                          Consultoria estritamente alinhada ao Código de Ética e Disciplina da OAB.
                        </p>
                      </div>
                    ) : (
                      <div className="relative w-full h-full overflow-hidden border border-slate-200 bg-slate-50">
                        <Image
                          src={slide.image}
                          alt={slide.imageAlt}
                          fill
                          className="object-cover transition-transform duration-700 hover:scale-103"
                          sizes="(max-w-1024px) 100vw, 320px"
                          priority={idx === 0}
                        />
                      </div>
                    )}
                  </div>
                ))}
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
                Direito Previdenciário: Planejamento & Concessão de Benefícios
              </h2>
              
              <div className="h-[1px] w-20 bg-gold-base" />
              
              <p className="text-sm text-slate-600 leading-relaxed font-light">
                Com o objetivo de atuar futuramente de forma exclusiva nesta área, nosso escritório estruturou uma prática altamente eficiente voltada para o segurado do INSS. Prestamos assistência informativa para viabilizar direitos consolidados por lei, atuando com máxima celeridade nas vias administrativas e judiciais.
              </p>
              
              <div className="border border-slate-100 bg-white p-6 relative">
                <h4 className="text-xs font-bold text-navy-base uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  Atendimento voltado a pessoas físicas para:
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Aposentadoria por idade e tempo",
                    "Aposentadoria especial e invalidez",
                    "Revisão detalhada de benefícios",
                    "BPC/LOAS (Idoso e PCD)",
                    "Auxílio-doença e acidentário",
                    "Pensão por morte e auxílios",
                    "Recursos perante o INSS",
                    "Ações judiciais de concessão",
                  ].map((topic, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-500 font-light">
                      <span className="h-1 w-1 bg-gold-light" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <WhatsAppCTAButton className="px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white bg-navy-base hover:bg-navy-dark shadow-sm">
                  Consultar Meu Caso (INSS)
                </WhatsAppCTAButton>
                <Link
                  href="/atuacao"
                  className="group inline-flex items-center justify-center gap-1.5 border border-slate-200 bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-600 hover:border-gold-base transition-all"
                >
                  <span>Detalhes dos Serviços</span>
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
                    Defesa Ativa Contra Práticas Abusivas
                  </p>
                  <p className="mt-4 text-xs text-slate-500 font-light leading-relaxed">
                    Atuação em litígios de consumo cotidianos e complexos, defendendo o cliente pessoa física contra abusos bancários, fraudes e falhas de prestação de serviços.
                  </p>
                  
                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                    {[
                      "Golpes bancários e fraudes via PIX",
                      "Empréstimos consignados indevidos",
                      "Negativação indevida (SPC e Serasa) e cobranças abusivas",
                      "Problemas com Planos de Saúde e Concessionárias",
                      "Danos morais por problemas em cias aéreas e produtos",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-gold-light" />
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
                    Falar com Dr. Felipe
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
                    Resolução de Litígios e Contratos
                  </p>
                  <p className="mt-4 text-xs text-slate-500 font-light leading-relaxed">
                    Consultoria preventiva e contencioso civil para assegurar cumprimento de obrigações, confecção de contratos sólidos e reparação de danos civis.
                  </p>
                  
                  <ul className="mt-6 space-y-2 border-t border-slate-100 pt-4">
                    {[
                      "Elaboração e revisão de contratos civis",
                      "Responsabilidade civil e indenizações por danos",
                      "Ações de cobrança, execuções de títulos e créditos",
                      "Notificações extrajudiciais e acordos preventivos",
                      "Obrigações de fazer/não fazer e conflitos diversos",
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                        <span className="mt-1.5 h-1 w-1 shrink-0 bg-gold-light" />
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
                    Falar com Dr. Saulo
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
                Advocacia Pessoal e Responsabilidade Cruzada
              </h2>
              
              <div className="h-[1px] w-20 bg-gold-base mt-4 mb-6" />
              
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                O escritório foi fundado por <strong className="text-navy-base font-semibold">Felipe Reis da Silva Oliveira</strong> e <strong className="text-navy-base font-semibold">Saulo Pedroso Stussi Júnior</strong> em 2017, pautado no princípio do atendimento individualizado. Aqui, as estratégias e teses defensivas são analisadas em conjunto por ambos os sócios, garantindo dupla verificação técnica para resguardar a segurança dos processos.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l border-gold-light pl-4 py-1">
                  <p className="text-sm font-bold text-navy-base">Dr. Felipe Reis</p>
                  <p className="text-[10px] text-gold-light uppercase tracking-wider mt-0.5">Previdenciário, Consumidor e Cível</p>
                  <p className="text-xs text-slate-500 font-light mt-2">Especialista em Direito do Consumidor e Responsabilidade Civil com foco em INSS.</p>
                </div>
                <div className="border-l border-gold-light pl-4 py-1">
                  <p className="text-sm font-bold text-navy-base">Dr. Saulo Stussi</p>
                  <p className="text-[10px] text-gold-light uppercase tracking-wider mt-0.5">Consumidor e Cível</p>
                  <p className="text-xs text-slate-500 font-light mt-2">Especialista em Direito Processual Civil com atuação preventiva e contenciosa corporativa.</p>
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

      {/* CTA Bottom Section - Deep Navy elegant prompt */}
      <section className="py-20 bg-[#070b19] border-t border-slate-800 text-white relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(140,118,83,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(140,118,83,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            <Scale className="h-8 w-8 text-gold-light mb-6" />
            <h2 className="font-serif text-3xl font-normal text-white">
              Precisa de Orientação Jurídica?
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
              Consulte seu caso diretamente com os sócios fundadores. Realizamos análise preliminar de viabilidade e orientamos sobre a documentação necessária para INSS ou ações civis.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <WhatsAppCTAButton className="w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-gold-base hover:bg-gold-dark shadow-md transition-all">
                Iniciar Atendimento no WhatsApp
              </WhatsAppCTAButton>
              <Link
                href="/contato"
                className="flex w-full sm:w-auto items-center justify-center gap-2 border border-slate-700 bg-white/5 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white hover:border-gold-base hover:bg-white/10 transition-all duration-300"
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
