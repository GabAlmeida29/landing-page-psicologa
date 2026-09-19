import Container from '@mui/material/Container'
import Brand from './Brand'
import DesktopNav from './DesktopNav'
import MobileMenu from './MobileMenu'

export default function Header() {
  return (
    <header className="header">
      <Container maxWidth="lg">
        <div className="header__bar">
          <Brand />
          <DesktopNav />
          <MobileMenu />
        </div>
      </Container>
    </header>
  )
}
