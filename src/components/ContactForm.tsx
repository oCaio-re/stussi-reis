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
    <div className="rounded-2xl border border-gold-base/15 bg-navy-card p-6 shadow-xl sm:p-8">
      <h3 className="text-xl font-serif font-bold text-white tracking-wide mb-6">
        Envie uma Mensagem
      </h3>

      {state?.success ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10 text-green-400">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Mensagem Enviada!</h4>
          <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
            {state.message}
          </p>
        </div>
      ) : (
        <form action={formAction} className="space-y-5">
          {/* General Message Error */}
          {state?.success === false && state.message && (
            <div className="flex items-center gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{state.message}</span>
            </div>
          )}

          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              disabled={isPending}
              className={`w-full rounded-lg border bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-base ${
                state?.errors?.name
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-gold-base"
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
              <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                disabled={isPending}
                className={`w-full rounded-lg border bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-base ${
                  state?.errors?.email
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-white/10 focus:border-gold-base"
                }`}
                placeholder="Ex: joao@email.com"
              />
              {state?.errors?.email && (
                <p className="mt-1.5 text-xs text-red-400">{state.errors.email}</p>
              )}
            </div>

            {/* Phone Field */}
            <div>
              <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                Telefone / WhatsApp
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                disabled={isPending}
                className={`w-full rounded-lg border bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-base ${
                  state?.errors?.phone
                    ? "border-red-500/50 focus:border-red-500"
                    : "border-white/10 focus:border-gold-base"
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
            <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Assunto
            </label>
            <select
              name="subject"
              id="subject"
              disabled={isPending}
              className="w-full rounded-lg border border-white/10 bg-navy-card px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-gold-base focus:border-gold-base"
            >
              <option value="Dúvida Geral">Dúvida Geral</option>
              <option value="Direito Cível">Direito Cível</option>
              <option value="Direito do Consumidor">Direito do Consumidor</option>
              <option value="Direito de Família">Direito de Família</option>
              <option value="Direito Previdenciário">Direito Previdenciário</option>
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
              Sua Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              disabled={isPending}
              className={`w-full rounded-lg border bg-white/[0.02] px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-gold-base ${
                state?.errors?.message
                  ? "border-red-500/50 focus:border-red-500"
                  : "border-white/10 focus:border-gold-base"
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
            className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-gold-dark via-gold-base to-gold-light px-5 py-3.5 text-sm font-bold text-navy-dark shadow-lg shadow-gold-glow hover:opacity-95 active:scale-[0.99] transition-all disabled:opacity-50"
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
