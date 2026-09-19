import { CONFIG, SECTION_IDS, TEXTS } from '../../constants'
import InfoTile from '../ui/InfoTile'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import StepItem from '../ui/StepItem'

export default function HowItWorks() {
  const { eyebrow, title, steps, info } = TEXTS.howItWorks

  return (
    <Section id={SECTION_IDS.howItWorks} tone="dark" eyebrow={eyebrow} title={title} center>
      <div className="steps">
        {steps.map((step, index) => (
          <Reveal key={step.title} delay={index * CONFIG.revealStaggerMs}>
            <StepItem index={index} title={step.title} text={step.text} />
          </Reveal>
        ))}
      </div>
      <Reveal>
        <div className="info-grid">
          {info.map((item) => (
            <InfoTile key={item.label} label={item.label} value={item.value} />
          ))}
        </div>
      </Reveal>
    </Section>
  )
}
