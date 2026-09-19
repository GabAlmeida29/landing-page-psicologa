import Container from '@mui/material/Container'
import type { ReactNode } from 'react'
import type { SectionTone } from '../../types'
import { cx } from '../../utils/classNames'
import SectionHeader from './SectionHeader'

interface SectionProps {
  id: string
  tone?: SectionTone
  eyebrow?: string
  title?: string
  intro?: string
  center?: boolean
  children: ReactNode
}

export default function Section({
  id,
  tone = 'default',
  eyebrow,
  title,
  intro,
  center = false,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cx('section', `section--${tone}`)}>
      <Container maxWidth="lg">
        {(eyebrow || title) && (
          <SectionHeader eyebrow={eyebrow} title={title} intro={intro} center={center} />
        )}
        {children}
      </Container>
    </section>
  )
}
