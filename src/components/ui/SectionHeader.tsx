import Typography from '@mui/material/Typography'
import { cx } from '../../utils/classNames'
import Eyebrow from './Eyebrow'
import Reveal from './Reveal'

interface SectionHeaderProps {
  eyebrow?: string
  title?: string
  intro?: string
  center: boolean
}

export default function SectionHeader({ eyebrow, title, intro, center }: SectionHeaderProps) {
  return (
    <Reveal className={cx('section__header', center && 'section__header--center')}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      {title && (
        <Typography variant="h2" component="h2">
          {title}
        </Typography>
      )}
      {intro && <Typography className="section__intro">{intro}</Typography>}
    </Reveal>
  )
}
