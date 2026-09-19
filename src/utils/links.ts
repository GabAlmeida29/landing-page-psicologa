import { MESSAGES, SITE, URLS } from '../constants'

export const whatsappLink = (message: string = MESSAGES.whatsappGreeting) =>
  `${URLS.whatsapp}${SITE.whatsapp}?text=${encodeURIComponent(message)}`

export const instagramUrl = () => `${URLS.instagram}${SITE.instagram}`

export const mailtoUrl = () => `mailto:${SITE.email}`

export const mapEmbedUrl = () => {
  const query = encodeURIComponent(`${SITE.address.line1}, ${SITE.address.line2}`)
  return `${URLS.mapsEmbed}?q=${query}&output=embed`
}
