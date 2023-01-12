import React from 'react'
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  setTimeout(() => {
    setCounter(counter + 1)
  },1000)
 
  return (
    <div className="App">
      <p>Counter: {counter}</p>
    </div>
  )
}

export default App
