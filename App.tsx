import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Bientot from './toolkit/components/Bientot/Bientot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Bientot />
    </div>
  )
}

export default App
