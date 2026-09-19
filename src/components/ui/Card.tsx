import type { ReactNode } from 'react'
import { cx } from '../../utils/classNames'

interface CardProps {
  as?: 'div' | 'figure'
  interactive?: boolean
  column?: boolean
  children: ReactNode
}

export default function Card({
  as: Tag = 'div',
  interactive = false,
  column = false,
  children,
}: CardProps) {
  return (
    <Tag className={cx('card', interactive && 'card--interactive', column && 'card--column')}>
      {children}
    </Tag>
  )
}
