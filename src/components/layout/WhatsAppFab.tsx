import WhatsApp from '@mui/icons-material/WhatsApp'
import Fab from '@mui/material/Fab'
import Tooltip from '@mui/material/Tooltip'
import { A11Y } from '../../constants'
import { whatsappLink } from '../../utils/links'

export default function WhatsAppFab() {
  return (
    <Tooltip title={A11Y.chatOnWhatsApp} placement="left">
      <Fab
        aria-label={A11Y.chatOnWhatsApp}
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-fab"
      >
        <WhatsApp className="whatsapp-fab__icon" />
      </Fab>
    </Tooltip>
  )
}
