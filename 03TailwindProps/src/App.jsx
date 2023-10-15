import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=' flex flex-col justify-center items-center'>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-3'>Chai aur Tailwind</h1>
      <Card name="Vishal" source={viteLogo}/>
      <Card name="Chai aur React"/>
      </div>
      
    </>
  )
}

export default App
