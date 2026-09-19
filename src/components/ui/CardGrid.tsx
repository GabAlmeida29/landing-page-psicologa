import type { ReactNode } from 'react'

interface CardGridProps {
  columns: 'three' | 'quotes'
  children: ReactNode
}

export default function CardGrid({ columns, children }: CardGridProps) {
  return <div className={`card-grid card-grid--${columns}`}>{children}</div>
}
