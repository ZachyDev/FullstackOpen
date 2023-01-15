import React from 'react'
import { useState } from 'react'
import BlogContent from './components/BlogContent'
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      {/* Blog content component */}
      <BlogContent />
      <span>{counter}</span>
      {/* increment counter button */}
      <button onClick={() => setCounter(counter + 1)}>increment Counter</button>
      {/* reset counter */}
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
}

export default App
