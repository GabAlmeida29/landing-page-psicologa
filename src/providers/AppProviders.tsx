import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import type { ReactNode } from 'react'
import { theme } from '../theme'
import { cssVariables } from '../theme/cssVariables'

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={cssVariables} />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
