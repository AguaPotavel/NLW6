import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'

import Home from './pages/Home'
import NewRoom from './pages/NewRoom'
import Room from './pages/Room/index.'
import { AdminRoom } from './pages/AdminRoom'
import { ThemeProvider } from 'styled-components'
import { SelectTheme } from './styles/theme'

import { AuthContextProvider } from './contexts/AuthContext'
import { ThemeSelector } from './contexts/ThemeSelectorContext'
import GlobalStyle from './styles/global'
import { SwitchComponent } from './components/Switch'

function App() {
  const [theme, setTheme] = useState({})
  const value = useContext(ThemeSelector)

  useEffect(() => {
    setTheme(SelectTheme(value.dark))
  }, [value])

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <SwitchComponent />
        <AuthContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </Switch>
        </AuthContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
