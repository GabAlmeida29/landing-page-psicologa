import { SECTION_IDS, TEXTS } from '../../constants'
import FaqItem from '../ui/FaqItem'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Faq() {
  const { eyebrow, title, items } = TEXTS.faq

  return (
    <Section id={SECTION_IDS.faq} eyebrow={eyebrow} title={title} center>
      <Reveal>
        <div className="faq">
          {items.map((item, index) => (
            <FaqItem
              key={item.question}
              id={`faq-${index}`}
              question={item.question}
              answer={item.answer}
              defaultExpanded={index === 0}
            />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
