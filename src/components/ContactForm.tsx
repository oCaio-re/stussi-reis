"use client";

import React, { useActionState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, ContactFormState } from "../app/actions";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  return (
    <div className="rounded-none border border-gold-base/15 bg-navy-card p-6 shadow-[0_12px_40px_-12px_rgba(10,17,40,0.06)] sm:p-8">
      <h3 className="text-xl font-serif font-bold text-slate-900 tracking-wide mb-6">
        Envie uma Mensagem
      </h3>

      {state?.success ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-none bg-green-500/10 text-green-400 border border-green-500/20">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900 mb-2">Mensagem Enviada!</h4>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            {state.message}
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-5">
          {/* General Message Error */}
          {state?.success === false && state.message && (
            <div className="flex items-center gap-3 rounded-none border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{state.message}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={isPending}
              className={`w-full rounded-none border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-base ${
                state?.errors?.name
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-slate-200 focus:border-gold-base"
              }`}
              placeholder="Ex: João da Silva"
            />
            {state?.errors?.name && (
              <p className="mt-1.5 text-xs text-red-400">{state.errors.name}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                disabled={isPending}
                className={`w-full rounded-none border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-base ${
                  state?.errors?.email
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-slate-200 focus:border-gold-base"
                }`}
                placeholder="Ex: joao@email.com"
              />
              {state?.errors?.email && (
                <p className="mt-1.5 text-xs text-red-400">{state.errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                disabled={isPending}
                className={`w-full rounded-none border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-base ${
                  state?.errors?.phone
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-slate-200 focus:border-gold-base"
                }`}
                placeholder="Ex: (21) 99999-9999"
              />
              {state?.errors?.phone && (
                <p className="mt-1.5 text-xs text-red-400">{state.errors.phone}</p>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-2">
              Assunto de Interesse
            </label>
            <select
              name="subject"
              id="subject"
              disabled={isPending}
              className="w-full rounded-none border border-slate-200 bg-white px-4 py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-700 focus:outline-none focus:ring-1 focus:ring-gold-base focus:border-gold-base transition-all"
            >
              <option value="Direito Previdenciário">Direito Previdenciário (INSS)</option>
              <option value="Direito do Consumidor">Direito do Consumidor</option>
              <option value="Direito Cível">Direito Cível</option>
              <option value="Dúvida Geral">Dúvida Geral</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Sua Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              disabled={isPending}
              className={`w-full rounded-none border bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-gold-base ${
                state?.errors?.message
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-slate-200 focus:border-gold-base"
              }`}
              placeholder="Descreva brevemente o seu caso para podermos analisar..."
            />
            {state?.errors?.message && (
              <p className="mt-1.5 text-xs text-red-400">{state.errors.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isPending}
            className="flex w-full items-center justify-center gap-2.5 rounded-none bg-gold-base px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-gold-dark active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer shadow-md"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Enviando Mensagem...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Enviar Solicitação</span>
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
