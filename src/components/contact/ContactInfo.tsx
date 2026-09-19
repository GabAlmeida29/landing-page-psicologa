import EmailOutlined from '@mui/icons-material/EmailOutlined'
import Instagram from '@mui/icons-material/Instagram'
import PlaceOutlined from '@mui/icons-material/PlaceOutlined'
import ScheduleOutlined from '@mui/icons-material/ScheduleOutlined'
import WhatsApp from '@mui/icons-material/WhatsApp'
import { LABELS, SITE, TEXTS } from '../../constants'
import { instagramUrl, mailtoUrl, whatsappLink } from '../../utils/links'
import { formatInternationalPhone } from '../../utils/phone'
import ExternalLink from '../ui/ExternalLink'
import InfoRow from '../ui/InfoRow'

export default function ContactInfo() {
  return (
    <div className="info-list">
      <InfoRow icon={WhatsApp} label={LABELS.whatsapp}>
        <ExternalLink href={whatsappLink()}>{formatInternationalPhone(SITE.whatsapp)}</ExternalLink>
      </InfoRow>
      <InfoRow icon={EmailOutlined} label={LABELS.email}>
        <ExternalLink href={mailtoUrl()} external={false}>
          {SITE.email}
        </ExternalLink>
      </InfoRow>
      <InfoRow icon={Instagram} label={LABELS.instagram}>
        <ExternalLink href={instagramUrl()}>{TEXTS.contact.instagramHandle}</ExternalLink>
      </InfoRow>
      <InfoRow icon={PlaceOutlined} label={LABELS.office}>
        {SITE.address.line1}
        <br />
        {SITE.address.line2}
      </InfoRow>
      <InfoRow icon={ScheduleOutlined} label={LABELS.hours}>
        {SITE.hours}
      </InfoRow>
    </div>
  )
}
