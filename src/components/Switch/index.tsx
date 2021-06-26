import { ButtonHTMLAttributes } from 'react'
import { useContext } from 'react'
import { ThemeSelector } from '../../contexts/ThemeSelectorContext'

// import '../styles/button.scss';

import { SwitchContainer, InsideIndicator } from './style'

export function SwitchComponent() {
  const value = useContext(ThemeSelector)
  return (
    <SwitchContainer
      state={value.dark}
      className={`${value.dark ? 'dark' : ''}`}
      onClick={() => value.SetThemeProvider()}
    >
      <InsideIndicator />
    </SwitchContainer>
  )
}
