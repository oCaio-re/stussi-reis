"use server";

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

export async function submitContactForm(
  prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Simular delay de envio de rede
  await new Promise((resolve) => setTimeout(resolve, 800));

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  // Validação simples
  const errors: Record<string, string> = {};

  if (!name || name.trim().length < 3) {
    errors.name = "O nome deve conter pelo menos 3 caracteres.";
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Insira um endereço de e-mail válido.";
  }

  if (!phone || phone.trim().length < 8) {
    errors.phone = "Insira um telefone para contato.";
  }

  if (!message || message.trim().length < 10) {
    errors.message = "A mensagem deve conter pelo menos 10 caracteres.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Falha na validação do formulário.",
      errors,
    };
  }

  // LOG DE SIMULAÇÃO (Será impresso no terminal do servidor do Next.js)
  console.log("==================================================");
  console.log("📬 NOVA MENSAGEM RECEBIDA PELO SITE:");
  console.log(`👤 Nome: ${name}`);
  console.log(`📧 E-mail: ${email}`);
  console.log(`📞 Telefone: ${phone}`);
  console.log(`📝 Assunto: ${subject || "Sem assunto especificado"}`);
  console.log(`💬 Mensagem: \n"${message}"`);
  console.log("==================================================");

  /**
   * GUIA DE INTEGRAÇÃO COM SERVIÇO DE E-MAIL (Ex: Resend):
   * 
   * Para enviar este formulário de verdade para o seu e-mail, instale o Resend:
   * `npm install resend`
   * 
   * E substitua a simulação acima pelo seguinte código:
   * 
   * import { Resend } from 'resend';
   * const resend = new Resend(process.env.RESEND_API_KEY);
   * 
   * await resend.emails.send({
   *   from: 'Site Stussi & Reis <contato@stussiereis.com.br>',
   *   to: 'contato@stussiereis.com.br', // Seu e-mail de recebimento
   *   subject: `Novo contato [${subject}]: ${name}`,
   *   html: `<p><strong>Nome:</strong> ${name}</p>
   *          <p><strong>E-mail:</strong> ${email}</p>
   *          <p><strong>Telefone:</strong> ${phone}</p>
   *          <p><strong>Mensagem:</strong> ${message}</p>`
   * });
   */

  return {
    success: true,
    message: "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.",
  };
}
