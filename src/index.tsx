import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import './services/firebase'
import { ThemeSelectorContextProvider } from './contexts/ThemeSelectorContext'

ReactDOM.render(
  <React.StrictMode>
    <ThemeSelectorContextProvider>
      <App />
    </ThemeSelectorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
