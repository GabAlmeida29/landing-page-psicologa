import { CONFIG, SECTION_IDS, TEXTS } from '../../constants'
import ContactForm from '../contact/ContactForm'
import ContactInfo from '../contact/ContactInfo'
import ContactMap from '../contact/ContactMap'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Contact() {
  const { eyebrow, title, text } = TEXTS.contact

  return (
    <Section
      id={SECTION_IDS.contact}
      tone="paper"
      eyebrow={eyebrow}
      title={title}
      intro={text}
      center
    >
      <div className="contact__grid">
        <Reveal>
          <ContactInfo />
          <ContactMap />
        </Reveal>
        <Reveal delay={CONFIG.contactRevealDelayMs}>
          <div className="panel">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
