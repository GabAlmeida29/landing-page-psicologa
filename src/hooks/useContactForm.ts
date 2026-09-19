import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  contactDefaultValues,
  contactSchema,
  type ContactFormValues,
} from '../schemas/contactSchema'

export function useContactForm() {
  const [sent, setSent] = useState<ContactFormValues | null>(null)

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: contactDefaultValues,
    mode: 'onTouched',
  })

  const submit = handleSubmit((values) => setSent(values))

  const startOver = () => {
    setSent(null)
    reset(contactDefaultValues)
  }

  return { control, submit, isSubmitting, sent, startOver }
}
