import WhatsApp from '@mui/icons-material/WhatsApp'
import Button, { type ButtonProps } from '@mui/material/Button'
import { whatsappLink } from '../../utils/links'

interface WhatsAppButtonProps extends Pick<ButtonProps, 'size' | 'fullWidth'> {
  label: string
  message?: string
  withIcon?: boolean
}

export default function WhatsAppButton({
  label,
  message,
  withIcon = false,
  ...buttonProps
}: WhatsAppButtonProps) {
  return (
    <Button
      variant="contained"
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      startIcon={withIcon ? <WhatsApp /> : undefined}
      {...buttonProps}
    >
      {label}
    </Button>
  )
}
