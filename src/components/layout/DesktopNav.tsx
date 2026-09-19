import { A11Y, LABELS } from '../../constants'
import WhatsAppButton from '../ui/WhatsAppButton'
import NavLinks from './NavLinks'

export default function DesktopNav() {
  return (
    <nav className="nav" aria-label={A11Y.mainNav}>
      <NavLinks linkClassName="nav__link" />
      <WhatsAppButton label={LABELS.scheduleConversation} />
    </nav>
  )
}
