import CheckCircleOutlined from '@mui/icons-material/CheckCircleOutlined'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { A11Y, CONFIG, IMAGES, LABELS, SECTION_IDS, TEXTS } from '../../constants'
import Eyebrow from '../ui/Eyebrow'
import IconList from '../ui/IconList'
import Photo from '../ui/Photo'
import Reveal from '../ui/Reveal'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function Hero() {
  return (
    <section id={SECTION_IDS.top} className="hero">
      <span aria-hidden className="hero__shape hero__shape--top" />
      <span aria-hidden className="hero__shape hero__shape--bottom" />
      <Container maxWidth="lg" className="hero__container">
        <div className="hero__grid">
          <Reveal>
            <Eyebrow>{TEXTS.hero.eyebrow}</Eyebrow>
            <Typography variant="h1" component="h1" className="hero__title">
              {TEXTS.hero.title}
            </Typography>
            <Typography className="hero__text">{TEXTS.hero.text}</Typography>
            <div className="hero__actions">
              <WhatsAppButton withIcon size="large" label={LABELS.scheduleWhatsApp} />
              <Button
                variant="outlined"
                size="large"
                color="secondary"
                href={`#${SECTION_IDS.about}`}
              >
                {LABELS.knowMyWork}
              </Button>
            </div>
            <IconList items={TEXTS.hero.highlights} icon={CheckCircleOutlined} variant="check" />
          </Reveal>
          <Reveal delay={CONFIG.heroRevealDelayMs} className="hero__media">
            <div className="hero__frame">
              <span aria-hidden className="hero__frame-outline" />
              <Photo src={IMAGES.hero} alt={A11Y.heroPhoto} shape="arch" eager />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
