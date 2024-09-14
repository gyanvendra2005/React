import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  
   const [color, setcolor]  = useState('olive')

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
      <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
      <button className=' px-4 py-1 rounded-full text-white shadow-lg outline-none' style={{backgroundColor: "red"}} onClick={()=> setcolor('red')}>red</button>
      <button className=' px-4 py-1 rounded-full text-white shadow-lg outline-none' style={{backgroundColor: "yellow"}} onClick={()=> setcolor('yellow')}> yellow </button>
      <button className=' px-4 py-1 rounded-full text-white shadow-lg outline-none' style={{backgroundColor:"black"}} onClick={()=> setcolor('black')}> black </button>
      <button className=' px-4 py-1 rounded-full text-black shadow-lg outline-none' style={{backgroundColor:"white"}} onClick={()=> setcolor('white')}> white </button>
      <button className=' px-4 py-1 rounded-full text-white shadow-lg outline-none' style={{backgroundColor:"green"}} onClick={()=> setcolor('green')}> green</button>
      <button className=' px-4 py-1 rounded-full text-white shadow-lg outline-none' style={{backgroundColor:"blue"}} onClick={()=> setcolor('blue')}> blue</button>
      <button className=' px-4 py-1 rounded-full text-white shadow-lg outline-none' style={{backgroundColor:"olive"}} onClick={()=> setcolor('olive')}> olive</button>
      </div>
     </div>
     </div>


    </>
  )
}

export default App
