import { z } from 'zod'
import { CONFIG, FORM, MODALITIES } from '../constants'
import { isValidPhone } from '../utils/phone'

export const contactSchema = z.object({
  nome: z.string().trim().min(CONFIG.nameMinLength, FORM.validation.name),
  telefone: z.string().refine(isValidPhone, FORM.validation.phone),
  email: z.union([z.literal(''), z.email(FORM.validation.email)]),
  modalidade: z.enum(MODALITIES),
  mensagem: z
    .string()
    .trim()
    .min(CONFIG.messageMinLength, FORM.validation.messageMin)
    .max(CONFIG.messageMaxLength, FORM.validation.messageMax),
  lgpd: z.boolean().refine((accepted) => accepted, FORM.validation.consent),
})

export type ContactFormValues = z.infer<typeof contactSchema>

export const contactDefaultValues: ContactFormValues = {
  nome: '',
  telefone: '',
  email: '',
  modalidade: MODALITIES[0],
  mensagem: '',
  lgpd: false,
}
