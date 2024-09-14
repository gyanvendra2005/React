import { useState, useEffect, useCallback, useRef } from 'react'

function App() {
 
const [length, setLength] = useState(8)
const [numbers, setNumber] = useState(false)
const [characters, setCharacter] = useState(false)
const [password , setPassword] = useState("")
const refferance = useRef(null) 


const passwordGenerator =   useCallback(() => {
  let pass =""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  let num = "1234567890"
  let ch ="~`!@#$%^&*()-_=+{}[]:;<>/?"
  
  if(numbers){
    str = str + num
  }
  if(characters){
    str = str + ch
  }
 
  for(let i=0;i<length;i++){
    let index = Math.floor(Math.random()*str.length+1)
    pass += str.charAt(index)
  }

  setPassword(pass)
},
  

  [length, numbers, characters, setPassword] 
)

useEffect(() => {
  passwordGenerator()
}, [length, numbers, characters, passwordGenerator])

const copyClipboard = () => {
  window.navigator.clipboard.writeText(password)
  refferance.current?.select()
}


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Passworrd'
          readOnly
          ref={refferance}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 ml-2' onClick={copyClipboard} >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex item-center gap-x-1'>
            <input 
            type="range" 
            min={8}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label> length: {length}</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numbers}
            id='numberInput'
            onChange={() => {
              setNumber((prev) => !prev);
            }}  
            />
            <label>Numbers</label>
          </div>
          <div className='flex item-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={characters}
            id='numberInput'
            onChange={() => {
              setCharacter((prev) => !prev);
            }}  
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
