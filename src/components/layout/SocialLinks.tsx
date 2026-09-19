import Instagram from '@mui/icons-material/Instagram'
import WhatsApp from '@mui/icons-material/WhatsApp'
import IconButton from '@mui/material/IconButton'
import { LABELS } from '../../constants'
import { instagramUrl, whatsappLink } from '../../utils/links'

export default function SocialLinks() {
  return (
    <div className="footer__social">
      <IconButton
        aria-label={LABELS.whatsapp}
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="footer__social-button"
      >
        <WhatsApp />
      </IconButton>
      <IconButton
        aria-label={LABELS.instagram}
        href={instagramUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="footer__social-button"
      >
        <Instagram />
      </IconButton>
    </div>
  )
}
