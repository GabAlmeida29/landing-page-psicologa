import { A11Y, SECTION_IDS } from '../../constants'

export default function SkipLink() {
  return (
    <a href={`#${SECTION_IDS.content}`} className="skip-link">
      {A11Y.skipLink}
    </a>
  )
}
