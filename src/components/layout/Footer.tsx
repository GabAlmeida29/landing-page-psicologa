import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { A11Y, SITE, TEXTS } from '../../constants'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="footer__grid">
          <div>
            <Typography className="footer__name">{SITE.name}</Typography>
            <Typography variant="body2" className="footer__role">
              {TEXTS.footer.role}
            </Typography>
            <Typography variant="body2" className="footer__tagline">
              {TEXTS.footer.tagline}
            </Typography>
          </div>
          <nav className="footer__nav" aria-label={A11Y.footerNav}>
            <NavLinks linkClassName="footer__link" />
          </nav>
          <SocialLinks />
        </div>
        <div className="footer__bottom">
          <Typography variant="caption" component="p" className="footer__notice">
            {TEXTS.footer.notice}
          </Typography>
          <Typography variant="caption" component="p" className="footer__copy">
            {TEXTS.footer.copyright}
          </Typography>
        </div>
      </Container>
    </footer>
  )
}
