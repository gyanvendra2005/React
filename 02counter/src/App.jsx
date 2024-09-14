import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'







function App() {

  let [counter, setCounter] = useState(0)

const increase = () => {
  console.log("the value of counter is ",counter);
  
  setCounter(counter + 1)
}
// if(counter>=0){
  const decrease = () => {
    console.log("the value of counter is ",counter);
    
    if(counter>0){
      setCounter(counter - 1)
    }
    
  }

// let counter = 15

  return (
    <>
      <h1>first counter project with react</h1>
      <p>count is: {counter}</p>
      <button onClick={increase} >increace {counter}</button>
      <br />
      <button onClick={decrease}>decrease {counter}</button>
    </>
  )
}

export default App
