import React from 'react'
import Routes from 'routes'
import { ThemeProvider } from 'styled-components'
import theme from 'styles/theme'
import GlobalStyles from './styles/global'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}

export default App
