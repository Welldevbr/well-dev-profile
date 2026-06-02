import { BaseSyntheticEvent } from "react";
import { contactSchema } from "../schema";
import z from "zod";

export type ContactFormData = z.infer<typeof contactSchema>;

export type ContactFormField = {
  name: keyof ContactFormData;
  label: string;
  placeholder: string;
  autoComplete: string;
  required: boolean;
  type?: string;
};

export type SubmitEvent =
  | BaseSyntheticEvent<object, unknown, unknown>
  | undefined;
