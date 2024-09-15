
import { useEffect, useState } from 'react'
import './App.css'
// import { ThemeProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn'
import { ThemeProvider } from './context/Theme'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
     
                  <ThemeBtn />
    </ThemeProvider>
  )
}

export default App