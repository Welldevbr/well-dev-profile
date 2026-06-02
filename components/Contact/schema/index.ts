import z from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Informe seu nome."),
  email: z.email("Informe um email válido."),
  subject: z.string().optional(),
  message: z
    .string()
    .min(10, "A mensagem deve conter pelo menos 10 caracteres."),
});
