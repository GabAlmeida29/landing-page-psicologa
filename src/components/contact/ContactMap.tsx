import { A11Y } from '../../constants'
import { mapEmbedUrl } from '../../utils/links'

export default function ContactMap() {
  return (
    <div className="map">
      <iframe
        title={A11Y.mapTitle}
        src={mapEmbedUrl()}
        className="map__frame"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}
