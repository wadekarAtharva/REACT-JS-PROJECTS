import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RandomColor from '../random_color/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RandomColor/>
    </>
  )
}

export default App
