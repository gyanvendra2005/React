import React, { useEffect, useState } from 'react'

import ThemeBtn from './components/togglebutton/ThemeBtn'
import { ThemeProvider } from './context/Theme'


function App() {
    const [Theme , setTheme] = useState('light')
    const darkTheme = () => {
         setTheme("dark")
    }
    const lightTheme = () => {
        setTheme("light")
    }
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(Theme)
    }, [Theme])
    
   return(
    <ThemeProvider value={{Theme, lightTheme, darkTheme}}>
        <ThemeBtn />
    </ThemeProvider>
   )
}

export default App
