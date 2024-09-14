import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1 className="text-3xl font-bold underline bg-green-400 text-black rounded-xl p-4 mb-10">
      tailwind
    </h1>

    <Card iteamName='macbook' />
    <Card iteamName = 'dell'/>
    <Card />

    </>
  )
}
 
export default App
