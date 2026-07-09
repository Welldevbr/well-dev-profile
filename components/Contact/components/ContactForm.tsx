"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { FormField } from "@/components/FormField";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { contactSchema } from "../schema";
import { ContactFormData, ContactFormField, SubmitEvent } from "../types";

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const fields: ContactFormField[] = [
  {
    name: "name",
    label: "Nome",
    placeholder: "Seu nome",
    autoComplete: "name",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    placeholder: "seu@email.com",
    autoComplete: "email",
    type: "email",
    required: true,
  },
  {
    name: "subject",
    label: "Assunto",
    placeholder: "Ex: Proposta de Trabalho, Projeto Freelancer...",
    autoComplete: "subject",
    required: false,
  },
  {
    name: "message",
    label: "Mensagem",
    placeholder: "Sua mensagem aqui...",
    autoComplete: "message",
    type: "textarea",
    required: true,
  },
];

export function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ContactFormData>({
    mode: "onChange",
    resolver: zodResolver(contactSchema),
    defaultValues: INITIAL_FORM_DATA,
  });

  const submitHandler = useCallback(
    (event: SubmitEvent) =>
      handleSubmit(async (data: ContactFormData) => {
        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          const result = await response.json();

          if (!response.ok) {
            throw new Error(
              result.error ?? "Ocorreu um erro ao enviar a mensagem.",
            );
          }

          toast.success(result.message ?? "Mensagem enviada com sucesso!");

          setIsSuccess(true);
          reset();
        } catch (error) {
          toast.error(
            error instanceof Error
              ? error.message
              : "Ocorreu um erro ao enviar a mensagem.",
          );
        } finally {
          setIsSuccess(false);
        }
      })(event),
    [handleSubmit, reset],
  );

  return (
    <div className="md:col-span-3">
      <form
        onSubmit={submitHandler}
        aria-busy={isSubmitting}
        className="space-y-6"
        autoComplete="off"
        data-lpignore="true"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {fields.slice(0, 2).map(({ name, label, ...field }) => (
            <FormField
              key={name}
              id={name}
              label={label}
              required={field.required}
              error={errors[name as keyof ContactFormData]}
            >
              <Input
                id={name}
                type={field.type || "text"}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                disabled={isSubmitting}
                aria-invalid={!!errors[name as keyof ContactFormData]}
                {...register(name)}
                data-lpignore="true"
              />
            </FormField>
          ))}
        </div>

        {fields.slice(2).map(({ name, label, ...field }) => (
          <FormField
            key={name}
            id={name}
            label={label}
            required={field.required}
            error={errors[name as keyof ContactFormData]}
          >
            {field.type === "textarea" ? (
              <Textarea
                id={name}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                disabled={isSubmitting}
                aria-invalid={!!errors[name as keyof ContactFormData]}
                {...register(name)}
              />
            ) : (
              <Input
                id={name}
                type={field.type || "text"}
                autoComplete={field.autoComplete}
                placeholder={field.placeholder}
                disabled={isSubmitting}
                aria-invalid={!!errors[name as keyof ContactFormData]}
                {...register(name)}
              />
            )}
          </FormField>
        ))}

        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          aria-live="polite"
          className="w-full gap-2.5 text-base font-medium"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Enviando...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle className="w-6 h-6" />
              Enviado!
            </>
          ) : (
            <>
              <Send className="w-6 h-6" />
              Enviar Mensagem
            </>
          )}

          <span className="sr-only" aria-live="polite">
            {isSubmitting
              ? "Enviando mensagem"
              : isSuccess
                ? "Mensagem enviada com sucesso"
                : ""}
          </span>
        </Button>
      </form>
    </div>
  );
}
