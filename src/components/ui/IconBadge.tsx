import type { ElementType } from 'react'
import { cx } from '../../utils/classNames'

interface IconBadgeProps {
  icon: ElementType
  small?: boolean
}

export default function IconBadge({ icon: Icon, small = false }: IconBadgeProps) {
  return (
    <span className={cx('icon-badge', small && 'icon-badge--sm')}>
      <Icon fontSize={small ? 'small' : 'medium'} />
    </span>
  )
}
