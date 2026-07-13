import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Scale, ShieldCheck, Heart, Landmark, HelpCircle, ArrowRight } from "lucide-react";
import WhatsAppCTAButton from "@/components/WhatsAppCTAButton";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Áreas de Atuação | Stussi & Reis Consultoria Jurídica",
  description:
    "Conheça em detalhes nossos serviços nas áreas de Direito Cível, Direito do Consumidor, Família e Previdenciário em Niterói - RJ.",
  alternates: {
    canonical: "/atuacao",
  },
};

export default function Atuacao() {
  const areas = [
    {
      title: "Direito Cível",
      subtitle: "Resolução de Litígios e Assessoria Contratual",
      icon: Scale,
      description:
        "Atuamos de forma estratégica para solucionar conflitos civis de variadas complexidades, tanto judicial quanto extrajudicialmente. Buscamos resguardar seus bens, garantir direitos de propriedade e estabelecer relações contratuais seguras.",
      topics: [
        "Elaboração, análise e revisão de Contratos diversos",
        "Ações de Indenização por Danos Morais e Materiais",
        "Cobrança de dívidas, execução de títulos e recuperação de créditos",
        "Questões de posse, propriedade e locação de imóveis (despejo, reintegração)",
        "Notificações extrajudiciais e acordos amigáveis preventivos",
      ],
    },
    {
      title: "Direito do Consumidor",
      subtitle: "Defesa do Cidadão contra Práticas Abusivas",
      icon: ShieldCheck,
      description:
        "O Código de Defesa do Consumidor protege os cidadãos contra abusos cometidos por fornecedores de produtos e serviços. Garantimos que seus direitos sejam plenamente respeitados frente a bancos, operadoras, varejo e concessionárias.",
      topics: [
        "Ações decorrentes de negativação indevida nos órgãos de proteção ao crédito (SPC/Serasa)",
        "Indenizações por falha na prestação de serviços ou produtos com defeito",
        "Problemas com operadoras de telefonia, internet e fornecimento de energia/água",
        "Ações contra abusos de Planos de Saúde (negativas de exames, cirurgias e reajustes)",
        "Problemas em transportes aéreos (atraso/cancelamento de voo e extravio de bagagem)",
      ],
    },
    {
      title: "Direito de Família e Sucessões",
      subtitle: "Atendimento Humanizado em Questões Familiares",
      icon: Heart,
      description:
        "Entendemos que conflitos familiares exigem sensibilidade, discrição e acolhimento. Conduzimos cada caso buscando preservar os laços afetivos e assegurar soluções dignas e justas na partilha de patrimônio e proteção de menores.",
      topics: [
        "Divórcio consensual ou litigioso (judicial e em cartório)",
        "Pacto antenupcial, união estável e dissolução de união",
        "Regulamentação de guarda de filhos, regime de visitas e convivência familiar",
        "Fixação, revisão, exoneração e execução de Pensão Alimentícia",
        "Inventários judiciais e extrajudiciais, testamentos e planejamento sucessório",
      ],
    },
    {
      title: "Direito Previdenciário",
      subtitle: "Planejamento e Concessão de Benefícios previdenciários",
      icon: Landmark,
      description:
        "Asseguramos que o trabalhador e o segurado do INSS recebam os benefícios a que têm direito legal por lei. Atuamos desde o planejamento preventivo da aposentadoria até a judicialização contra indeferimentos administrativos indevidos.",
      topics: [
        "Planejamento Previdenciário (cálculo de tempo de contribuição e simulação de valor)",
        "Encaminhamento e concessão de Aposentadorias (idade, tempo de contribuição, especial e invalidez)",
        "Concessão de auxílios (auxílio-doença, auxílio-acidente) e pensão por morte",
        "Requerimento de BPC/LOAS (Benefício de Prestação Continuada para idosos e portadores de deficiência)",
        "Revisão de benefícios previdenciários concedidos incorretamente pelo INSS",
      ],
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-in-down reveal-hidden">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-navy-base tracking-wide">
            Nossas Áreas de Atuação
          </h1>
          <p className="text-sm sm:text-base text-gold-muted mt-2 uppercase tracking-widest font-semibold">
            Serviços Jurídicos Especializados
          </p>
          <div className="mt-4 h-0.5 w-20 bg-gold-base mx-auto" />
          <p className="mt-6 text-slate-600 leading-relaxed text-base">
            O escritório Stussi & Reis atua de forma especializada com foco na resolução célere e eficiente de conflitos. Conheça as principais demandas que atendemos.
          </p>
        </div>

        {/* Detailed Areas List */}
        <div className="space-y-16">
          {areas.map((area, index) => {
            const Icon = area.icon;
            const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];
            return (
              <ScrollReveal
                key={area.title}
                animation="fade-in-up"
                delayClass={delays[index % 4]}
                className="flex"
              >
                <div
                  className="relative overflow-hidden rounded-3xl border border-gold-base/15 bg-white p-6 md:p-10 shadow-[0_12px_40px_-12px_rgba(10,17,40,0.06)] hover:scale-[1.01] hover:border-gold-base/30 transition-all duration-300 w-full"
                >
                  {/* Visual background accents */}
                  <div className="absolute top-0 right-0 h-32 w-32 rounded-full bg-gold-base/5 blur-2xl" />
                  
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    
                    {/* Left Column: Description */}
                    <div className="lg:w-1/2 space-y-4">
                      <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-base/20 bg-gold-base/5 text-gold-base">
                        <Icon className="h-7 w-7" />
                      </div>
                      <div>
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy-base">
                          {area.title}
                        </h2>
                        <p className="text-xs font-bold uppercase tracking-wider text-gold-muted mt-1">
                          {area.subtitle}
                        </p>
                      </div>
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed pt-2">
                        {area.description}
                      </p>
                      <div className="pt-6">
                        <WhatsAppCTAButton className="px-8 py-3.5 text-sm" variant="outline">
                          Agendar Consulta nesta Área
                        </WhatsAppCTAButton>
                      </div>
                    </div>

                    {/* Right Column: Typical Issues (Topics) */}
                    <div className="lg:w-1/2 w-full rounded-2xl p-6 md:p-8 space-y-4 shadow-sm border bg-slate-50 border-slate-200/60">
                      <h3 className="text-xs font-bold uppercase tracking-wider border-b pb-2 text-navy-base border-slate-200/60">
                        Principais Demandas Atendidas:
                      </h3>
                      <ul className="space-y-3">
                        {area.topics.map((topic, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-base" />
                            <span className="leading-relaxed">{topic}</span>
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

        {/* Dynamic FAQ prompt */}
        <div className="mt-24 text-center max-w-2xl mx-auto rounded-3xl border border-gold-base/20 bg-gradient-to-br from-navy-dark to-navy-base p-8 shadow-2xl">
          <HelpCircle className="mx-auto h-8 w-8 text-gold-base mb-4" />
          <h3 className="font-serif text-xl font-bold text-white mb-2">
            Seu problema jurídico não está listado?
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed mb-6">
            O Direito abrange diversas situações específicas. Nossos advogados podem realizar uma análise preliminar do seu caso para verificar se podemos ajudá-lo ou encaminhá-lo ao profissional correto.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <WhatsAppCTAButton className="px-6 py-3 text-xs" />
            <Link
              href="/contato"
              className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-xs font-semibold tracking-wide text-white hover:border-gold-base/30 hover:bg-gold-base/10 transition-all duration-300"
            >
              Envie um E-mail
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
