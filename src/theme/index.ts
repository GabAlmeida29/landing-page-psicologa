import { createTheme } from '@mui/material/styles'
import { FONTS, PALETTE, RADII } from '../constants'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: PALETTE.terracotta,
      dark: PALETTE.terracottaDark,
      contrastText: PALETTE.white,
    },
    secondary: { main: PALETTE.olive, contrastText: PALETTE.white },
    background: { default: PALETTE.cream, paper: PALETTE.surface },
    text: { primary: PALETTE.text, secondary: PALETTE.muted },
    divider: PALETTE.line,
  },
  shape: { borderRadius: RADII.card },
  typography: {
    fontFamily: FONTS.sans,
    h1: {
      fontFamily: FONTS.serif,
      fontWeight: 500,
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      fontSize: 'clamp(2.3rem, 4.8vw, 3.6rem)',
    },
    h2: {
      fontFamily: FONTS.serif,
      fontWeight: 500,
      lineHeight: 1.15,
      letterSpacing: '-0.01em',
      fontSize: 'clamp(1.9rem, 3.6vw, 2.75rem)',
    },
    h3: { fontFamily: FONTS.serif, fontWeight: 500, fontSize: '1.4rem', lineHeight: 1.25 },
    h4: { fontFamily: FONTS.serif, fontWeight: 500, fontSize: '1.2rem' },
    body1: { fontSize: '1.02rem', lineHeight: 1.75 },
    body2: { lineHeight: 1.7 },
    button: { textTransform: 'none', fontWeight: 600, letterSpacing: 0 },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: RADII.pill, paddingInline: 26, paddingBlock: 11 },
        sizeLarge: { paddingInline: 32, paddingBlock: 14, fontSize: '1rem' },
      },
    },
    MuiAccordion: {
      defaultProps: { disableGutters: true, elevation: 0, square: false },
      styleOverrides: {
        root: {
          border: `1px solid ${PALETTE.line}`,
          borderRadius: RADII.card,
          '&:before': { display: 'none' },
          '&:not(:last-child)': { marginBottom: 12 },
          '&.Mui-expanded': { backgroundColor: PALETTE.surface },
        },
      },
    },
    MuiTextField: { defaultProps: { variant: 'outlined', fullWidth: true } },
    MuiOutlinedInput: {
      styleOverrides: { root: { borderRadius: RADII.input, backgroundColor: PALETTE.white } },
    },
  },
})
