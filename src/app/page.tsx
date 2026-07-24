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
          Seu benefício do INSS começa com a{" "}
          <span className="text-gold-light font-bold">orientação certa.</span>
        </>
      ),
      description: "Sabemos que lidar com o INSS pode ser complexo. Por isso, oferecemos atendimento jurídico especializado para analisar seu histórico previdenciário, esclarecer suas dúvidas e buscar a melhor estratégia para aposentadorias, benefícios e revisões, sempre com acompanhamento próximo e transparente.",
      image: "/foto_clientes_idosos_felipe.jpg",
      imageAlt: "Dr. Felipe Reis atendendo clientes idosos",
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
          <span className="text-gold-light font-bold">Planejamento e Benefícios do INSS</span>
        </>
      ),
      description: "Cada caso previdenciário exige uma análise cuidadosa. Nossa equipe avalia seu histórico de contribuições, identifica o benefício mais vantajoso e acompanha todo o procedimento perante o INSS, desde o pedido administrativo até a atuação judicial, quando necessária.",
      image: "/balanca_justica_premium.png",
      imageAlt: "Balança da Justiça dourada sobre mesa de mármore",
      isSeal: false,
      ctaText: "Consultar Especialista em INSS",
      ctaType: "whatsapp",
      ctaLink: "https://wa.me/5521988961729?text=Ol%C3%A1%20Dr.%20Felipe%2C%20gostaria%20de%20conversar%20sobre%20benef%C3%ADcio%20previdenci%C3%A1rio%20do%20INSS.",
      secondaryText: "Detalhes dos Serviços",
      secondaryHref: "/atuacao",
    },
    {
      badge: "Defesa do Consumidor & Direito Cível",
      title: (
        <>
          Defesa jurídica para consumidores que tiveram seus{" "}
          <span className="text-gold-light font-bold">direitos violados.</span>
        </>
      ),
      description: "Atuamos na proteção de consumidores que enfrentam problemas com bancos, empresas e prestadores de serviços. Cada caso é analisado de forma individual para definir a estratégia jurídica mais adequada, buscando a defesa dos seus direitos com segurança e transparência. Prestamos assessoria em demandas envolvendo golpes do Pix, fraudes bancárias, empréstimos consignados indevidos, cobranças abusivas, negativação indevida, planos de saúde, responsabilidade civil e questões contratuais.",
      image: "/foto_clientes_saulo.jpeg",
      imageAlt: "Dr. Saulo Stussi em atendimento jurídico",
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
      title: "Atendimento feito pelos Advogados",
      description: "No Stussi & Reis, seu atendimento é realizado diretamente pelos advogados responsáveis pelo caso. Você recebe orientação jurídica personalizada, acompanhamento próximo e acesso direto aos profissionais durante toda a sua jornada.",
      icon: Phone,
    },
    {
      title: "Estratégia para cada caso",
      description: "Antes de qualquer medida, analisamos cuidadosamente os fatos, documentos e possibilidades jurídicas para definir a estratégia mais adequada, sempre de forma individualizada e responsável.",
      icon: Gavel,
    },
    {
      title: "Confiança em cada etapa",
      description: "Acreditamos que um bom atendimento vai além do conhecimento jurídico. Por isso, prezamos pela transparência, comunicação clara e compromisso em manter nossos clientes informados durante todo o andamento do caso.",
      icon: Award,
    },
    {
      title: "Análise individualizada",
      description: "Cada cliente possui uma realidade diferente. Antes de indicar qualquer medida jurídica, realizamos uma avaliação detalhada do caso para orientar você sobre as possibilidades, os procedimentos e a estratégia mais adequada.",
      icon: Scale,
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
            
            {/* Left Column: Hero Copy Carousel Container (Grid stack ensures fixed height matching the largest slide) */}
            <div className="lg:col-span-7 grid grid-cols-1 grid-rows-1 items-center min-h-[380px]">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`col-start-1 row-start-1 transition-all duration-700 flex flex-col justify-center ${
                    idx === activeSlide
                      ? "opacity-100 translate-y-0 pointer-events-auto z-10"
                      : "opacity-0 -translate-y-4 pointer-events-none z-0"
                  }`}
                  aria-hidden={idx !== activeSlide}
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

            {/* Right Column: Visual carousel (Single photo frame matching the active slide) */}
            <div className="lg:col-span-5 flex justify-center items-center w-full mt-8 lg:mt-0">
              <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square border border-gold-base/20 p-3 bg-white shadow-2xl rounded-sm overflow-hidden">
                {/* Decorative glow */}
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
                    <div className="relative w-full h-full overflow-hidden border border-slate-200 bg-slate-50">
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-103"
                        sizes="(max-w-1024px) 100vw, 380px"
                        priority={idx === 0}
                      />
                      
                      {/* Floating Badge */}
                      <div className="absolute bottom-4 right-4 bg-[#070b19]/90 backdrop-blur-sm border border-gold-base/30 px-4 py-2 shadow-lg rounded-sm z-20 flex flex-col items-end">
                        <span className="font-serif text-[11px] font-bold text-white tracking-wide">
                          {slide.badge}
                        </span>
                        <span className="text-[7px] text-gold-light tracking-[0.2em] font-semibold uppercase mt-0.5">
                          Stussi & Reis
                        </span>
                      </div>
                    </div>
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-y-0 lg:divide-x divide-slate-100">
            {highlights.map((highlight) => {
              const Icon = highlight.icon;
              return (
                <div key={highlight.title} className="flex items-start gap-4 p-4 lg:px-8">
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
                Direito Previdenciário
              </h2>
              
              <h3 className="font-serif text-lg md:text-xl font-medium text-gold-dark italic">
                Especialistas em benefícios do INSS. Cuidamos do seu direito do início ao fim.
              </h3>
              
              <div className="h-[1px] w-20 bg-gold-base" />
              
              <p className="text-base text-slate-750 leading-relaxed font-normal">
                Sabemos que lidar com o INSS pode gerar muitas dúvidas e insegurança. Por isso, nossa equipe acompanha você em todas as etapas, desde a análise do caso até o requerimento administrativo ou, quando necessário, a atuação na Justiça.
              </p>
              
              <p className="text-base text-slate-750 leading-relaxed font-normal">
                Nosso objetivo é identificar o benefício mais vantajoso para a sua situação e buscar a melhor estratégia para que você exerça seus direitos com segurança e tranquilidade.
              </p>
              
              <div className="border border-slate-200 bg-white p-6 relative shadow-sm">
                <h4 className="text-sm font-bold text-navy-base uppercase tracking-wider mb-4 border-b border-slate-100 pb-2">
                  Como podemos ajudar você em questões relacionadas ao INSS:
                </h4>
                <ul className="grid grid-cols-1 gap-3">
                  {[
                    "Aposentadoria por Idade",
                    "Aposentadoria por Tempo de Contribuição",
                    "Aposentadoria Especial",
                    "Aposentadoria por Incapacidade Permanente (Invalidez)",
                    "Auxílio por Incapacidade Temporária (Auxílio-Doença)",
                    "Pensão por Morte",
                    "Salário-Maternidade",
                    "Benefício de Prestação Continuada (BPC/LOAS)",
                    "Revisão de Benefícios do INSS",
                    "Recursos Administrativos contra decisões do INSS",
                    "Ações Judiciais contra o INSS quando houver negativa indevida",
                  ].map((topic, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-755 font-semibold">
                      <span className="text-emerald-600 font-bold shrink-0">✔️</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-2 border-gold-base pl-4 py-1 space-y-3">
                <h4 className="text-sm font-bold text-navy-base uppercase tracking-wider">
                  Cada caso merece uma análise individual.
                </h4>
                <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-light">
                  Antes de solicitar qualquer benefício ao INSS, é importante verificar qual é a melhor estratégia para evitar prejuízos e aumentar as chances de reconhecimento do seu direito.
                </p>
                <p className="text-xs sm:text-sm text-slate-550 leading-relaxed font-light">
                  Nossa equipe realiza uma análise completa do seu histórico previdenciário para orientar você com clareza e segurança.
                </p>
                <p className="text-sm text-gold-dark font-bold italic">
                  Agende uma consulta e descubra qual é o melhor caminho para o seu caso.
                </p>
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
                    src="/foto_clientes_idosos_felipe.jpg"
                    alt="Dr. Felipe Reis atendendo clientes idosos"
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
                    Protegemos seus direitos contra fraudes, abusos e cobranças indevidas.
                  </p>
                  <p className="mt-4 text-sm text-slate-750 font-normal leading-relaxed mb-3">
                    Se você foi vítima de um golpe, sofreu uma fraude bancária ou teve seus direitos desrespeitados por uma empresa, nossa equipe está preparada para analisar seu caso e orientar sobre as medidas jurídicas cabíveis.
                  </p>
                  <p className="text-sm text-slate-750 font-normal leading-relaxed">
                    Atuamos de forma estratégica para buscar a defesa dos seus direitos, tanto na esfera administrativa quanto judicial, sempre com atendimento próximo e transparente.
                  </p>
                  
                  <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-4">
                    {[
                      "Golpes do Pix e fraudes bancárias",
                      "Empréstimos consignados e financiamentos não contratados",
                      "Cobranças abusivas e negativação indevida",
                      "Fraudes e falhas na prestação de serviços bancários",
                      "Negativa indevida de cobertura por planos de saúde",
                      "TOI e cobranças indevidas de energia elétrica",
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
                    Falar com Dr. Saulo (OAB/RJ 144.040)
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
                    Soluções jurídicas para conflitos patrimoniais, contratos e indenizações.
                  </p>
                  <p className="mt-4 text-sm text-slate-750 font-normal leading-relaxed">
                    Conflitos envolvendo contratos, cobranças, descumprimento de obrigações e pedidos de indenização exigem uma análise jurídica cuidadosa. Nossa equipe atua na prevenção e na resolução de litígios, buscando a estratégia mais adequada para a proteção dos seus direitos, tanto por negociação quanto pela via judicial.
                  </p>
                  
                  <ul className="mt-6 space-y-2.5 border-t border-slate-200 pt-4">
                    {[
                      "Indenizações por danos materiais, morais e lucros cessantes (quando cabível)",
                      "Elaboração, análise e revisão de contratos",
                      "Descumprimento de contratos e acordos",
                      "Cobranças judiciais, execuções e recuperação de créditos",
                      "Responsabilidade civil e reparação de prejuízos",
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
                    FALAR COM UM ADVOGADO
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
                  SOBRE OS SÓCIOS FUNDADORES
                </span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-navy-base">
                Advocacia próxima, estratégica e conduzida pelos próprios sócios.
              </h2>
              
              <div className="h-[1px] w-20 bg-gold-base mt-4 mb-6" />
              
              <p className="text-sm sm:text-base text-slate-750 leading-relaxed font-normal mb-4">
                No <strong className="text-navy-base font-semibold">Stussi & Reis Advocacia e Consultoria</strong>, acreditamos que cada cliente merece atenção individualizada. Por isso, desde o primeiro atendimento até a conclusão do caso, você é acompanhado diretamente pelos sócios do escritório.
              </p>
              
              <p className="text-sm sm:text-base text-slate-750 leading-relaxed font-normal">
                Fundado em 2017 pelos advogados <strong className="text-navy-base font-semibold">Felipe Reis (OAB/RJ 211.932)</strong> e <strong className="text-navy-base font-semibold">Saulo Stussi (OAB/RJ 144.040)</strong>, o escritório atua com foco em soluções jurídicas personalizadas, unindo experiência, estratégia e atendimento próximo para oferecer segurança e transparência em cada etapa.
              </p>

              <div className="my-6 p-4 bg-slate-50 border-l-2 border-gold-base text-xs text-slate-550 leading-relaxed font-light">
                Sempre que a complexidade do caso exigir, os sócios atuam de forma conjunta na definição da estratégia jurídica, proporcionando uma análise técnica criteriosa e uma condução alinhada aos interesses do cliente.
              </div>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="border-l border-gold-light pl-4 py-1">
                  <p className="text-sm font-bold text-navy-base">Dr. Felipe Reis</p>
                  <p className="text-[10px] text-gold-light font-bold uppercase tracking-wider mt-0.5">OAB/RJ 211.932</p>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">Especialista em Direito Previdenciário (INSS)</p>
                  <p className="text-xs text-slate-750 font-normal mt-2">Atua com foco em <strong>Direito Previdenciário</strong>, assessorando clientes na obtenção, revisão e restabelecimento de benefícios do INSS, além de realizar planejamento previdenciário minucioso para cada segurado.</p>
                </div>
                <div className="border-l border-gold-light pl-4 py-1">
                  <p className="text-sm font-bold text-navy-base">Dr. Saulo Stussi</p>
                  <p className="text-[10px] text-gold-light font-bold uppercase tracking-wider mt-0.5">OAB/RJ 144.040</p>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1">Especialista em Direito do Consumidor e Direito Cível</p>
                  <p className="text-xs text-slate-750 font-normal mt-2">Atua na defesa dos direitos dos consumidores e na resolução de demandas cíveis, prestando assessoria em casos envolvendo fraudes bancárias, golpes do Pix, cobranças indevidas, contratos, responsabilidade civil e pedidos de indenização, sempre com atuação técnica e estratégica.</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/sobre"
                  className="flex items-center justify-center gap-2 border border-slate-300 bg-white hover:border-gold-base px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-slate-700 transition-all"
                >
                  CONHECER NOSSA HISTÓRIA
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
                  title: "Agendamento da consulta",
                  description: "Entre em contato com nossa equipe para agendar sua consulta presencial ou por videoconferência, conforme sua disponibilidade.",
                  icon: MessageSquare,
                  active: true,
                },
                {
                  step: 2,
                  title: "Consulta jurídica",
                  description: "Durante a consulta, um advogado realizará a análise do seu caso, esclarecerá suas dúvidas e apresentará as possíveis soluções jurídicas.",
                  icon: Scale,
                },
                {
                  step: 3,
                  title: "Análise documental",
                  description: "Após a consulta, realizamos a conferência da documentação necessária e definimos a estratégia jurídica mais adequada para o seu caso.",
                  icon: FileText,
                },
                {
                  step: 4,
                  title: "Acompanhamento do caso",
                  description: "Após a contratação, iniciamos as medidas administrativas ou judiciais cabíveis e mantemos você informado sobre cada etapa do procedimento.",
                  icon: ShieldCheck,
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
