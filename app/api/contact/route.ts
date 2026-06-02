import { NextRequest, NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

import fs from "fs";
import path from "path";

const templatePath = path.join(process.cwd(), "emails/email-template.html");
let html = fs.readFileSync(templatePath, "utf-8");

export async function POST(request: NextRequest) {
  const { name, email, subject, message } = await request.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json(
      { error: "Todos os campos são obrigatórios." },
      { status: 400 },
    );
  }

  const now = new Date();
  const initial = name.charAt(0).toUpperCase();

  html = html
    .replaceAll("{{name}}", name)
    .replaceAll("{{email}}", email)
    .replaceAll("{{subject}}", subject)
    .replaceAll("{{message}}", message.replace(/\n/g, "<br/>"))
    .replaceAll("{{initial}}", initial)
    .replaceAll("{{date}}", now.toLocaleDateString("pt-BR"))
    .replaceAll(
      "{{time}}",
      now.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
    );

  const { data, error } = await resend.emails.send({
    from: "Formulário contato <onboarding@resend.dev>",
    to: "well.santanabr@gmail.com",
    replyTo: email,
    subject: subject
      ? `[Contato] ${subject}`
      : `[Contato] Nova mensagem de ${name}`,
    html,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}
