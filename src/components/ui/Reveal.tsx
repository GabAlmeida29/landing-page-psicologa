import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../../hooks/useInView'
import { cx } from '../../utils/classNames'

interface RevealProps {
  children: ReactNode
  delay?: number
  stretch?: boolean
  className?: string
}

export default function Reveal({ children, delay = 0, stretch = false, className }: RevealProps) {
  const { ref, visible } = useInView<HTMLDivElement>()
  const style = { '--reveal-delay': `${delay}ms` } as CSSProperties

  return (
    <div
      ref={ref}
      style={style}
      className={cx(
        'reveal',
        visible && 'reveal--visible',
        stretch && 'reveal--stretch',
        className,
      )}
    >
      {children}
    </div>
  )
}
