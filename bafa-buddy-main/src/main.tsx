import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const setTheme = (isDark: boolean) => {
  document.documentElement.classList.toggle('dark', isDark)
}

setTheme(mediaQuery.matches)
mediaQuery.addEventListener('change', (e) => setTheme(e.matches))

createRoot(document.getElementById('root')!).render(<App />)
