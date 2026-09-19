import Button from '@mui/material/Button'
import { A11Y, FORM, LABELS, MODALITIES } from '../../constants'
import { useContactForm } from '../../hooks/useContactForm'
import type { ContactFormValues } from '../../schemas/contactSchema'
import { formatPhone } from '../../utils/phone'
import ContactSuccess from './ContactSuccess'
import FormCheckbox from './FormCheckbox'
import FormSelect from './FormSelect'
import FormTextField from './FormTextField'

export default function ContactForm() {
  const { control, submit, isSubmitting, sent, startOver } = useContactForm()

  if (sent) return <ContactSuccess values={sent} onStartOver={startOver} />

  return (
    <form className="form" noValidate onSubmit={submit} aria-label={A11Y.contactForm}>
      <FormTextField<ContactFormValues>
        name="nome"
        control={control}
        label={FORM.labels.name}
        autoComplete="name"
      />
      <div className="form__row">
        <FormTextField<ContactFormValues>
          name="telefone"
          control={control}
          label={FORM.labels.phone}
          placeholder={FORM.phonePlaceholder}
          autoComplete="tel"
          inputMode="tel"
          format={formatPhone}
        />
        <FormTextField<ContactFormValues>
          name="email"
          control={control}
          label={FORM.labels.email}
          type="email"
          autoComplete="email"
        />
      </div>
      <FormSelect<ContactFormValues>
        name="modalidade"
        control={control}
        label={FORM.labels.modality}
        options={MODALITIES}
      />
      <FormTextField<ContactFormValues>
        name="mensagem"
        control={control}
        label={FORM.labels.message}
        multiline
        minRows={4}
      />
      <FormCheckbox<ContactFormValues> name="lgpd" control={control} label={FORM.consent} />
      <Button type="submit" variant="contained" size="large" disabled={isSubmitting}>
        {LABELS.sendMessage}
      </Button>
    </form>
  )
}
