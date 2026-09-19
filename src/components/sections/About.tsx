import SchoolOutlined from '@mui/icons-material/SchoolOutlined'
import Typography from '@mui/material/Typography'
import { A11Y, CONFIG, IMAGES, SECTION_IDS, SITE, TEXTS } from '../../constants'
import Eyebrow from '../ui/Eyebrow'
import IconList from '../ui/IconList'
import Photo from '../ui/Photo'
import Reveal from '../ui/Reveal'
import Section from '../ui/Section'
import Stats from '../ui/Stats'

export default function About() {
  return (
    <Section id={SECTION_IDS.about} tone="paper">
      <div className="about__grid">
        <Reveal className="about__media">
          <Photo src={IMAGES.about} alt={A11Y.aboutPhoto} shape="leaf" />
        </Reveal>
        <Reveal delay={CONFIG.aboutRevealDelayMs}>
          <Eyebrow>{TEXTS.about.eyebrow}</Eyebrow>
          <Typography variant="h2" component="h2" className="about__title">
            {TEXTS.about.title}
          </Typography>
          <div className="stack stack--md about__paragraphs">
            {TEXTS.about.paragraphs.map((paragraph) => (
              <Typography key={paragraph}>{paragraph}</Typography>
            ))}
          </div>
          <Typography variant="h4" component="h3" className="about__subtitle">
            {TEXTS.about.credentialsTitle}
          </Typography>
          <IconList items={TEXTS.about.credentials} icon={SchoolOutlined} variant="credential" />
          <Typography variant="body2" className="about__meta">
            <strong>{SITE.crp}</strong> · {SITE.approach}
          </Typography>
          <Stats items={TEXTS.about.stats} />
        </Reveal>
      </div>
    </Section>
  )
}
