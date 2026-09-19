import { NAV_LINKS } from '../../constants'

interface NavLinksProps {
  linkClassName: string
}

export default function NavLinks({ linkClassName }: NavLinksProps) {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <a key={link.href} href={link.href} className={linkClassName}>
          {link.label}
        </a>
      ))}
    </>
  )
}
