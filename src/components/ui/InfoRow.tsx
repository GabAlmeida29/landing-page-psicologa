import type { ElementType, ReactNode } from 'react'
import IconBadge from './IconBadge'

interface InfoRowProps {
  icon: ElementType
  label: string
  children: ReactNode
}

export default function InfoRow({ icon, label, children }: InfoRowProps) {
  return (
    <div className="info-row">
      <IconBadge icon={icon} small />
      <div>
        <div className="info-row__label">{label}</div>
        <div className="info-row__value">{children}</div>
      </div>
    </div>
  )
}
