import { SECTION_IDS, SITE, TEXTS } from '../../constants'

export default function Brand() {
  return (
    <a href={`#${SECTION_IDS.top}`} className="brand">
      <span className="brand__name">{SITE.name}</span>
      <span className="brand__role">{TEXTS.header.role}</span>
    </a>
  )
}
