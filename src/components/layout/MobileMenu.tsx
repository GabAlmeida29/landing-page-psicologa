import Close from '@mui/icons-material/Close'
import Menu from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { A11Y, LABELS, NAV_LINKS } from '../../constants'
import { useDisclosure } from '../../hooks/useDisclosure'
import WhatsAppButton from '../ui/WhatsAppButton'

export default function MobileMenu() {
  const { open, onOpen, onClose } = useDisclosure()

  return (
    <>
      <IconButton aria-label={A11Y.openMenu} onClick={onOpen} className="header__menu-button">
        <Menu />
      </IconButton>
      <Drawer
        anchor="right"
        open={open}
        onClose={onClose}
        slotProps={{ paper: { className: 'drawer-paper' } }}
      >
        <div className="drawer__top">
          <IconButton aria-label={A11Y.closeMenu} onClick={onClose}>
            <Close />
          </IconButton>
        </div>
        <List component="nav" aria-label={A11Y.mobileNav} className="drawer__list">
          {NAV_LINKS.map((link) => (
            <ListItemButton
              key={link.href}
              component="a"
              href={link.href}
              onClick={onClose}
              className="drawer__item"
            >
              <ListItemText
                primary={link.label}
                slotProps={{ primary: { className: 'drawer__item-text' } }}
              />
            </ListItemButton>
          ))}
        </List>
        <div className="drawer__cta">
          <WhatsAppButton fullWidth size="large" label={LABELS.scheduleConversation} />
        </div>
      </Drawer>
    </>
  )
}
