"use server";

import { Resend } from "resend";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
}

const PRIMARY_DESTINATION_EMAIL = "stussi.reis.advocacia@gmail.com";
const CC_EMAILS = [
  "felipefrso@gmail.com",
  "saulostussi.adv@gmail.com",
];

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim() || "";
  const email = (formData.get("email") as string)?.trim() || "";
  const phone = (formData.get("phone") as string)?.trim() || "";
  const subject = (formData.get("subject") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim() || "";

  // Validação dos campos
  const errors: Record<string, string> = {};

  if (!name || name.length < 3) {
    errors.name = "O nome deve conter pelo menos 3 caracteres.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Insira um endereço de e-mail válido.";
  }

  if (!phone || phone.length < 8) {
    errors.phone = "Insira um telefone para contato.";
  }

  if (!message || message.length < 10) {
    errors.message = "A mensagem deve conter pelo menos 10 caracteres.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Por favor, corrija os erros no formulário antes de enviar.",
      errors,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn("⚠️ RESEND_API_KEY não foi configurada nas variáveis de ambiente. Simulação de envio:");
    console.log(`De: ${name} <${email}>`);
    console.log(`Para: ${PRIMARY_DESTINATION_EMAIL}`);
    console.log(`Cc: ${CC_EMAILS.join(", ")}`);
    console.log(`Assunto: ${subject}`);
    console.log(`Mensagem: ${message}`);

    return {
      success: true,
      message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Site Stussi & Reis <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: PRIMARY_DESTINATION_EMAIL,
      cc: CC_EMAILS,
      replyTo: email,
      subject: `[Contato Site] ${subject || "Nova mensagem"}: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff;">
          <div style="background-color: #070b19; padding: 24px; text-align: center; border-radius: 6px 6px 0 0;">
            <h2 style="color: #c5a059; margin: 0; font-size: 20px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
              Stussi & Reis Advocacia
            </h2>
            <p style="color: #94a3b8; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 0.5px;">
              Nova Mensagem de Contato pelo Site
            </p>
          </div>
          
          <div style="padding: 24px;">
            <p style="font-size: 14px; color: #475569; margin-bottom: 20px;">
              Você recebeu uma nova mensagem enviada através do formulário de contato do site:
            </p>
            
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 140px;">Nome:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(name)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">E-mail:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${escapeHtml(email)}" style="color: #0284c7; text-decoration: none;">${escapeHtml(email)}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Telefone:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;">${escapeHtml(phone)}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Assunto de Interesse:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9;"><span style="background-color: #f8fafc; padding: 4px 8px; border-radius: 4px; border: 1px solid #e2e8f0; font-weight: 500;">${escapeHtml(subject || "Não especificado")}</span></td>
              </tr>
            </table>
            
            <div style="margin-top: 24px; padding: 16px; background-color: #f8fafc; border-left: 4px solid #c5a059; border-radius: 4px;">
              <p style="font-weight: bold; margin: 0 0 8px 0; font-size: 12px; color: #1e293b; text-transform: uppercase; letter-spacing: 0.5px;">Mensagem enviada pelo cliente:</p>
              <p style="margin: 0; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap;">${escapeHtml(message)}</p>
            </div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 16px 24px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; border-radius: 0 0 6px 6px;">
            Mensagem enviada automaticamente a partir de stussiereis.com.br. Para responder diretamente ao cliente, basta responder a este e-mail.
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Erro ao enviar e-mail via Resend:", error);
      return {
        success: false,
        message: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou entre em contato via WhatsApp.",
      };
    }

    console.log("✅ E-mail enviado com sucesso via Resend. ID:", data?.id);

    return {
      success: true,
      message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
    };
  } catch (err) {
    console.error("Exceção ao enviar e-mail via Resend:", err);
    return {
      success: false,
      message: "Ocorreu uma falha ao processar o envio. Por favor, tente novamente ou entre em contato via WhatsApp.",
    };
  }
}
