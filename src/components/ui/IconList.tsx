import type { ElementType } from 'react'

interface IconListProps {
  items: readonly string[]
  icon: ElementType
  variant: 'check' | 'credential'
}

export default function IconList({ items, icon: Icon, variant }: IconListProps) {
  return (
    <ul className={`icon-list icon-list--${variant}`}>
      {items.map((item) => (
        <li key={item} className="icon-list__item">
          <Icon className="icon-list__icon" />
          <span className="icon-list__text">{item}</span>
        </li>
      ))}
    </ul>
  )
}
