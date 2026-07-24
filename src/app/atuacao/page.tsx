import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Scale, ShieldCheck, Landmark, HelpCircle, ArrowRight } from "lucide-react";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Stussi & Reis Advocacia",
  description:
    "Serviços jurídicos especializados em Direito Previdenciário (INSS), Direito do Consumidor e Direito Cível em Niterói - RJ. Atendimento focado em ética e conformidade.",
  alternates: {
    canonical: "/atuacao",
  },
};

export default function Atuacao() {
  const areas = [
    {
      title: "Direito Previdenciário",
      subtitle: "Planejamento e Benefícios do INSS",
      icon: Landmark,
      description:
        "Cada caso previdenciário exige uma análise cuidadosa. Nossa equipe avalia seu histórico de contribuições, identifica o benefício mais vantajoso e acompanha todo o procedimento perante o INSS, desde o pedido administrativo até a atuação judicial, quando necessária.",
      topics: [
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
      ],
      whatsappCustom: "Olá Dr. Felipe, gostaria de agendar uma consulta sobre benefício previdenciário/INSS.",
    },
    {
      title: "Direito do Consumidor",
      subtitle: "Protegemos seus direitos contra fraudes, abusos e cobranças indevidas.",
      icon: ShieldCheck,
      description:
        "Se você foi vítima de um golpe, sofreu uma fraude bancária ou teve seus direitos desrespeitados por uma empresa, nossa equipe está preparada para analisar seu caso e orientar sobre as medidas jurídicas cabíveis. Atuamos de forma estratégica para buscar a defesa dos seus direitos, tanto na esfera administrativa quanto judicial, sempre com atendimento próximo e transparente.",
      topics: [
        "Golpes do Pix e fraudes bancárias",
        "Empréstimos consignados e financiamentos não contratados",
        "Cobranças abusivas e negativação indevida",
        "Fraudes e falhas na prestação de serviços bancários",
        "Negativa indevida de cobertura por planos de saúde",
        "TOI e cobranças indevidas de energia elétrica",
        "Indenizações por danos materiais e morais",
        "Cancelamento de contratos",
        "Defeito em produtos e serviços",
        "Problemas com companhias aéreas",
      ],
      whatsappCustom: "Olá, gostaria de conversar sobre um problema de Direito do Consumidor.",
    },
    {
      title: "Direito Cível",
      subtitle: "Consultoria Contratual e Reparação de Danos",
      icon: Scale,
      description:
        "Assessoria voltada para regular relações civis privadas, garantir cumprimento de obrigações firmadas e buscar indenizações justas por ilícitos civis. Atuação estratégica focada na prevenção de litígios.",
      topics: [
        "Ações de indenização",
        "Cobranças e execuções",
        "Responsabilidade civil",
        "Obrigações de fazer e não fazer",
        "Conflitos contratuais",
      ],
      whatsappCustom: "Olá, gostaria de agendar uma consulta na área de Direito Cível.",
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
              Nossa Atuação Especializada
            </span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-normal text-navy-base">
            Áreas de Atuação Jurídica
          </h1>
          <div className="mt-4 h-[1px] w-20 bg-gold-base mx-auto" />
          <p className="mt-6 text-sm text-slate-500 leading-relaxed font-light">
            O escritório Stussi & Reis presta assessoria informativa e representação estratégica focada em soluções ágeis. Nossos textos e pareceres são redigidos de forma clara para que o cliente compreenda perfeitamente cada etapa processual.
          </p>
        </div>

        {/* Detailed Layout: 2 Columns (Decorative image left, Areas right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Fixed/Floating Card with Stock Photo */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="border border-slate-200 p-4 bg-white shadow-md">
              <div className="relative w-full h-56 bg-slate-100 border border-slate-200 overflow-hidden mb-6">
                <Image
                  src="/legal_desk.jpg"
                  alt="Mesa de trabalho de Direito"
                  fill
                  className="object-cover"
                  sizes="(max-w-1024px) 100vw, 350px"
                />
              </div>
              <h3 className="font-serif text-base font-bold text-navy-base uppercase tracking-wider mb-2">
                Advocacia Ética & Informativa
              </h3>
              <p className="text-xs text-slate-500 font-light leading-relaxed">
                Todas as consultas e análises de viabilidade são pautadas no Código de Ética e Disciplina da OAB. Não garantimos êxitos antecipados em processos judiciais, mas nos comprometemos com o rigor técnico de cada tese.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-100">
                <p className="text-[10px] font-bold text-gold-light uppercase tracking-wider mb-1">
                  Atendimento Direto
                </p>
                <p className="text-xs text-slate-600 font-semibold mb-3">
                  Debate conjunto dos sócios em todas as causas.
                </p>
                <WhatsAppCTAButton className="w-full text-xs font-bold uppercase tracking-wider py-3" />
              </div>
            </div>
          </div>

          {/* Right Column: Detailed list of Areas */}
          <div className="lg:col-span-8 space-y-12">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <ScrollReveal
                  key={area.title}
                  animation="fade-in-up"
                  className="w-full"
                >
                  <div
                    className={`relative overflow-hidden border bg-white p-6 md:p-8 hover:border-gold-base/35 transition-all duration-300 ${
                      index === 0
                        ? "border-gold-base/30 shadow-md ring-1 ring-gold-base/5"
                        : "border-slate-200"
                    }`}
                  >
                    {/* Visual gold corner element for Previdenciário to give top highlight */}
                    {index === 0 && (
                      <div className="absolute top-0 right-0 bg-gold-base text-[#070b19] text-[8px] font-bold uppercase tracking-widest px-3 py-1">
                        Destaque
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-gold-base/20 bg-gold-base/5 text-gold-light">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h2 className="font-serif text-xl sm:text-2xl font-bold text-navy-base">
                            {area.title}
                          </h2>
                          <p className="text-[10px] font-bold uppercase tracking-wider text-gold-light mt-0.5">
                            {area.subtitle}
                          </p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed">
                        {area.description}
                      </p>

                      <div className="p-6 bg-slate-50 border border-slate-100">
                        <h3 className="text-[10px] font-bold uppercase tracking-widest text-navy-base border-b border-slate-200/60 pb-2 mb-4">
                          Escopo de Serviços / Principais Demandas:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                          {area.topics.map((topic, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-light">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold-light" />
                              <span className="leading-tight">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-[10px] text-slate-400 font-light">
                          * Análise documental de viabilidade inicial necessária.
                        </p>
                        <WhatsAppCTAButton 
                          className="w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-navy-base hover:bg-[#070b19]"
                        >
                          Conversar sobre esta Área
                        </WhatsAppCTAButton>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

        {/* FAQ prompt */}
        <div className="mt-28 text-center max-w-2xl mx-auto border border-slate-200 bg-white p-8 md:p-10 shadow-sm relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-base text-white p-2 rounded-none border border-gold-dark shadow-md">
            <HelpCircle className="h-5 w-5" />
          </div>
          <h3 className="font-serif text-lg font-bold text-navy-base mt-4 mb-2">
            Caso sua demanda não esteja explicitada acima
          </h3>
          <p className="text-xs text-slate-500 font-light leading-relaxed mb-6">
            O ordenamento jurídico abrange uma gama extensa de situações. Fale conosco para uma orientação preliminar. Caso a matéria necessite de outro especialista, faremos a recomendação ética adequada.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTAButton className="px-6 py-3 text-xs font-bold uppercase tracking-wider" />
            <Link
              href="/contato"
              className="group flex items-center justify-center gap-2 border border-slate-200 bg-white px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-600 hover:border-gold-base transition-all"
            >
              <span>Enviar Mensagem Escrita</span>
              <ArrowRight className="h-3.5 w-3.5 text-gold-light transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
