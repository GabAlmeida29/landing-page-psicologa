import Typography from '@mui/material/Typography'
import { CONFIG, SECTION_IDS, TEXTS } from '../../constants'
import CardGrid from '../ui/CardGrid'
import QuoteCard from '../ui/QuoteCard'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'

export default function Testimonials() {
  const { eyebrow, title, note, items } = TEXTS.testimonials

  return (
    <Section id={SECTION_IDS.testimonials} tone="paper" eyebrow={eyebrow} title={title} center>
      <CardGrid columns="quotes">
        {items.map((item, index) => (
          <Reveal key={item.author} delay={index * CONFIG.revealStaggerMs} stretch>
            <QuoteCard text={item.text} author={item.author} />
          </Reveal>
        ))}
      </CardGrid>
      <Typography variant="caption" className="section__note">
        {note}
      </Typography>
    </Section>
  )
}
