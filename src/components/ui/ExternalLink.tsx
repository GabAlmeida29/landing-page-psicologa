import type { ReactNode } from 'react'

interface ExternalLinkProps {
  href: string
  external?: boolean
  children: ReactNode
}

export default function ExternalLink({ href, external = true, children }: ExternalLinkProps) {
  return (
    <a
      href={href}
      className="link"
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {children}
    </a>
  )
}
