import { CONFIG, SECTION_IDS, TEXTS } from '../../constants'
import CardGrid from '../ui/CardGrid'
import FeatureCard from '../ui/FeatureCard'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Services() {
  const { eyebrow, title, intro, items } = TEXTS.services

  return (
    <Section id={SECTION_IDS.services} eyebrow={eyebrow} title={title} intro={intro} center>
      <CardGrid columns="three">
        {items.map((item, index) => (
          <Reveal
            key={item.title}
            delay={(index % CONFIG.revealStaggerColumns) * CONFIG.revealStaggerMs}
            stretch
          >
            <FeatureCard icon={item.icon} title={item.title} text={item.text} />
          </Reveal>
        ))}
      </CardGrid>
    </Section>
  )
}
