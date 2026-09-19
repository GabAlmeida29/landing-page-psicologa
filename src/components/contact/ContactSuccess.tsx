import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import { LABELS, MESSAGES } from '../../constants'
import type { ContactFormValues } from '../../schemas/contactSchema'
import { firstName } from '../../utils/text'
import WhatsAppButton from '../ui/WhatsAppButton'

interface ContactSuccessProps {
  values: ContactFormValues
  onStartOver: () => void
}

export default function ContactSuccess({ values, onStartOver }: ContactSuccessProps) {
  return (
    <div className="form-success" role="status">
      <Alert severity="success" className="form-success__alert">
        {MESSAGES.contactSuccess(firstName(values.nome))}
      </Alert>
      <div className="form-success__actions">
        <WhatsAppButton
          withIcon
          label={LABELS.openWhatsApp}
          message={MESSAGES.whatsappFromForm(values)}
        />
        <Button variant="text" color="secondary" onClick={onStartOver}>
          {LABELS.sendAnother}
        </Button>
      </div>
    </div>
  )
}
