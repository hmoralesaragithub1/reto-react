import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import IndexPage from './pages/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <IndexPage/>
  )
}

export default App
