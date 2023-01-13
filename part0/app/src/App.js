import React from 'react'
import { useState } from 'react'

function App() {
  const [counter,setCounter] = useState(0);
  // update counter value with setTimeOut function
  setTimeout(() => {
    setCounter(counter+1)
  }, 1000)
  return (
    <div>
      <h4>{counter}</h4>
    </div>
  )
}

export default App
