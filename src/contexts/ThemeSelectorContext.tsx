import { createContext, ReactNode, useState } from 'react'

type ThemeSelectorProps = {
  dark: boolean
  SetThemeProvider: () => void
}

type ThemeSelectorContextProviderProps = {
  children: ReactNode
}

export const ThemeSelector = createContext({} as ThemeSelectorProps)

export function ThemeSelectorContextProvider(
  props: ThemeSelectorContextProviderProps
) {
  const [dark, setDark] = useState(false)

  function SetThemeProvider() {
    setDark(!dark)
  }

  return (
    <ThemeSelector.Provider value={{ dark, SetThemeProvider }}>
      {props.children}
    </ThemeSelector.Provider>
  )
}
