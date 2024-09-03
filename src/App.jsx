import { useState } from 'react'
import './App.css'
import Event from './component/Event'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Event/>
    </>
  )
}

export default App
